"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-red-bg">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-2xl mb-4">Aconteceu um probleminha aqui.</h2>
        <p className="text-gray-600 mb-6">Que tal tentar denovo? 😣</p>
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => reset()}
            className="bg-main-red hover:bg-secondary-red transition text-white font-bold py-2 px-4 rounded"
          >
            Tentar novamente!
          </button>
          <Link
            href="/"
            className="text-gray-400 transition hover:text-main-red"
          >
            Ir para a home
          </Link>
        </div>
      </div>
    </div>
  );
}
