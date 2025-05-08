import Awards from "./components/awards/Awards"
import Clients from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import SolutionsManager from "./components/modules/SolutionManager"
import SectionWrapper from "./components/section/SectionWrapper"
import { HelmetProvider } from 'react-helmet-async'
import SEO from "./components/seo/SEO"
import Solutions from "./components/modules/modules-test/Solutions"


function App() {

  return (
    <>
    <HelmetProvider>

      <SEO
        title="Aleph Manager"
        description="Soluciones de software para sistemas de gestión ISO, GRC, PLAFT, continuidad, seguridad y pérdida crediticia esperada."
        keywords="Aleph, software GRC, ISO, gestión de riesgos, cumplimiento, PLAFT, continuidad, seguridad"
        image="https://alephmanager.com/assets/aleph-about.png"
        url="https://www.alephmanager.com/"
      />

      <Header />
      <SectionWrapper id="inicio">
        <Intro />
      </SectionWrapper>

      <SectionWrapper id="modulos">
        <Solutions />
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
    </HelmetProvider>
    </>
  )
}

export default App
