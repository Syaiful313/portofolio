const MarqueeText = () => {
  const texts: string[] = [
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
    "LET'S TALK",
    "+++",
  ];

  return (
    <div className="relative w-full gap-4 overflow-hidden whitespace-nowrap border border-[#d9c5a7]/15 bg-[#d9c5a7]/10 py-2 sm:py-3">
      <div className="flex animate-marquee gap-4 sm:gap-8">
        {[...texts, ...texts].map((text, index) => (
          <span
            key={index}
            className="inline-block text-sm font-serif uppercase tracking-[0.3em] text-[#d9c5a7] sm:text-xl lg:text-2xl"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
