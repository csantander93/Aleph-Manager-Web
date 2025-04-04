import About from "./components/about/About"
import Awards from "./components/awards/Awards"
import Clients from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Modulos from "./components/modules/Modulos"
import SolutionsManager from "./components/modules/SolutionManager"
import SolutionSelection from "./components/modules/SolutionSelection"
import TitleModule from "./components/modules/TitleModule"
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

      <SectionWrapper id="modulos">
        <SolutionsManager />
      </SectionWrapper>

      <SectionWrapper id="caracteristicas">
        <Features />
      </SectionWrapper>

      <SectionWrapper id="clientes">
        <Clients />
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
