const CallToAction = () => {
  return (
    <section style={{ textAlign: "center", padding: "5rem 1rem" }}>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Descubre cómo podemos llevar tu <br /> empresa al siguiente nivel
      </p>
      <button
        style={{
          backgroundColor: "#FFD700", /* Amarillo del diseño */
          border: "none",
          padding: "10px 30px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Contactar
      </button>
    </section>
  );
};

export default CallToAction;
