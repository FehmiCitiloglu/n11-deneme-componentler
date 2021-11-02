import N11Button from "./components/UI/N11Button";
import Garage11 from "./components/icons/Garage11";
import N11Logo from "./components/icons/N11Logo";
import SearchBar from "./components/SearchBar";
import "antd/dist/antd.css";
import Pet11 from "./components/icons/Pet11";
import ContainerWithHr from "./components/UI/ContainerWithHr";
import { N11Carousel } from "./components/N11Carousel";

function App() {
  const mockSlides = [
    {
      image:
        "https://n11scdn.akamaized.net/a1/720_400/21/10/26/83/94/87/74/55/82/85/84/72/85574930100094324595.jpg",
      imageAlt: "Sağlık & Bakım",
      title: "Sağlık & Bakım",
      buttonText: "Fırsatı Kaçırma",
      isArrowGonnaShown: true,
    },
    {
      image:
        "https://n11scdn.akamaized.net/a1/720_400/21/10/26/83/94/87/74/55/82/85/84/72/85574930100094324595.jpg",
      imageAlt: "Sağlık & Bakım",
      title: "Sağlık & Bakım",
      buttonText: "Fırsatı Kaçırma",
      isArrowGonnaShown: true,
    },
  ];
  return (
    <div>
      <N11Button isArrowShown={true}>Fırsatı Kaçırmaa</N11Button>
      <N11Logo />
      <br />
      <br />
      <Garage11 />
      <br />
      <br />

      <SearchBar />

      <br />
      <br />
      <N11Carousel slides={mockSlides} />
      <br />

      <br />
      <Pet11 />
      <ContainerWithHr>{[<Garage11 />, <Pet11 />, "Yardım"]}</ContainerWithHr>
    </div>
  );
}

export default App;
