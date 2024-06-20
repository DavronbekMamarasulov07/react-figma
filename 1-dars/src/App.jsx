import './App.css';
import Nav from './components/nav/Nav';
import Footer from "./components/footer/Footer"
import Hero from './components/hero/Hero';
import Articles from './components/articles/Articles';
import Ad from './components/ad/Ad';
import Travel from './components/travel/Travel';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <Articles/>
     <Ad/>
     <Travel/>
     <Contact/>
     <Footer/>

    </div>
  );
}

export default App;