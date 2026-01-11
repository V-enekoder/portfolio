import React from "react";

// --- Subcomponentes Rápidos ---

const Navbar = () => (
  <nav className="flex justify-between items-center px-10 py-6 text-[10px] font-bold uppercase tracking-widest border-b border-gray-100">
    <div className="flex gap-6">
      <a href="#">Inicio</a>
      <a href="#">Sobre mí</a>
      <a href="#">Servicios</a>
    </div>
    <div className="flex gap-6">
      <a href="#">Proyectos</a>
      <a href="#">Contacto</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="flex flex-col items-center py-20 px-6">
    <h1 className="text-6xl md:text-8xl mb-12 border-4 border-black px-8 py-2">
      Víctor Astudillo
    </h1>

    <div className="w-full max-w-4xl rounded-3xl overflow-hidden mb-16 shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        alt="Laptop Work"
        className="w-full h-[500px] object-cover"
      />
    </div>

    <div className="text-center max-w-xl">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
        Informática
      </p>
      <h2 className="text-2xl font-bold normal-case leading-tight mb-8">
        Soy un Ingeniero en Informática, originario de Venezuela.
      </h2>
      <button className="bg-yellow-400 text-[10px] font-black uppercase px-6 py-2 rounded-sm hover:bg-black hover:text-white transition-colors">
        Ver más
      </button>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-white">
    <h2 className="text-3xl font-serif-italic normal-case italic text-center mb-32">
      ¿QUE PUEDO HACER?
    </h2>

    <div className="max-w-4xl mx-auto px-6 space-y-32">
      {[
        {
          id: "1",
          title: "El motor de tu proyecto 🧠",
          desc: "Arquitectura robusta y escalable para aplicaciones modernas.",
        },
        {
          id: "2",
          title: "Tu sitio siempre online y seguro ☁️",
          desc: "Despliegue optimizado y alta disponibilidad garantizada.",
        },
        {
          id: "3",
          title: "Tu guía tecnológico 🧭",
          desc: "Asesoría técnica para llevar tus ideas a la realidad.",
        },
      ].map((item) => (
        <div key={item.id} className="text-center flex flex-col items-center">
          <span className="text-xl font-bold mb-8">{item.id}</span>
          <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-8 flex items-center justify-center grayscale">
            <div className="w-10 h-10 bg-gray-400 rounded-lg opacity-50"></div>
          </div>
          <h3 className="text-3xl font-black mb-4">{item.title}</h3>
          <p className="text-gray-500 text-sm max-w-xs">{item.desc}</p>
          <div className="w-full h-[1px] bg-black mt-20 opacity-20"></div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-10 py-20 bg-white flex flex-col items-center">
    <div className="w-full h-[400px] bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-3xl mb-20 flex flex-col items-center justify-center text-white p-10 text-center">
      <p className="text-[10px] uppercase tracking-widest mb-6">
        Próximo proyecto
      </p>
      <h2 className="text-2xl normal-case font-bold max-w-md mb-8">
        Descubre cómo la tecnología correcta puede darte tranquilidad y
        eficiencia en tu próximo proyecto.
      </h2>
      <button className="bg-yellow-400 text-black text-[10px] font-black uppercase px-6 py-2">
        Inicia aquí
      </button>
    </div>

    <div className="w-full flex justify-between items-end">
      <p className="text-[10px] font-bold text-gray-400">
        Ciudad Guayana, Bolívar
      </p>
      <h1 className="text-9xl leading-none">VA.</h1>
      <p className="text-[10px] font-bold text-gray-400">Contacto</p>
    </div>
  </footer>
);

// --- Componente de Galería (Opcional, para las flores) ---
const Gallery = () => (
  <div className="flex gap-4 overflow-x-auto px-10 py-10 no-scrollbar">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="min-w-[250px] h-[350px] bg-gray-100 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all"
      >
        <img
          src={`https://picsum.photos/seed/${i + 10}/400/600`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Footer />
    </div>
  );
}
