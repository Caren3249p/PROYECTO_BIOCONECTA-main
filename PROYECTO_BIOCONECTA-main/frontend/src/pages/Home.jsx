// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-r from-[#009688] to-[#00796B]">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a <span className="text-white">Bioconecta</span>
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            Conectamos la biotecnología con la innovación para transformar el
            futuro. Descubre nuestros proyectos y soluciones.
          </p>
          <button className="bg-[#009688] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#00796B] transition">
            Conócenos
          </button>
        </div>      
        <img
          src="/img1corporativo.png"
          alt="imagen"
          className="w-80 mt-10 md:mt-0 rounded-2xl shadow-lg"
        />
      </section>

      {/* SOBRE LA EMPRESA */}
      <section className="px-8 py-16 text-center bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold mb-6 text-[#009688]">
          ¿Quiénes somos?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          En <span className="text-[#009688]">Bioconecta</span> creemos en el
          poder de la biotecnología para mejorar la vida de las personas y
          cuidar el medio ambiente. Nuestro equipo combina experiencia científica
          con innovación tecnológica.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="px-8 py-16 bg-[#121212]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[rgb(0,150,136)]">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-[#009688]">Investigación</h3>
            <p className="text-gray-300">
              Desarrollamos proyectos de investigación en biotecnología aplicada
              a la salud, la agricultura y el medio ambiente.
            </p>
          </div>
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-[#009688]">Innovación</h3>
            <p className="text-gray-300">
              Creamos soluciones tecnológicas que conectan la ciencia con la
              industria para un futuro sostenible.
            </p>
          </div>
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-[#009688]">Consultoría</h3>
            <p className="text-gray-300">
              Brindamos asesoría a empresas y organizaciones para aplicar la
              biotecnología en sus procesos.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-center py-6 mt-auto border-t border-[#009688]/40">
        <p className="text-gray-400 text-sm">
          © 2025 Bioconecta. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
