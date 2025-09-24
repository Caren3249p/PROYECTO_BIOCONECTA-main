import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", pass: "" });
  const [mensaje, setMensaje] = useState("");

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.pass }),
      });
      const data = await res.json();
      if (res.ok && data.access_token) {
        localStorage.setItem("token", data.access_token);
        setMensaje("Login exitoso");
        // Redirigir o actualizar estado de usuario aquí si lo deseas
      } else {
        setMensaje(data.message || "Credenciales incorrectas");
      }
    } catch {
      setMensaje("Error de conexión");
    }
  };

  const loginPrueba = (rol) => {
    localStorage.setItem("token", "token-falso-prueba");
    localStorage.setItem("rol", rol);
    setMensaje(`Login de prueba como ${rol}`);
    // window.location.href = "/dashboard";
  };

  return (
    <main className="flex-1 flex items-start justify-center py-14">
      <form onSubmit={onSubmit} className="card w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <label className="label" htmlFor="email">Correo Electrónico</label>
        <input id="email" type="email" placeholder="Correo Electrónico" className="input mb-3" required value={form.email} onChange={onChange} />

        <label className="label" htmlFor="pass">Contraseña</label>
        <input id="pass" type="password" placeholder="Contraseña" className="input mb-6" required value={form.pass} onChange={onChange} />

        <button type="submit" className="btn btn-primary w-full">Ingresar</button>
        <button type="button" className="btn btn-secondary w-full mt-2" onClick={() => loginPrueba("Estudiante")}>
          Login de prueba Estudiante
        </button>
        <button type="button" className="btn btn-secondary w-full mt-2" onClick={() => loginPrueba("Asesor")}>
          Login de prueba Asesor
        </button>
        <button type="button" className="btn btn-secondary w-full mt-2" onClick={() => loginPrueba("Administrador")}>
          Login de prueba Administrador
        </button>
        <div className="mt-4 text-center">
          <Link to="/register" className="text-teal-600 hover:underline">¿No tienes cuenta? Regístrate</Link>
        </div>
        {mensaje && <p className="mt-4 text-red-600">{mensaje}</p>}
      </form>
    </main>
  );
}
