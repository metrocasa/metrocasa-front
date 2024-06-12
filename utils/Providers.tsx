'use client';

import { ReactNode, useEffect } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 5,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
          },
        },
      }),
  );

  useEffect(() => {
    const sessionStoragePersister = createSyncStoragePersister({
      storage: window.sessionStorage,
    });

    persistQueryClient({
      queryClient,
      persister: sessionStoragePersister,
    });
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
