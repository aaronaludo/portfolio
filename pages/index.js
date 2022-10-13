import ContainerBlock from "../components/ContainerBlock";
import TechStack from "../components/TechStack";
import Hero from "../components/Hero";
import Youtube from '../components/Youtube';

export default function Home() {
  return (
    <ContainerBlock
      title="Aaron Aludo - Software Developer"
      description="A 19-year-old software developer based in Philippines."
    >
      <Hero />
      <TechStack />
      <Youtube />
    </ContainerBlock>
  );
}
