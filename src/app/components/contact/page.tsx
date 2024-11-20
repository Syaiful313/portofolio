import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-black text-[#d9c5a7] rounded-md max-w-4xl mx-auto py-60 p-7 min-h-screen"
    >
      <div className="border border-[#d9c5a7]/15 bg-[#d9c5a7]/10 p-10">
        <h2 className="text-sm mb-2 uppercase">Contact</h2>
        <h1 className="text-4xl font-serif mb-6">Let's get in touch</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md text-[#d9c5a7] placeholder:text-[#d9c5a7] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md text-[#d9c5a7] placeholder:text-[#d9c5a7] focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-md text-[#d9c5a7] placeholder:text-[#d9c5a7] focus:outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-[#d9c5a7] text-black font-bold rounded-md hover:bg-[#c4ae93] transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <a
            href="https://github.com/Syaiful313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <button className="flex items-center gap-8 justify-between p-3 bg-[#1a1a1a] border border-[#333] rounded-md hover:bg-[#2a2a2a] transition">
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
            <button className="flex items-center gap-8 justify-between p-3 bg-[#1a1a1a] border border-[#333] rounded-md hover:bg-[#2a2a2a] transition">
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
            <button className="flex items-center gap-5 justify-between p-3 bg-[#1a1a1a] border border-[#333] rounded-md hover:bg-[#2a2a2a] transition">
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
            <button className="flex items-center gap-8 justify-between p-3 bg-[#1a1a1a] border border-[#333] rounded-md hover:bg-[#2a2a2a] transition">
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
  );
};

export default ContactSection;
