import { Link } from "react-router-dom"

function Closer() {
  return (
    <section className="relative text-white px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl px-12 py-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,20,40,0.6) 100%)",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
        >
          <h2 className="text-5xl font-bold text-white leading-tight">
            Ready to Transform Your{" "}
            <span style={{ color: "#00d4ff" }}>Business</span>?
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Let's discuss how we can help you achieve your goals with innovative technology solutions. Our team is ready to turn your vision into reality.
          </p>

          <div className="flex gap-4 mt-10 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 rounded font-semibold text-sm transition-all duration-300"
                style={{ backgroundColor: "#00d4ff", color: "#0a0a0a" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(0,212,255,0.8)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#00d4ff"}
              >
                Get Started Today
              </button>
            </Link>
            <Link to="/projects">
              <button
                className="px-8 py-4 rounded font-semibold text-sm transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #00d4ff",
                  color: "#00d4ff",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#00d4ff"
                  e.currentTarget.style.color = "#0a0a0a"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "#00d4ff"
                }}
              >
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Closer