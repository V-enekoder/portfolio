import "./Services.css";

const servicesData = [
  {
    title: "DESARROLLO DE APIS Y BACKEND",
    desc: "Diseño escalable y seguridad de alto nivel...",
    img: "ruta-imagen-backend.jpg",
  },
  {
    title: "ADMINISTRACIÓN DE SERVIDORES LINUX",
    desc: "Configuración y mantenimiento 24/7...",
    img: "ruta-imagen-servidores.jpg",
  },
  {
    title: "CONSULTORÍA Y ESTRATEGIA IT",
    desc: "¿Tienes una idea pero no sabes cómo ejecutarla?...",
    img: "ruta-imagen-consultoria.jpg",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      {servicesData.map((item, index) => (
        <div key={index} className="service-row">
          <div className="service-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          <div className="service-image">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
