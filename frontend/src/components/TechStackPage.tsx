// src/components/TechStackPage.tsx
import { Link } from "react-router-dom";

const techItems = [
  {
    name: "Go",
    color: "text-blue-400",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "JavaScript",
    color: "text-yellow-400",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    color: "text-blue-500",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Linux",
    color: "text-black",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Ubuntu",
    color: "text-orange-500",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  },
  {
    name: "Debian",
    color: "text-red-500",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
  },
  {
    name: "PostgreSQL",
    color: "text-blue-600",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    color: "text-red-500",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const TechStackPage = () => {
  return (
    <section className="min-h-screen bg-white p-10 flex flex-col items-center">
      {/* Encabezado con Botón de regreso */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Mi Stack Tecnológico
        </h2>
        <Link
          to="/"
          className="px-6 py-2 border-2 border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all"
        >
          ← Volver
        </Link>
      </div>

      {/* Grid de Tecnologías */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl mb-20">
        {techItems.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-20 h-20 mb-6 object-contain"
            />
            <h3 className={`text-xl font-bold ${tech.color}`}>{tech.name}</h3>
          </div>
        ))}
      </div>

      {/* Sección inferior (similar a tu diseño) */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center bg-black text-white p-10 rounded-3xl">
        <div>
          <h3 className="text-3xl font-bold mb-4">
            ¿Por qué estas tecnologías?
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Selecciono herramientas que garantizan rendimiento, seguridad y
            escalabilidad. Desde la robustez de Linux hasta la velocidad de Go.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="text-6xl">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default TechStackPage;
