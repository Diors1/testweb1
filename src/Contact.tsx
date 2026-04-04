import { useState } from "react"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    
  }

  return (
    <section id="contact" className="dot-grid bg-gray-950 text-white px-8 py-24 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full">

       
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Contact <span className="text-indigo-400">Us</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-indigo-500 bg-opacity-20 border border-indigo-500 rounded-xl p-8 text-center">
            <span className="text-4xl">✅</span>
            <h3 className="text-2xl font-semibold mt-4">Message Sent!</h3>
            <p className="text-gray-400 mt-2">We'll get back to you as soon as possible.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-indigo-400 hover:text-white transition-colors duration-200"
            >
              Send another message
            </button>
          </div>
        ) : (
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col gap-6">

            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
              />
            </div>

        
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
              />
            </div>

           
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
              />
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-200 resize-none"
              />
            </div>

            
            <button
              onClick={handleSubmit}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full"
            >
              Send Message
            </button>

          </div>
        )}

      </div>
    </section>
  )
}

export default Contact