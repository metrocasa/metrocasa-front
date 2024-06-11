import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { Posts } from '@/types/global';

// INTERFACE

const BlogContext = createContext<{ posts: Posts | null }>({
  posts: null,
});

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Posts | null>(null);

  const path = usePathname();
  const isDashboardPage = path.startsWith('/dashboard');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const authorizationToken = isDashboardPage
          ? Cookies.get('session')
          : process.env.NEXT_PUBLIC_API_GENERAL_TOKEN;

        const config = {
          headers: {
            Authorization: `Bearer ${authorizationToken}`,
          },
        };

        const response = await axios.get<Posts>(
          `${BASE_URL}/api/posts?populate=*`,
          config,
        );
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching Blog:', error);
        setPosts(null);
      }
    };

    fetchBlog();
  }, [isDashboardPage]);

  return (
    <BlogContext.Provider value={{ posts }}>{children}</BlogContext.Provider>
  );
};

const useBlog = (): { posts: Posts | null } => useContext(BlogContext);

export { BlogProvider, useBlog };
