import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Navbar from './components/Navbar';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Links from './components/Links';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Links />
      <header>
        <Navbar />
      </header>
      <main>
        <Splide
          options={{
            direction: 'ttb',
            arrows: false,
            height: '100vh',
            wheel: true,
          }}
        >
          <SplideSlide>
            <Banner />
          </SplideSlide>
          <SplideSlide>
            <About />
          </SplideSlide>
          <SplideSlide>
            <Experience />
          </SplideSlide>
          <SplideSlide>
            <Portfolio />
          </SplideSlide>
          <SplideSlide>
            <Contact />
          </SplideSlide>
        </Splide>
      </main>
    </div>
  );
}

export default App;
