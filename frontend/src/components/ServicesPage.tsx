import { useEffect, useState } from "react"; // 1. Importamos hooks
import { Link } from "react-router-dom";

// 2. Definimos la forma del objeto Service (TypeScript)
interface Service {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const ServicesPage = () => {
  // 3. Creamos el estado para guardar los servicios que vengan de Go
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // 4. Llamamos a la API cuando se carga la página
  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando servicios:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold animate-pulse">CARGANDO SERVICIOS...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white p-6 md:p-20 font-sans text-black">
      {/* Encabezado (se queda igual) */}
      <div className="max-w-6xl mx-auto flex justify-between items-end mb-20 border-b-2 border-black pb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
            Lo que ofrezco
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
            SERVICIOS
          </h1>
        </div>
        <Link
          to="/"
          className="hidden md:block px-6 py-2 border-2 border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all"
        >
          ← Volver al inicio
        </Link>
      </div>

      {/* Lista de Servicios Dinámica */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {services.map((service) => ( // 5. Usamos 'services' del estado
          <div
            key={service.id}
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-center border-b border-gray-200 pb-20 last:border-0"
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                {service.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-md">
                {service.desc}
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="overflow-hidden rounded-3xl shadow-2xl h-64 md:h-96 w-full relative group">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón móvil (igual) */}
      <div className="mt-10 md:hidden flex justify-center">
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white font-bold uppercase rounded-full"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default ServicesPage;
