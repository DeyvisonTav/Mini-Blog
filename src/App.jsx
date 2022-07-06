import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import { About } from './pages/About/About'
import { Home } from './pages/About/Home/home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

export function App() {
  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Navbar />
        <Routes className="h-full">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
