import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
// import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Qualification from './components/qualification/Qualification';
// import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Work from './components/work/Work';

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Experience />
        {/* <About /> */}
        <Skills />
        <Education />
        {/* <Qualification /> */}
        {/* <Contact /> */}
        <Work />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
