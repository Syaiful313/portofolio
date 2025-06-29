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
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-8 my-4 inline-flex h-16 w-32 flex-shrink-0 items-center justify-center transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="max-h-12 max-w-28 object-contain opacity-80 brightness-0 invert filter"
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
