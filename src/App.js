import './App.css';
import Header from './components/Header'; 
import Slider from './components/Slider';
import About from './components/About';
import Fruits from './components/Fruits';
import Lemon from './components/Lemon';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Fruits />
      <Lemon />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
