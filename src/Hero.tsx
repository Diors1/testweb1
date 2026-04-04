type Feature = {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: "Lightning Fast",
    description: "We deliver high-performance solutions optimized for speed and efficiency, ensuring your applications run smoothly.",
    icon: "⚡"
  },
  {
    title: "Secure & Reliable",
    description: "Security is at our core. We implement industry-standard practices to protect your data and ensure system reliability.",
    icon: "🔒"
  },
  {
    title: "Custom Solutions",
    description: "Every business is unique. We craft tailored solutions that align perfectly with your specific requirements and goals.",
    icon: "🛠️"
  },
  {
    title: "Cloud Native",
    description: "Leverage the power of cloud infrastructure for scalable, flexible, and cost-effective solutions.",
    icon: "☁️"
  },
  {
    title: "Mobile First",
    description: "Build exceptional mobile experiences with our expertise in iOS, Android, and cross-platform development.",
    icon: "📱"
  },
  {
    title: "Expert Team",
    description: "Work with experienced developers, designers, and consultants who are passionate about technology.",
    icon: "👥"
  },
]

function Hero() {
  return (
    <>
      
      <section id='hero' className="dot-grid bg-gray-950 text-white min-h-screen flex items-center px-8">
        <div className="max-w-3xl">

          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Web & Software Development
          </span>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            We build digital products that <span className="text-indigo-400">make an impact</span>
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            From websites to full-scale software solutions, we help businesses grow through modern technology.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Started
            </button>
            <button className="border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Our Services
            </button>
          </div>

        </div>
      </section>

      
      <section className="dot-grid bg-gray-950 text-white px-8 py-24">
        <div className="max-w-6xl mx-auto">

         
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Why Choose <span className="text-indigo-400">CodeLab</span></h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              We combine technical excellence with business understanding to deliver solutions that drive real results.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 
                           hover:border-indigo-500 hover:bg-gray-800 hover:-translate-y-2 
                           transition-all duration-300 cursor-default"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero