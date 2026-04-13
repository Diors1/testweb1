import { useState } from "react"
import { Link } from "react-router-dom"

type NavLink = {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: "rgba(10, 10, 10, 0.85)" }} className="fixed top-0 left-0 right-0 z-50 border-b border-white/5">

  
      <div className="flex items-center justify-between px-10 py-5">

     
        <Link to="/" style={{ lineHeight: "1.1" }} className="flex flex-col text-white font-bold no-underline">
          <span className="text-2xl tracking-widest">
            C<span style={{ color: "#00d4ff" }}>⚛</span>DE
          </span>
          <span className="text-xs tracking-[0.5em] text-white">LAB</span>
        </Link>

        
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  style={{ color: "#cccccc" }}
                  className="text-sm font-medium hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact">
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
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{ backgroundColor: menuOpen ? "#00d4ff" : "white" }} className="block w-6 h-0.5 transition-colors duration-200" />
          <span style={{ backgroundColor: menuOpen ? "#00d4ff" : "white" }} className="block w-6 h-0.5 transition-colors duration-200" />
          <span style={{ backgroundColor: menuOpen ? "#00d4ff" : "white" }} className="block w-6 h-0.5 transition-colors duration-200" />
        </button>

      </div>


      
      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-10 pb-6 gap-4 menu-slide"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.97)" }}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              style={{ color: "#cccccc" }}
              className="text-sm font-medium hover:text-white transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button
              style={{
                border: "1px solid #00d4ff",
                color: "#00d4ff",
                backgroundColor: "transparent",
              }}
              className="px-5 py-2 text-sm font-medium rounded transition-all duration-300 w-full"
            >
              Contact Us
            </button>
          </Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar