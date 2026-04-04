type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#" },
  
];

function Navbar() {
  return (
    <nav className="bg-blue-9000 text-white px-8 py-4 flex items-center justify-between">
      <a href="/" className="text-xl font-bold text-indigo-400">
        CodeLab
      </a>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

    <a href='#contact'>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
        Contact Us
      </button>
      </a>
    </nav>
    

  );
}

export default Navbar;
