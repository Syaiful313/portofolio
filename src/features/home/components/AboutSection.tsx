"use client";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-96">
      <div className="container mx-auto max-w-screen-xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-5xl font-serif text-[#c4b5a0] mb-4 leading-tight">
              A website that leaves <br />
              <span className="italic ">a lasting impression!</span>
            </h2>
          </div>
          <div className="pl-8">
            <p className="text-lg text-[#d9c5a7] mb-8 leading-7">
              Hei! I'm Muhammad Syaiful Mu'min. I'm a web developer focused on
              creating responsive and user-friendly digital experiences, with
              expertise in HTML, CSS, JavaScript, React, and TypeScript. I enjoy
              combining functional design with optimal performance to bring
              ideas to life. creative ideas.
            </p>
            <div className="flex gap-4 justify-start sm:justify-center">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#c4b5a0] transition-all duration-300 hover:bg-[#c4b5a0]/30"
              >
                <FaFacebook
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#c4b5a0] transition-all duration-300 hover:bg-[#c4b5a0]/30"
              >
                <FaLinkedin
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />{" "}
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#c4b5a0] transition-all duration-300 hover:bg-[#c4b5a0]/30"
              >
                <FaTwitter
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />{" "}
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#c4b5a0] transition-all duration-300 hover:bg-[#c4b5a0]/30"
              >
                <FaGithub
                  className="text-white hover:text-[#d9c5a7]"
                  color="#d9c5a7"
                  size={24}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
