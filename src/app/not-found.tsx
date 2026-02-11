import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="mb-4 text-6xl font-bold text-[#d9c5a7]">404</h1>
      <h2 className="mb-2 text-xl font-semibold text-white">
        Halaman Tidak Ditemukan
      </h2>
      <p className="mb-8 max-w-md text-gray-400">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Button
        asChild
        className="rounded-xl bg-[#d9c5a7] text-black hover:bg-[#d9c5a7]/80"
      >
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </main>
  );
}
