import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Perfil from "./pages/Perfil.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx"; // 👈 Importa la nueva página
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Unete from "./pages/Unete";
import Servicios from "./pages/Servicios";
import Tareas from "./pages/Tareas.jsx"; // Importa el nuevo componente de gestión de tareas
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} /> {/* 👈 Nueva ruta */}
        <Route path="/servicios" element={<Servicios />} /> {/* 👈 Nueva ruta */}
        <Route path="/Unete" element={<Unete />} /> {/* 👈 Aquí está */}
        <Route path="/footer" element={<Footer />} /> {/* 👈 siempre abajo */}
        <Route path="/tareas" element={<Tareas />} /> {/* Nueva ruta para tareas */}
        <Route path="*" element={<div className="text-white p-8">404</div>} />
      </Routes>
    </div>
  );
}

