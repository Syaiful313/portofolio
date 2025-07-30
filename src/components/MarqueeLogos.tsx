"use client";
import Image from "next/image";
import React from "react";

const MarqueeLogos = () => {
  const logos = [
    { src: "logoipsum-280.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "logoipsum-311.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "logoipsum-317.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "logoipsum-323.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "logoipsum-286.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "logoipsum-284.svg", alt: "logoipsum", name: "logoipsum" },
    { src: "logoipsum-287.svg", alt: "logoipsum", name: "logoipsum" },
  ];

  return (
    <div className="group relative w-full overflow-hidden border border-[#d9c5a7]/15 bg-[#d9c5a7]/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 my-2 sm:my-2 md:my-3 inline-flex h-10 sm:h-12 md:h-12 w-16 sm:w-20 md:w-22 lg:w-24 flex-shrink-0 items-center justify-center transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={40}
              className="max-h-6 sm:max-h-8 md:max-h-9 max-w-12 sm:max-w-16 md:max-w-18 lg:max-w-20 object-contain opacity-80 brightness-0 invert filter"
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