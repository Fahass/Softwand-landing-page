import './App.scss'
import Navbar from './components/navbar'
import Home from './components/home'
import PostHome from './components/postHome'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <PostHome />
        <About />
        <Services />
        <Pricing />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
