import styles from "@/app/styles/UnderlineAnimation.module.css";

const Navbar = () => {
  return (
    <nav className="fixed top-9 left-1/2 transform -translate-x-1/2 z-[1000] flex w-[90%] sm:w-[40%] border border-[#d9c5a7] items-center justify-between bg-[#d9c5a7]/15 backdrop-blur-lg rounded-xl p-4 text-[#d9c5a7]">
      <div className="font-serif sm:text-2xl font-semibold px-5 md:px-10">
        Fulful.
      </div>
      <div className="hidden space-x-4 font-serif sm:flex px-14">
        <a href="#home" className={`${styles.link} text-[#d9c5a7]`}>
          Home
        </a>
        <a href="#about" className={`${styles.link} text-[#d9c5a7]`}>
          About
        </a>
        <a href="#projects" className={`${styles.link} text-[#d9c5a7]`}>
          Projects
        </a>
        <a href="#contact" className={`${styles.link} text-[#d9c5a7]`}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
