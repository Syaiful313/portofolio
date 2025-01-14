import MarqueeText from "@/components/MarqueeSection";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <>
      <MarqueeText />

      <section
        id="contact"
        className="mx-auto min-h-screen max-w-4xl rounded-md bg-black p-7 py-60 text-[#d9c5a7]"
      >
        <div className="border border-[#d9c5a7]/15 bg-[#d9c5a7]/10 p-10">
          <h2 className="mb-2 text-sm uppercase">Contact</h2>
          <h1 className="mb-6 font-serif text-4xl">Let's get in touch</h1>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-[#333] bg-[#1a1a1a] p-3 text-[#d9c5a7] placeholder:text-[#d9c5a7] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-[#333] bg-[#1a1a1a] p-3 text-[#d9c5a7] placeholder:text-[#d9c5a7] focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="h-32 w-full rounded-md border border-[#333] bg-[#1a1a1a] p-3 text-[#d9c5a7] placeholder:text-[#d9c5a7] focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-md bg-[#d9c5a7] p-3 font-bold text-black transition hover:bg-[#c4ae93]"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <a
              href="https://github.com/Syaiful313"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <button className="flex items-center justify-between gap-8 rounded-md border border-[#333] bg-[#1a1a1a] p-3 transition hover:bg-[#2a2a2a]">
                <FaGithub
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />
                <span> Github</span>
                <span>→</span>
              </button>
            </a>

            <a
              href="https://x.com/fulful_tmg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <button className="flex items-center justify-between gap-8 rounded-md border border-[#333] bg-[#1a1a1a] p-3 transition hover:bg-[#2a2a2a]">
                <FaTwitter
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />
                <span> Twitter</span>
                <span>→</span>
              </button>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009387189626"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <button className="flex items-center justify-between gap-5 rounded-md border border-[#333] bg-[#1a1a1a] p-3 transition hover:bg-[#2a2a2a]">
                <FaFacebook
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />
                <span> Facebook</span>
                <span>→</span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-syaiful-mu-min-599a27283/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <button className="flex items-center justify-between gap-8 rounded-md border border-[#333] bg-[#1a1a1a] p-3 transition hover:bg-[#2a2a2a]">
                <FaLinkedin
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />
                <span> LinkedIn</span>
                <span>→</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
