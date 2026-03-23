
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Esencia from './components/Esencia';
import Specialties from './components/Specialties';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Esencia />
      <Specialties />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
