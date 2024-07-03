import Blog from "@/components/client-view/blog";
import Contact from "@/components/client-view/contact";
import Hero from "@/components/client-view/hero";
import Skill from "@/components/client-view/skill";
import Work from "@/components/client-view/work";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Work />
      <Blog />
      <Skill />
      <Contact />
    </div>
  );
}
