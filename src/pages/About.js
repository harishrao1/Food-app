import { useSelector } from "react-redux";
import AboutImage from "../assets/images/about-page.jpg"
const About = () => {
  const ModalOpen = useSelector((store) => store.toggleData.isModalOpen);

  return (
    <div className="w-full pb-5 pt-18">
      <div className="container grid items-center justify-between min-h-screen grid-cols-1 gap-10 px-10 py-40 mx-auto md:grid-cols-2">
        {ModalOpen && <Modal />}
        <div>
          <img src={AboutImage} alt="about-page-banner" className="w-full h-fit" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="mb-2 text-2xl md:mb-6 font-GrontBlack md:text-4xl">
            🍽️ Food App
          </h2>
        </div>
      </div>
    </div>
  );
};
export default About;