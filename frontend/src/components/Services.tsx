const services = [
  {
    id: "1",
    title: "EL MOTOR DE TU PROYECTO 🧠",
    desc: "Arquitectura robusta y escalable...",
    icon: "⚙️",
  },
  {
    id: "2",
    title: "TU SITIO SIEMPRE ONLINE Y SEGURO ☁️",
    desc: "Despliegue optimizado y monitoreo constante.",
    icon: "🔒",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 italic">
        ¿QUÉ PUEDO HACER?
      </h2>
      <div className="flex flex-col gap-24 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="text-center group">
            <span className="text-2xl font-mono mb-4 block">{service.id}</span>
            <div className="w-16 h-16 bg-gray-100 mx-auto mb-6 rounded-xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">
              {service.title}
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">{service.desc}</p>
            <div className="w-full h-[1px] bg-black/10 mt-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
