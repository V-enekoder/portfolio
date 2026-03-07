import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TechStackPage from "./components/TechStackPage.tsx";
import ServicesPage from "./components/ServicesPage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import PortfolioPage from "./components/PortfolioPage.tsx"; // <--- 1. IMPORTAR

const Navbar = () => (
  <nav className="flex justify-between items-center px-10 py-6 text-[10px] font-bold uppercase tracking-widest border-b border-gray-100">
    <div className="flex gap-6">
      <Link to="/" className="hover:underline">Inicio</Link>
      <Link to="/sobre-mi" className="hover:underline hover:text-yellow-600">
        Sobre mí
      </Link>
      <Link to="/servicios" className="hover:underline hover:text-yellow-600">
        Servicios
      </Link>
    </div>
    <div className="flex gap-6">
      <Link
        to="/proyectos"
        className="hover:underline hover:text-yellow-600 transition-colors"
      >
        Proyectos
      </Link>
      <a href="#" className="hover:underline">Contacto</a>
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
        className="w-full h-125 object-cover"
      />
    </div>

    <div className="text-center max-w-xl">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
        Informática
      </p>
      <h2 className="text-2xl font-bold normal-case leading-tight mb-8">
        Soy un Ingeniero en Informática, originario de Venezuela.
      </h2>

      <div className="flex gap-4 justify-center">
        <Link to="/stack">
          <button className="bg-yellow-400 text-[10px] font-black uppercase px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black">
            Ver mi Stack Tecnológico
          </button>
        </Link>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-24 bg-white">
    <h2 className="text-3xl font-serif-italic normal-case italic text-center mb-32">
      ¿QUE PUEDO HACER?
    </h2>

    <div className="max-w-4xl mx-auto px-6 space-y-32">
      {[
        {
          id: "1",
          title: "El motor de tu proyecto 🧠",
          desc: "Arquitectura robusta y escalable...",
        },
        {
          id: "2",
          title: "Tu sitio siempre online ☁️",
          desc: "Despliegue optimizado y alta disponibilidad.",
        },
        {
          id: "3",
          title: "Tu guía tecnológico 🧭",
          desc: "Asesoría técnica para llevar tus ideas a la realidad.",
        },
      ].map((item) => (
        <div key={item.id} className="text-center flex flex-col items-center">
          <span className="text-xl font-bold mb-8">{item.id}</span>
          <h3 className="text-3xl font-black mb-4">{item.title}</h3>
          <p className="text-gray-500 text-sm max-w-xs mb-8">{item.desc}</p>
          {/* Botón para ir a ver los detalles */}
          <Link
            to="/servicios"
            className="text-xs font-bold underline hover:text-yellow-600"
          >
            Ver detalles
          </Link>
          <div className="w-full h-px bg-black mt-20 opacity-20"></div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-10 py-20 bg-white flex flex-col items-center">
    <div className="w-full h-100 bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-3xl mb-20 flex flex-col items-center justify-center text-white p-10 text-center">
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

const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // Código en pantalla (IDE)
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Gráficos de datos / Dashboard
    "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop", // Servidores / Data Center
    "https://images.unsplash.com/photo-1607799275518-d58665d09660?q=80&w=800&auto=format&fit=crop", // Persona programando / Setup
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop", // Ciberseguridad / Código binario
  ];

  return (
    <div className="flex gap-4 overflow-x-auto px-10 py-10 no-scrollbar">
      {galleryImages.map((imgUrl, index) => (
        <div
          key={index}
          className="min-w-62.5 h-87.5 bg-gray-900 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
        >
          <img
            src={imgUrl}
            alt={`Galería tech ${index + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <ServicesPreview />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack" element={<TechStackPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />

          <Route path="/proyectos" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
