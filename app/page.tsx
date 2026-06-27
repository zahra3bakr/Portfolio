import Hero from "@/components/home/hero";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div className="space-y-20">
      <section id="Hero"><Hero /></section>
      <section id="About"><About /></section>
      <section id="Projects"><Projects /></section>
      <section id="Contact"><Contact /></section>
    </div>
  )
}
