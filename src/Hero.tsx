import { useEffect, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: -1000, y: -1000 };

    window.addEventListener("mousemove", (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.8 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.4 * (1 - mdist / 200)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.6)";
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-8 pt-20"
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

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
            <a href="#contact">
              <button className="px-8 py-4 bg-[#00d4ff] text-[#0a0a0a] rounded font-semibold transition-all duration-300 hover:bg-[#00d4ff]/80">
                Start Your Project
              </button>
            </a>
            <a href="#services">
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded font-semibold transition-all duration-300 hover:border-[#00d4ff] hover:text-[#00d4ff]">
                Our Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] text-white px-8 py-24">
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
