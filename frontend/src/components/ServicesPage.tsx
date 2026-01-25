import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "DESARROLLO DE APIS Y BACKEND",
    desc:
      "Diseño y construyo el 'cerebro' de tu aplicación. Creo sistemas robustos que conectan tus bases de datos con tus usuarios, garantizando que la información fluya rápida, segura y sin errores.",
    img:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Foto estilo código/backend
  },
  {
    id: 2,
    title: "ADMINISTRACIÓN DE SERVIDORES LINUX",
    desc:
      "La estabilidad es innegociable. Me encargo de configurar, proteger y optimizar tus servidores para que tu negocio esté operativo 24/7. Olvídate de las caídas del sistema y la lentitud.",
    img:
      "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop", // Foto servidores/cables
  },
  {
    id: 3,
    title: "CONSULTORÍA Y ESTRATEGIA IT",
    desc:
      "¿Tienes una idea pero no sabes qué tecnología usar? Analizo las necesidades de tu negocio y te diseño una hoja de ruta técnica para ahorrar costos, tiempo y evitar errores futuros.",
    img:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Foto reunión/consultoría
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-white p-6 md:p-20 font-sans text-black">
      {/* Encabezado con navegación */}
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

      {/* Lista de Servicios */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-center border-b border-gray-200 pb-20 last:border-0"
          >
            {/* Texto (Izquierda) */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                {service.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-md">
                {service.desc}
              </p>
            </div>

            {/* Imagen (Derecha) */}
            <div className="flex-1 w-full">
              <div className="overflow-hidden rounded-3xl shadow-2xl h-64 md:h-96 w-full relative group">
                {/* Capa de color al hacer hover (opcional, le da toque pro) */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                </div>
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

      {/* Botón volver móvil */}
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
