'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1
        className={`text-[120px] md:text-[180px] font-bold leading-none mb-4 font-jost bg-[url('/404.png')] bg-size-[200%_auto]
          animate-[bg-move_7s_linear_infinite]
          [@keyframes_bg-move]:from{background-position:top}
          [@keyframes_bg-move]:to{background-position:bottom} webkit-bg-clip-text webkit-text-fill-color-transparent text-transparent bg-clip-text`}
      >
        404
      </h1>

      <p
        className="uppercase mb-4"
        style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '30.8556px',
          fontWeight: 500,
          lineHeight: '37.0267px',
          color: '#000',
        }}
      >
        {`That page can't be found`}
      </p>

      <p className="text-gray-500 mb-6">
        It looks like nothing was found at this location. Try searching.
      </p>
    </section>
  );
}
