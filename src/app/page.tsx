import Image from 'next/image';
import { Posts } from './posts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="bg-white grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-5">
        <Posts />
      </div>
    </main>
  );
}
