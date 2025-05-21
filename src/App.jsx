import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SectionWrapper from './components/section/SectionWrapper';
import './i18n';

const SEO = lazy(() => import('./components/seo/SEO'));
const Header = lazy(() => import('./components/header/Header'));
const Intro = lazy(() => import('./components/intro/Intro'));
const Solutions = lazy(() => import('./components/modules/modules-test/Solutions'));
const Features = lazy(() => import('./components/features/Features'));
const Clients = lazy(() => import('./components/clients/Clients'));
const Awards = lazy(() => import('./components/awards/Awards'));
const ContactForm = lazy(() => import('./components/contact/ContactForm'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Cargando...</div>}>
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

        <SectionWrapper id="soluciones">
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
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
