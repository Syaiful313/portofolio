

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

    <div className="overflow-hidden whitespace-nowrap w-full relative gap-4 border border-[#d9c5a7]/15 bg-[#d9c5a7]/10">
      <div className="flex animate-marquee">
        {[...texts,...texts].map((text, index) => (
          <span key={index} className="inline-block mx-4 text-md font-serif text-[#d9c5a7]">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
