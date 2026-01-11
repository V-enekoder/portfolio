import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [_proyectos, setProyectos] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/proyectos`)
      .then((res) => res.json())
      .then((data) => setProyectos(data));
  }, []);

  return (
    <div>
      {/* Tu JSX */}
    </div>
  );
};
