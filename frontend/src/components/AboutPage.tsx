import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import miFoto from "../assets/perfil.jpeg";
interface AboutData {
  main_img: string;
  headline: string;
  gallery1: string;
  gallery2: string;
  gallery3: string;
  story_part1: string;
  mid_img: string;
  story_part2: string;
  email: string;
}

const AboutPage = () => {
  const [data, setData] = useState<AboutData | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/about`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold">
        CARGANDO...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white pt-10 pb-20 px-6 md:px-10 font-sans text-black">
      {/* 1. ENCABEZADO */}
      <div className="max-w-6xl mx-auto mb-16 border-b border-black pb-6 flex justify-between items-end">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
          ABOUT
        </h1>
        <Link
          to="/"
          className="hidden md:block px-6 py-2 border-2 border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all"
        >
          ← Volver
        </Link>
      </div>

      {/* 2. SECCIÓN SUPERIOR */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 sticky top-10">
            Mi Historia
          </span>
        </div>
        <div className="md:col-span-6">
          <img
            src={miFoto}
            alt="Victor"
            className="w-full rounded-[2rem] shadow-xl object-cover aspect-[4/5] h-auto"
          />
        </div>
        <div className="md:col-span-4 flex flex-col justify-start pt-4">
          <h2 className="text-xl font-black uppercase mb-1">
            Victor Astudillo
          </h2>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Creador
          </p>
        </div>
      </div>

      {/* 3. FRASE DESTACADA */}
      <div className="max-w-3xl mx-auto text-center md:text-left mb-16 pl-0 md:pl-20">
        <h2 className="text-3xl md:text-4xl font-black leading-tight">
          {data.headline}
        </h2>
      </div>

      {/* 4. GALERÍA */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pl-0 md:pl-20">
        <img
          src={data.gallery1}
          className="rounded-3xl w-full h-64 object-cover shadow-lg hover:rotate-2 transition-transform"
        />
        <img
          src={data.gallery2}
          className="rounded-3xl w-full h-64 object-cover shadow-lg hover:-rotate-2 transition-transform"
        />
        <img
          src={data.gallery3}
          className="rounded-3xl w-full h-64 object-cover shadow-lg hover:rotate-1 transition-transform"
        />
      </div>

      {/* 5. TEXTO HISTORIA 1 */}
      <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed mb-16">
        <p>{data.story_part1}</p>
      </div>

      {/* 6. FOTO ANCHA */}
      <div className="max-w-5xl mx-auto mb-16 pl-0 md:pl-10">
        <img
          src={data.mid_img}
          alt="Working Hard"
          className="w-full h-[400px] object-cover rounded-[3rem]"
        />
      </div>

      {/* 7. TEXTO FINAL */}
      <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed mb-20">
        <p className="mb-10">{data.story_part2}</p>
        <a href={`mailto:${data.email}`}>
          <button className="bg-yellow-400 text-[10px] font-black uppercase px-8 py-3 rounded-sm hover:bg-black hover:text-white transition-colors">
            • Agenda una entrevista
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
