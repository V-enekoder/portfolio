useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/proyectos`)
    .then((res) => res.json())
    .then((data) => setProyectos(data));
}, []);
