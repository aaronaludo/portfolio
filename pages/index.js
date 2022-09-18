import ContainerBlock from "../components/ContainerBlock";
import LatestBlog from "../components/LatestBlog";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Aaron Aludo - Software Developer"
      description="A 19-year-old software developer based in Philippines."
    >
      <Hero />
      <LatestBlog />
    </ContainerBlock>
  );
}
