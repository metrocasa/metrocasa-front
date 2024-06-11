import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

// INTERFACE
export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  cargos: string[];
  profile_image: {
    url: string;
  };
}

const UserContext = createContext<{ user: User | null }>({
  user: null,
});

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const path = usePathname();
  const isDashboardPage = path.startsWith('/dashboard');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const authorizationToken = isDashboardPage
          ? Cookies.get('session')
          : process.env.NEXT_PUBLIC_API_GENERAL_TOKEN;

        const config = {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        };

        const response = await axios.get<User>(
          `${BASE_URL}/api/users/me?populate=*`,
          config,
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null); // Limpar o estado do usuário em caso de erro
      }
    };

    fetchUser();
  }, [isDashboardPage]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useUser = (): { user: User | null } => useContext(UserContext);

export { UserProvider, useUser };
