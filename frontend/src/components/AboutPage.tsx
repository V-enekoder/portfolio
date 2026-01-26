import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-white pt-10 pb-20 px-6 md:px-10 font-sans text-black">
      {/* 1. ENCABEZADO "ABOUT" */}
      <div className="max-w-6xl mx-auto mb-16 border-b border-black pb-6 flex justify-between items-end">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
          ABOUT
        </h1>
        <Link
          to="/"
          className="hidden md:block px-6 py-2 border-2 border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all"
        >
          ← Volver
        </Link>
      </div>

      {/* 2. SECCIÓN SUPERIOR: Grid de 3 columnas (Etiqueta - Foto - Nombre) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        {/* Columna Izquierda: Etiqueta */}
        <div className="md:col-span-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 sticky top-10">
            Mi Historia
          </span>
        </div>

        {/* Columna Central: Foto Principal */}
        <div className="md:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
            alt="Victor trabajando en evento"
            className="w-full rounded-[2rem] shadow-xl object-cover h-[400px] md:h-[500px]"
          />
        </div>

        {/* Columna Derecha: Datos */}
        <div className="md:col-span-4 flex flex-col justify-start pt-4">
          <h2 className="text-xl font-black uppercase mb-1">
            Victor Astudillo
          </h2>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Creador
          </p>
        </div>
      </div>

      {/* 3. FRASE DESTACADA */}
      <div className="max-w-3xl mx-auto text-center md:text-left mb-16 pl-0 md:pl-20">
        <h2 className="text-3xl md:text-4xl font-black leading-tight">
          Llegué al desarrollo de software casi por accidente, y ahora no me
          imagino haciendo otra cosa.
        </h2>
      </div>

      {/* 4. GALERÍA DE 3 FOTOS CUADRADAS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pl-0 md:pl-20">
        <img
          src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop"
          className="rounded-3xl w-full h-64 object-cover shadow-lg hover:rotate-2 transition-transform"
          alt="Terminal Linux"
        />
        <img
          src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop"
          className="rounded-3xl w-full h-64 object-cover shadow-lg hover:-rotate-2 transition-transform"
          alt="Mascota o Hobby"
        />
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
          className="rounded-3xl w-full h-64 object-cover shadow-lg hover:rotate-1 transition-transform"
          alt="Código"
        />
      </div>

      {/* 5. TEXTO HISTORIA PARTE 1 */}
      <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed mb-16">
        <p>
          Mi aventura en el desarrollo comenzó en la UNEG. No estaba
          especialmente apasionado, hasta que empecé a programar y descubrí lo
          mucho que me gustaba resolver problemas lógicos y crear cosas desde
          cero.
        </p>
      </div>

      {/* 6. FOTO ANCHA (Estresado/Enfocado) */}
      <div className="max-w-5xl mx-auto mb-16 pl-0 md:pl-10">
        <img
          src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop"
          alt="Working Hard"
          className="w-full h-[400px] object-cover rounded-[3rem]"
        />
      </div>

      {/* 7. TEXTO FINAL Y BOTÓN */}
      <div className="max-w-2xl mx-auto text-lg text-gray-800 leading-relaxed mb-20">
        <p className="mb-10">
          A pesar de no ser los mejores inicios, lo más importante que aprendí
          fue a aprender. Y así es como fui creando mi portafolio, a base de
          internet, interés y mucho café.
        </p>

        <a href="mailto:veastudilloviloria@gmail.com">
          <button className="bg-yellow-400 text-[10px] font-black uppercase px-8 py-3 rounded-sm hover:bg-black hover:text-white transition-colors">
            • Agenda una entrevista
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
