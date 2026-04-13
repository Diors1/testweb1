type Project = {
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Fleet GPS Tracking & Management Solution",
    description: "Our Business Fleet GPS Tracking & Management Solution is designed to optimize fleet operations with real-time vehicle tracking, driver behavior monitoring, and advanced fleet management features. The system supports scalable backend infrastructure, secure user authentication, role-based permissions, and secure data management.",
    tags: ["GPS Tracking", "Fleet Management", "IoT", "Real-time Monitoring"]
  },
  {
    title: "Financial Data Integration and Reporting System",
    description: "This solution involves creating an automated process to extract financial data from multiple data warehouses, transform the data according to specific client requirements, and load it into a centralized data warehouse. The final stage integrates with Power BI to generate insightful reports.",
    tags: ["Data Integration", "Business Intelligence", "Power BI", "ETL"]
  },
  {
    title: "Social Media - Mobile Application",
    description: "We developed a unique mobile application that facilitates social connections based on proximity. The app enables users to connect only if they are physically close to each other, creating an environment for more localized, in-person interactions using geolocation technology.",
    tags: ["Social Media", "Mobile Application", "Geolocation", "React Native"]
  },
 
]

function Projects() {
  return (
    <section style={{ backgroundColor: "#0a0a0a" }} className="relative text-white px-8 py-24 min-h-screen">

   
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

     
        <h2 className="text-5xl font-bold text-center mb-16">
          Our <span style={{ color: "#00d4ff" }}>Success</span>
        </h2>

        
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl p-10 transition-all duration-300"
              style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(0,212,255,0.2)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.07)"}
            >
             
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

           
              <p className="mt-3 leading-relaxed text-sm" style={{ color: "#9ca3af" }}>
                {project.description}
              </p>

            
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded text-xs font-medium"
                    style={{
                      border: "1px solid rgba(0,212,255,0.4)",
                      color: "#00d4ff",
                      backgroundColor: "transparent",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

             
              <button
                className="mt-6 flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: "#00d4ff" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                View Details <span className="text-lg">›</span>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects