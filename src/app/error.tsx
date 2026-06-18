"use client";

import Link from "next/link";
import { useEffect } from "react";

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
    <main className="section-shell flex min-h-[80vh] items-center justify-center py-24 text-center">
      <div className="w-full max-w-2xl space-y-6">
        <p className="curly-label">{`{ Error }`}</p>
        <h1 className="text-[clamp(4rem,14vw,9rem)] leading-[0.9] tracking-[-0.06em] text-[color:var(--color-pulse-green)]">
          500
        </h1>
        <h2 className="text-2xl leading-[1.05] tracking-[-0.03em] sm:text-3xl">
          Terjadi kesalahan saat memuat halaman.
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
          Saya sudah mencatat error-nya. Silakan coba lagi, atau kembali ke
          beranda untuk melanjutkan navigasi.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={reset} className="pill-link">
            Coba lagi
          </button>
          <Link href="/" className="pill-link">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
