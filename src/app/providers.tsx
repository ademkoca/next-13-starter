'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Providers({ children }: { children: any }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
