export default function Navbar() {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Parts", link: "#parts" },
    { name: "Attire", link: "#attire" },
    { name: "Gifts", link: "#gifts" },
    { name: "Location", link: "#location" },
  ];

  return (
    <div className="my-10 md:my-5 sm:block absolute z-30 justify-center items-center mx-auto w-full">
      <nav>
        <ul className="flex items-center space-x-6 justify-center lg:space-x-14">
          {navLinks.map((navlink) => (
            <li
              key={navlink.name}
              className={`ease-in-out duration-200 
            hover:text-rose-500 text-white`}
            >
              <a href={navlink.link}>{navlink.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
