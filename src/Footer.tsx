function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
      className="text-white px-10 py-16"
    >
      <div className="max-w-6xl mx-auto">
     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
    
          <div className="flex flex-col gap-4">
            <img
              src="/src/assets/Codelab.webp"
              alt="CodeLabs"
              className="h-17 w-auto"
            />
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              Innovative software solutions tailored to elevate your business
              through cutting-edge technology.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9ca3af" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9ca3af")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                "Software Development",
                "Mobile App Development",
                "UI/UX Design",
                "Business Intelligence",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#9ca3af" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9ca3af")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm">Get In Touch</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm" style={{ color: "#9ca3af" }}>
                info@codelab.al
              </li>
              <li className="text-sm" style={{ color: "#9ca3af" }}>
                Tirana, Albania
              </li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                style={{ color: "#9ca3af" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                style={{ color: "#9ca3af" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                style={{ color: "#9ca3af" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    fill="#0a0a0a"
                    d="M7.5 13.5c1.5 2 3.5 3 4.5 3s3-1 4.5-3M8 9.5c.5-.5 1-.5 1.5 0M14.5 9.5c.5-.5 1-.5 1.5 0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-sm" style={{ color: "#9ca3af" }}>
            © 2026 CodeLab.al. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm transition-colors duration-200"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm transition-colors duration-200"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
