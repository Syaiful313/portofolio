import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[80vh] items-center justify-center py-24 text-center">
      <div className="w-full max-w-2xl space-y-6">
        <p className="curly-label">{`{ Not found }`}</p>
        <h1 className="text-[clamp(4rem,14vw,9rem)] leading-[0.9] tracking-[-0.06em] text-[color:var(--color-ember-orange)]">
          404
        </h1>
        <h2 className="text-2xl leading-[1.05] tracking-[-0.03em] sm:text-3xl">
          Halaman yang kamu cari tidak tersedia.
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
          Mungkin URL-nya berubah, atau halaman tersebut memang sudah tidak
          ada. Kembali ke beranda untuk melanjutkan.
        </p>
        <div className="flex justify-center">
          <Link href="/" className="pill-link">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
