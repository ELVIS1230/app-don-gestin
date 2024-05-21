"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Registro = () => {
  const [formData, setFormData] = useState({
    cedula: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    const data = {
      u_cedula: formData.cedula,
      u_nombre: formData.firstName,
      u_apellido: formData.lastName,
      u_correo: formData.email,
      u_contraseña: formData.password,
    };
    // console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    router.push("/auth/login");
    setFormData({
      cedula: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Cedula
            </label>
            <input
              id="cedula"
              name="cedula"
              type="text"
              autoComplete="given-name"
              required
              value={formData.cedula}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
