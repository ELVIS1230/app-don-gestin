"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form, FormProps, Input, InputNumber, Modal } from "antd";
import { Rules } from "@/utils/rules-validate";

const Registro = () => {
  const [form] = Form.useForm();
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
    try {

    const values = await form.validateFields();
    console.log("Datos enviados:", formData);
    const data = {
      u_cedula: values.cedula,
      u_name: values.firstName,
      u_lastname: values.lastName,
      u_email: values.email,
      u_password: values.password,
    };
      const response = await axios.post(
        "http://localhost:3000/api/users",
        data
      );
      console.log(response.data);
      router.push("/auth/login");
      setFormData({
        cedula: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      const message = error.response?.data?.message;
      Modal.error({
        title: "Hubo un error",
        content: message ? message : "Ocurrio un error",
      });
    }
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold  text-center">Registro</h2>
        <Form
          form={form}
          name="basic"
          initialValues={{
            cedula: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Cedula
            </label>
            <Form.Item name="cedula" rules={[Rules.required, Rules.cedula]}>
            <input
              id="cedula"
              name="cedula"
              type="text"
              autoComplete="given-name"
              required
              value={formData.cedula}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2  w-full"
            />
            </Form.Item>
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <Form.Item name="firstName" rules={[Rules.required, Rules.names]}>

            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2  w-full"
            />
            </Form.Item>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <Form.Item name="lastName" rules={[Rules.required, Rules.names]}>

            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2  w-full"
            />
          </Form.Item>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <Form.Item name="email" rules={[Rules.required, Rules.email]}>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2  w-full"
            />
            </Form.Item>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <Form.Item name="password" rules={[Rules.required]}>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2  w-full"
            />
            </Form.Item>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Registrarse
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registro;
