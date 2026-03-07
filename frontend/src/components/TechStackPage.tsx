import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TechItem {
  id: number;
  name: string;
  color: string;
  icon: string;
}

const TechStackPage = () => {
  const [techItems, setTechItems] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/tech")
      .then((res) => res.json())
      .then((data) => {
        setTechItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando stack:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold">
        CARGANDO STACK...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white p-10 flex flex-col items-center">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl mb-20">
        {techItems.map((tech) => (
          <div
            key={tech.id}
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
