type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Lightning Fast",
    description:
      "High-performance solutions optimized for speed and efficiency, ensuring your applications run smoothly.",
    icon: "⚡",
  },
  {
    title: "Secure & Reliable",
    description:
      "Security is at our core. We implement industry-standard practices to protect your data and ensure reliability.",
    icon: "🔒",
  },
  {
    title: "Custom Solutions",
    description:
      "Every business is unique. We craft tailored solutions that align perfectly with your specific requirements.",
    icon: "🛠️",
  },
  {
    title: "Cloud Native",
    description:
      "Leverage the power of cloud infrastructure for scalable, flexible, and cost-effective solutions.",
    icon: "☁️",
  },
  {
    title: "Mobile First",
    description:
      "Exceptional mobile experiences with our expertise in iOS, Android, and cross-platform development.",
    icon: "📱",
  },
  {
    title: "Expert Team",
    description:
      "Work with experienced developers, designers, and consultants who are passionate about technology.",
    icon: "👥",
  },
];

function Hero() {
  return (
    <>
      
      <section
        id="hero"
        className="relative text-white min-h-screen flex items-center justify-center px-8 pt-20"
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[0.85rem] font-medium tracking-wider uppercase mb-8 text-[#00d4ff]">
            Software Development Excellence
          </span>

          <h1 className="text-6xl font-bold leading-tight text-white">
            We are a dynamic team of{" "}
            <span className="text-[#00d4ff]">innovative developers</span> and
            technology experts
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            At CodeLab, we specialize in crafting tailored software solutions
            that elevate your business. Our diverse team brings together
            expertise in software development, mobile app development, UI/UX
            design, business intelligence, and data migration to create
            impactful, scalable products.
          </p>

          <div className="flex gap-4 mt-10 justify-center">
            <a href="/contact">
              <button className="px-8 py-4 bg-[#00d4ff] text-[#0a0a0a] rounded font-semibold transition-all duration-300 hover:bg-[#00d4ff]/80">
                Start Your Project
              </button>
            </a>
            <a href="/services">
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded font-semibold transition-all duration-300 hover:border-[#00d4ff] hover:text-[#00d4ff]">
                Our Services
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative text-white px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[0.85rem] font-medium tracking-wider uppercase mb-4 text-[#00d4ff]">
              Why Us
            </span>
            <h2 className="text-4xl font-bold">
              Why Choose <span className="text-[#00d4ff]">CodeLab</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              We combine technical excellence with business understanding to
              deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 hover:-translate-y-2 transition-all duration-300 cursor-default group"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold mt-4 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;