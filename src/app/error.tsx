"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="mb-4 text-6xl font-bold text-[#d9c5a7]">500</h1>
      <h2 className="mb-2 text-xl font-semibold text-white">
        Terjadi Kesalahan
      </h2>
      <p className="mb-8 max-w-md text-gray-400">
        Maaf, terjadi kesalahan pada server. Silakan coba lagi atau kembali ke
        halaman utama.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={reset}
          className="rounded-xl bg-[#d9c5a7] text-black hover:bg-[#d9c5a7]/80"
        >
          Coba Lagi
        </Button>
        <Button
          onClick={() => (window.location.href = "/")}
          variant="outline"
          className="rounded-xl border-[#d9c5a7] text-[#d9c5a7] hover:bg-[#d9c5a7]/10"
        >
          Kembali ke Beranda
        </Button>
      </div>
    </main>
  );
}
