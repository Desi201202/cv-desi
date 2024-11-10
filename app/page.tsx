import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan"
import RiwayatPekerjaan from "./components/riwayatPekerjaan"
import "./desir.css"
import Skills from "./components/skills";

export default function Gallery() {
  return (
   <section className="text-center">
    <Hero />
    <RiwayatPendidikan />
    <RiwayatPekerjaan />
    <Skills />
   </section>
  );
}


      