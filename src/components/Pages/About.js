import HeroSection from "../HeroSection";
import { useProductContext } from "../hooks/ContextApi";

const About = () => {
  const myName = useProductContext();

  const data = {
    name: "Mayank Ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
