import About from "./components/about/About"
import Awards from "./components/awards/Awards"
import Clientes from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Modules from "./components/modules/modules/Modules"
import SectionWrapper from "./components/section/SectionWrapper"

function App() {

  return (
    <>
      <Header />
        <SectionWrapper id="inicio">
          <Intro />
        </SectionWrapper>
        
        <SectionWrapper id="sobre-nosotros">
          <About />
        </SectionWrapper>

      <SectionWrapper id="caracteristicas">
        <Features />
      </SectionWrapper>

      
      <SectionWrapper id="clientes">
        <Clientes />
      </SectionWrapper>

      <SectionWrapper id="premios">
        <Awards />
      </SectionWrapper>

      <SectionWrapper id="contacto">
        <ContactForm />
      </SectionWrapper>

      <Footer />
    </>
  )
}

export default App
