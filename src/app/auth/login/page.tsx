"use client";
import axios from "axios";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { Form, Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaGlobe, FaRegEnvelope } from "react-icons/fa";
import { login } from "@/app/lib/actions";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (values: { username: string; password: string })=> {
    try {
      const token = await login(values.username, values.password);
      if(token){
        router.push('/home')
      }
     
    } catch (error: any) {
      const message = error.response?.data?.message;
      Modal.error({
        title: "Hubo un error",
        content: message ? message : "Ocurrio un error",
      });
    }
  };

  const handleChange = (e: any) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="border-2 border-black h-screen w-screen flex items-center justify-center bg-[#f5f5f5]">
      <section className="w-2/4 h-screen flex flex-col px-28 justify-center">
        <div className="text-left">
          <h1 className="text-5xl ">Gestiona tus finanzas con </h1>
          <p className="text-8xl text-blue-600 text-left font-medium">
            Don Gestin
          </p>
        </div>
        <div>
          <Form
            name="login"
            onFinish={handleSubmit}
            className="max-w-xl w-full py-8 rounded justify-self-start"
            initialValues={{ username: "", password: "" }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingresa su correo",
                },
              ]}
            >
              <Input
                className="h-14"
                size="large"
                placeholder="Ingrese el correo electrónico"
                suffix={<FaRegEnvelope />}
                value={user.email}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Por favor, ingresa tu contraseña" },
              ]}
            >
              <Input.Password
                className="h-14"
                placeholder="Contraseña"
              />
            </Form.Item>
            <div className="flex flex-col gap-4 justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg w-full h-14 "
              >
                Iniciar Sesión
              </button>
              <div className="flex gap-4 items-center ">
                <div className="h-1 w-1/2 bg-gray-300 rounded-2xl " />
                <p className="font-bold">O</p>
                <div className="h-1 w-1/2 bg-gray-300 rounded-2xl " />
              </div>
              <div className="flex justify-center items-center gap-4">
                <button className="flex items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                    <span>Google</span>
                </button>
                <button type="button" className="py-2 px-4  flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                  <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                  Facebook
                </button>
              </div>

            </div>
            </Form>
        </div>
      </section>
      <section className="w-2/4 h-screen p-2 flex items-center justify-center">
        <div className="w-full h-[99%] bg-[url('/images/accounting.jpg')] bg-cover bg-left rounded-3xl shadow-md flex flex-col items-center justify-between">
          <div className="w-[98%]  h-16 bg-black bg-opacity-30 backdrop-blur text-white justify-self-end mt-3 rounded-2xl flex items-center gap-4 p-4 isolate aspect-video bg-white/20 shadow-lg ring-1 ring-black/5">
            <div className="flex gap-4 w-full">
              <p>Sobre nosotros </p>
              <div className="flex items-center gap-2">
                <FaGlobe className="" />
                <p>ES </p>
              </div>
            </div>
            <Link href="/auth/register">
              <button type="submit" className="bg-white py-2 px-3 text-black rounded-xl">
                Registrarse
              </button>
            </Link>
          </div>
          <div className="w-[98%] bg-white h-52 justify-self-end mb-3 rounded-2xl flex items-center justify-between gap-4 p-4 ">
            <div className="flex items-center gap-4">
              <div className=" rounded-xl">
              <Image src="/images/qr.png"
                width={150}
                height={150}
                alt="Imagen" 
                className="object-contain rounded-md"
              />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-4xl font-bold">
                  Descarga nuestra aplicación
                </h1>
                <p className="text-xl text-gray-400">Escanea el código QR</p>
              </div>
            </div>
            <div className="flex items-center h-full px-4">
              <FaArrowRight className="text-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
