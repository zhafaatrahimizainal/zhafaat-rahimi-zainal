import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main className="home-main">
        <Hero />
      </main>
    </div>
  );
}

export default Home;