import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App