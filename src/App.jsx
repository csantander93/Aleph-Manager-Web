import Awards from "./components/awards/Awards"
import Clients from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
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
        <Intro  id="inicio"/>

        <Solutions id="soluciones"/>

        <Features id="caracteristicas"/>

        <Clients id="clientes"/>

        <Awards id="premios"/>

        <ContactForm id="contacto"/>

      <Footer />
    </HelmetProvider>
    </>
  )
}

export default App
