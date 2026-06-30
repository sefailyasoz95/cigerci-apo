import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import BranchPage from "./pages/BranchPage";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { pathname } = useLocation();

  // Rota değişiminde başa sar ve ScrollTrigger'ı tazele
  useEffect(() => {
    window.scrollTo(0, 0);
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  // İlk yüklemede: fontlar yüklenince ve birkaç gecikmeli adımda tazele.
  // (Pin'lenen bölüm ve geç yüklenen fontlar layout'u kaydırdığı için
  //  ScrollTrigger başlangıç konumları yeniden hesaplanmalı.)
  useEffect(() => {
    const timers = [200, 600, 1200].map((ms) =>
      window.setTimeout(() => ScrollTrigger.refresh(), ms),
    );
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
    }
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branch/:id" element={<BranchPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
