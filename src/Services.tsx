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
    <section id="services" className="dot-grid bg-gray-950 text-white px-8 py-24">
      <div className="max-w-6xl mx-auto">

        
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Our <span className="text-indigo-400">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8
                         hover:border-indigo-500 hover:bg-gray-800 hover:-translate-y-2
                         transition-all duration-300 cursor-default group"
            >
          
              <span className="text-4xl font-bold text-gray-700 group-hover:text-indigo-500 transition-colors duration-300">
                {service.number}
              </span>

             
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>

              
              <p className="text-gray-400 mt-3 leading-relaxed">{service.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services