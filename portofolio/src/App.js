 
import './App.css';
import NavComponent from './comonents/Nav';
import About from './comonents/About';
import HeroComponent from './comonents/Hero';
import Skills from './comonents/Skills';
import CardComponent from './comonents/Card';
import Footer from './comonents/Footer';
 

function App() {
  return (
    <div>
       <NavComponent />
       <HeroComponent />
       <About />
       <Skills />
       <CardComponent/>
       <Footer/>


    </div>
  );
}

export default App;
