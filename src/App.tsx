import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from "./components/Particlebackground"
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from "./pages/ProjectsPage"


function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#0a0a0a" }} className="min-h-screen text-white">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App