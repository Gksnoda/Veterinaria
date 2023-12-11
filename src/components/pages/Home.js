import LocalMap from "../LocalMap";
import MainPage from "../MainPage";
import Carousel from "../Carousel";
import SobreNosSection from "../SobreNosSection";
import medicoImage from '../img/medico.jpg'
import medicoImage2 from '../img/medico02.jpg'
import medicoImage3 from '../img/medico03.jpg'
import WppBotao from '../WppBotao';

const cards = [
  {
    title: "DR. GILBERTO AZEVEDO",
    imagePath: medicoImage,
    description: "VETERINÁRIO"
  },
  {
    title: "DR. JOSÉ ALMEIDA",
    imagePath: medicoImage2,
    description: "VETERINÁRIO"
  },
  {
    title: "DRA. ANNA RIBEIRO",
    imagePath: medicoImage3,
    description: "VETERINÁRIO"
  },
  {
    title: "DR. GILBERTO AZEVEDO",
    imagePath: medicoImage,
    description: "VETERINÁRIO"
  },
  {
    title: "JOSÉ ALMEIDA",
    imagePath: medicoImage2,
    description: "VETERINÁRIO"
  },
  {
    title: "ANNA RIBEIRO",
    imagePath: medicoImage3,
    description: "VETERINÁRIO"
  },
  
  // Outros cards...
];

function Home() {
  return (
    <div className="PageHome">
      <MainPage />
      <SobreNosSection />
      <Carousel cards={cards} />
      <LocalMap />
      <WppBotao />
    </div>
  );
}

export default Home;
