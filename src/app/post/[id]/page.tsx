'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Post() {
  // const router = useRouter();
  const pathName = usePathname();
  const segments = pathName.split('/');
  const id = segments[segments.length - 1];
  console.log('id:', id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="bg-white grid gap-2 p-5 text-black">
        <h1 className="text-3xl">{id}</h1>
        <p>Neki kao text</p>
      </div>
    </main>
  );
}
