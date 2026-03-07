import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Definimos la interfaz según lo que envía Go
interface Project {
  id: number;
  title: string;
  category: string;
  tags: string; // Viene como string "Tag1,Tag2"
  image: string;
  description: string;
  frontend: string;
  logic: string;
  status: string;
  link: string;
}

const categories = ["Todos", "Web", "IA", "Juegos", "Mobile"];

const PortfolioPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Lógica de filtrado
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "Todos") return true;
    // Comprobamos si la categoría coincide O si los tags contienen el filtro
    return p.category === activeFilter || p.tags.includes(activeFilter);
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold">
        CARGANDO PORTAFOLIO...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white pt-10 pb-20 px-6 md:px-10 font-sans text-black">
      {/* ENCABEZADO */}
      <div className="max-w-7xl mx-auto mb-12 border-b border-black pb-6 flex justify-between items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
            Galería de trabajos
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
            PORTAFOLIO
          </h1>
        </div>
        <Link
          to="/"
          className="hidden md:block px-6 py-2 border-2 border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all"
        >
          ← Volver
        </Link>
      </div>

      {/* FILTROS */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all border border-black ${
              activeFilter === cat
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col gap-6">
            <div className="w-full bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative aspect-video cursor-pointer">
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <span className="bg-white text-black px-6 py-2 font-bold uppercase text-xs rounded-full">
                  Ver Detalles
                </span>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-black uppercase">
                  {project.title}
                </h2>
                <div className="flex gap-2 flex-wrap justify-end max-w-[50%]">
                  {/* Convertimos el string de tags en array para mapear */}
                  {project.tags.split(",").map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-400 px-3 py-1 text-[10px] font-bold uppercase rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xs font-black uppercase mb-4 text-gray-400 tracking-widest">
                  Ficha Técnica
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-bold block">Tecnología:</span>
                    <span className="text-gray-600">{project.frontend}</span>
                  </div>
                  <div>
                    <span className="font-bold block">Lógica/IA:</span>
                    <span className="text-gray-600">
                      {project.logic || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold block">Estado:</span>
                    <span className="text-green-600 font-bold">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
