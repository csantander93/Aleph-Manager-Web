import About from "./components/about/About"
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

      <SectionWrapper id="modulos">
        <Modules />
      </SectionWrapper>
    </>
  )
}

export default App
