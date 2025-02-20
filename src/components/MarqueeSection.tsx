import Link from "next/link";

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
    <Link href="/contact">
      <div className="relative w-full gap-4 overflow-hidden whitespace-nowrap border border-[#d9c5a7]/15 bg-[#d9c5a7]/10">
        <div className="flex animate-marquee">
          {[...texts, ...texts].map((text, index) => (
            <span
              key={index}
              className="mx-4 my-2 inline-block font-serif text-2xl text-[#d9c5a7]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MarqueeText;
