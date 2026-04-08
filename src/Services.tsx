type Service = {
  number: string
  title: string
  description: string
}

const services: Service[] = [
  {
    number: "01",
    title: "Software Development",
    description: "We create custom software solutions that are scalable, secure, and designed to meet your unique business needs. From concept to execution, we turn your vision into powerful, user-friendly systems."
  },
  {
    number: "02",
    title: "Software Integrations",
    description: "Seamlessly connect your tools and platforms with our integration services. We ensure smooth data flow across your systems, improving efficiency and enhancing your business operations."
  },
  {
    number: "03",
    title: "Mobile App Development",
    description: "Build intuitive, high-performance mobile apps for iOS and Android. Our team crafts user-friendly, innovative apps that deliver a seamless experience and add real value to your business."
  },
  {
    number: "04",
    title: "UI/UX Design",
    description: "We design exceptional, intuitive user interfaces that make complex applications easy to use. Our focus is on creating memorable user experiences that drive engagement and satisfaction."
  },
  {
    number: "05",
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with our business intelligence solutions. We help you make informed, data-driven decisions that fuel growth and improve operational efficiency."
  },
  {
    number: "06",
    title: "Big Data Migration",
    description: "Safely and efficiently migrate large datasets with minimal disruption. Our big data migration services ensure smooth transitions, scalability, and security for your most valuable data."
  },
]

function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#0a0a0a" }} className="relative text-white px-8 py-24">

      
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

      
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-[0.85rem] font-medium tracking-wider uppercase mb-4"
            style={{
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              color: "#00d4ff",
            }}
          >
            What We Do
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">
            Our <span style={{ color: "#00d4ff" }}>Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-default group"
              style={{
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(0,212,255,0.4)"
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(0,212,255,0.05)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.05)"
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor = "#111111"
              }}
            >
             
              <span
                className="text-4xl font-bold transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                {service.number}
              </span>

             
              <h3 className="text-xl font-semibold mt-4 text-white">{service.title}</h3>

          
              <p className="mt-3 leading-relaxed text-sm" style={{ color: "#9ca3af" }}>
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services