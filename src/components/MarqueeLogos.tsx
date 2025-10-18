"use client";

import Image from "next/image";

const MarqueeLogos = () => {
  const logos = [
    { src: "/logoipsum-280.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "/logoipsum-311.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "/logoipsum-317.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "/logoipsum-323.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "/logoipsum-286.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "/logoipsum-284.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "/logoipsum-287.svg", alt: "logoipsum", name: "logoipsum" },
  ];

  return (
    <div className="group relative w-full overflow-hidden border border-[#d9c5a7]/15 bg-[#d9c5a7]/10 py-2 sm:py-3">
      <div className="flex animate-marquee gap-6 sm:gap-10">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="inline-flex h-12 w-24 flex-shrink-0 items-center justify-center transition-all duration-300 sm:h-16 sm:w-32"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={48}
              className="max-h-10 max-w-24 object-contain opacity-80 brightness-0 invert transition-all duration-300 group-hover:opacity-100 sm:max-h-12 sm:max-w-28"
              style={{ filter: "invert(1)" }}
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeLogos;
