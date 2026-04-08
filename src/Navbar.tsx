type NavLink = {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
]

function Navbar() {
  return (
    <nav style={{ backgroundColor: "rgba(10, 10, 10, 0.85)" }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 border-b border-white/5">

      
      <a href="/" style={{ lineHeight: "1.1" }} className="flex flex-col text-white font-bold">
        <span className="text-2xl tracking-widest">
          C<span style={{ color: "#00d4ff" }}>O</span>DE
        </span>
        <span className="text-xs tracking-[0.5em] text-white">LAB</span>
      </a>

    
      <ul className="flex gap-10">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{ color: "#cccccc" }}
              className="text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

     
      <a href="#contact">
        <button
          style={{
            border: "1px solid #00d4ff",
            color: "#00d4ff",
            backgroundColor: "transparent",
          }}
          className="px-5 py-2 text-sm font-medium rounded transition-all duration-300 hover:bg-[#00d4ff] hover:text-[#0a0a0a]"
        >
          Contact Us
        </button>
      </a>

    </nav>
  )
}

export default Navbar