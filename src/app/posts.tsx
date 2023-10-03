'use client';

import Image from 'next/image';
import { useQuery } from 'react-query';

export function Posts() {
  interface IPost {
    id: number;
    uid: string;
    brand: string;
    equipment: string;
  }
  const fetchData = async () => {
    const res = await fetch(
      'https://random-data-api.com/api/v2/appliances?size=12',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    );
    const data = await res.json();

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <p className="text-black">Loading data...</p>;
  if (error) return null;

  return data.map((d: IPost, idx: number) => (
    <div className="bg-orange-500 w-40 mb-3 rounded-lg" key={d.id}>
      <Image
        className="rounded-t-lg"
        src={`https://picsum.photos/200`}
        alt="random image"
        width={200}
        height={200}
      />
      <div className="flex flex-col align-middle w-[100%] p-2">
        <h2 className="text-black font-weight-600 w-100">{d.brand}</h2>
        <p>{d.equipment}</p>
      </div>
    </div>
  ));
}
