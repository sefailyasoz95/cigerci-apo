import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Specialties from "../components/Specialties";
import MenuShowcase from "../components/MenuShowcase";
import Branches from "../components/Branches";

export default function Home() {
  const location = useLocation();

  // /#section ile gelindiğinde ilgili bölüme kaydır
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const id = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
    return () => window.clearTimeout(id);
  }, [location.hash]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Hero onCtaMenu={() => scrollTo("menu")} onCtaBranches={() => scrollTo("branches")} />
      <About />
      <Specialties />
      <MenuShowcase />
      <Branches />
    </>
  );
}
