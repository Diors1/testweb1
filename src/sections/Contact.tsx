import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#0a0a0a" }}
      className="relative text-white px-8 py-24 min-h-screen flex items-center"
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-2 rounded-full text-[0.85rem] font-medium tracking-wider uppercase mb-4"
            style={{
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              color: "#00d4ff",
            }}
          >
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">
            Contact <span style={{ color: "#00d4ff" }}>Us</span>
          </h2>
          <p className="mt-4" style={{ color: "#9ca3af" }}>
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              backgroundColor: "rgba(0, 212, 255, 0.05)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
          >
            <span className="text-4xl">✅</span>
            <h3 className="text-2xl font-semibold mt-4 text-white">
              Message Sent!
            </h3>
            <p className="mt-2" style={{ color: "#9ca3af" }}>
              We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-medium transition-colors duration-200"
              style={{ color: "#00d4ff" }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <div
            className="rounded-xl p-8 flex flex-col gap-6"
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold"
                style={{ color: "#cccccc" }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(0,212,255,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)")
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold"
                style={{ color: "#cccccc" }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(0,212,255,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)")
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold"
                style={{ color: "#cccccc" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(0,212,255,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)")
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold"
                style={{ color: "#cccccc" }}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-200 resize-none"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(0,212,255,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)")
                }
              />
            </div>

            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 w-full"
              style={{
                backgroundColor: "#00d4ff",
                color: "#0a0a0a",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0,212,255,0.8)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00d4ff")
              }
            >
              Send Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
