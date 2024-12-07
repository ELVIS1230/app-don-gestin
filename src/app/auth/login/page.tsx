"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(user);

      const response = await axios.post(
        "http://127.0.0.1:3000/api/users/login",
        user
      );

      sessionStorage.setItem(
        "usuario",
        JSON.stringify({
          cedula: response.data.u_cedula,
          nombre: response.data.u_name,
          apellido: response.data.u_lastname,
          cuenta: response.data.account_id_fk.account_id,
        })
      );
      console.log(response.data);

      router.push("/home", { scroll: false });
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
  // return (
  //     <div className="flex justify-center overflow-hidden rounded-lg " style={{ margin: "10px" }}>

  //       <div className="flex flex-col md:flex-row justify-center shadow-inner border-4 border-black "
  //         style={{
  //           backgroundColor: "white",
  //           marginTop:"40px",
  //           padding: "100px",
  //           borderRadius: "10px"
  //         }} >
  //         {/* Div izquierdo */}
  //         <div className="container mx-auto p-4 flex flex-col justify-center " >
  //           <h1 className="text-3xl font-bold"><Link href="/">Don Gestín</Link></h1>
  //           <p>Facilita la gestión de tus finanzas</p>
  //         </div>

  //         {/* Div derecho con el formulario */}
  //         <div className="container mx-auto p-4 flex justify-center items-center" >

  //           <form
  //           onSubmit={handleSubmit}

  //           className="max-w-md bg-white p-8 rounded shadow-md">
  //             <h2 className="text-center text-gray-900 text-lg font-bold mb-2">Ingresa a tu Cuenta</h2>
  //             <div className="mb-4">
  //               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
  //                 Correo Electrónico:
  //               </label>
  //               <input
  //                 type="email"
  //                 id="email"
  //                 name="email"
  //                 value= {user.email}
  //                 onChange={handleChange}
  //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                 placeholder="Ingrese su correo electrónico"
  //               />
  //             </div>

  //             <div className="mb-4">
  //               <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
  //                 Contraseña:
  //               </label>
  //               <input type="password"
  //                 name="password"
  //                 id="password"
  //                 onChange={handleChange}
  //                 value= {user.password}
  //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                 placeholder="Contraseña"
  //                 />

  //             </div>

  //             <div className="flex justify-center">

  //               <button
  //               type="submit"
  //                 className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
  //               >
  //                 Iniciar Sesión
  //               </button>
  //                {/* <LoginButton /> */}
  //                </div>
  //                <div className="flex justify-center">

  //               <button
  //                 className="hover:bg-gray-800 text-white py-2 px-4 rounded"
  //                 style={{marginTop:"10px",
  //               background:"#4b5563"}}
  //               >
  //                 <Link href="/auth/register">¿No tienes una Cuenta?</Link>
  //               </button>
  //            </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="border-2 border-black h-screen w-screen flex items-center justify-center">
      <section className="w-2/4 h-screen flex flex-col px-28 justify-center">
        <div className="text-left">
          <h1 className="text-5xl ">Gestiona tus finanzas con </h1>
          <p className="text-8xl text-blue-600 text-left">Don Gestin</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="max-w-md  p-8 rounded justify-self-start"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={user.password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Contraseña"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="hover:bg-gray-800 text-white py-2 px-4 rounded"
                style={{ marginTop: "10px", background: "#4b5563" }}
              >
                <Link href="/auth/register">¿No tienes una Cuenta?</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="w-2/4 h-screen p-2 flex items-center justify-center">
        <div className="w-full h-[99%] bg-blue-600 rounded-3xl shadow-md flex flex-col items-center justify-end">
          <div className="w-[98%] bg-white h-52 justify-self-end mb-3 rounded-2xl flex items-center gap-4 p-4">
            <div className=" w-44 h-44 border-2 border-black rounded-xl"></div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-4xl font-bold">Descarga nuestra aplicación </h1>
              <p className="text-xl text-gray-400">
                Escanea el código QR
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
