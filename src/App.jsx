import Header from "./components/Header"
import Index from "./components/Index"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <section className="imagen">
        <Index />
      </section>
      <About />
      <Skills />
      <Project />
      <Footer />
    </>
  )
}

export default App
