import './App.scss';
import Course from './components/course/Course';
import Depoimento from './components/Depoimento/Depoimento';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Garantia from './components/Garantia/Garantia';
import Hero from './components/Hero/Hero';
import Influence from './components/influence/Influence';
import Payment from './components/Payment/Payment';
import Questions  from './components/questions/Questions';

import WillLearn from './components/WillLearn/WillLearn';

function App() {
  return (
    <>
      <Hero />
      <Details />
      <Influence />
      <WillLearn />
      <Course />
      <Depoimento />
      <Garantia />
      <Payment />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
