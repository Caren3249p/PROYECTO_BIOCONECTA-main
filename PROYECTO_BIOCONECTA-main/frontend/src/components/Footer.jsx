// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">
        {/* Logo */}
        <img 
          src="/LogoUPB.png"   // 👈 coloca aquí el archivo que subiste en /public
          alt="Universidad Pontificia Bolivariana" 
          className="h-14 mb-4"
        />

        {/* Texto */}
        <p className="text-sm">
          Resolución 020198 del 31 de octubre de 2024 por un periodo de 6 años
        </p>
        <p className="text-sm">
          Universidad sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.
        </p>
        <p className="text-sm">
          Otorgado por el Ministerio de Educación Nacional. NIT UPB: 890.902.922-6. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
