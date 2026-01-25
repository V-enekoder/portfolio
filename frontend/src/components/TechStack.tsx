import React from "react";
import "./TechStack.css"; // Tendrás que crear este archivo CSS

const techs = [
  { name: "Go", img: "../assets/go-logo.png" },
  { name: "TypeScript", img: "/ruta/al/logo-js.png" },
  { name: "Python", img: "/ruta/al/logo-python.png" },
  { name: "Linux", img: "/ruta/al/logo-linux.png" },
  { name: "Debian", img: "../assets/debian-logo.png" },
  { name: "Podman", img: "../assets/podman-logo.png" },
  { name: "Postgre", img: "../assets/postgre-logo.png" },
  { name: "Redis", img: "../assets/redis-logo.png" },
  { name: "Ubuntu", img: "../assets/ubuntu-logo.png" },
];

const TechStack = () => {
  return (
    <section className="stack-section">
      <h2>MI STACK TECNOLÓGICO</h2>
      <div className="grid-container">
        {techs.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.img} alt={tech.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
