import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About/About';
import Product from './Product/Product';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Link } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Product />
      <Contact />
      <Footer />
      <Link />
    </div>

  );
}

export default App;
