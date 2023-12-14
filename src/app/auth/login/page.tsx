'use client'
import axios from "axios";
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
export default function Login() {
  const [user, setUser ] = useState({
    email:'',
    password: ''
  })
  const router = useRouter()
  
   const handleSubmit = async (e:any)=>{
    e.preventDefault();
    try{
        console.log(user)
    
      const response = await axios.post('http://127.0.0.1:3000/api/users/login', user) 
  

      sessionStorage.setItem('usuario', JSON.stringify({
        cedula: response.data.u_cedula,
        nombre: response.data.u_nombre, 
        apellido: response.data.u_apellido,
        cuenta: response.data.cuenta_id_fk.cuenta_id 
      }));
      console.log(response.data)
      
      router.push('/home', { scroll: false })
    }catch (error:any){
      // throw new Error(error.response?.data || 'Error en la solicitud a la API');
      console.log(error)
    }
  }
  
  const handleChange = (e:any) => setUser({...user, [e.target.name]: e.target.value})
  return (
      <div className="flex justify-center overflow-hidden rounded-lg " style={{ margin: "10px" }}>
     
        <div className="flex flex-col md:flex-row justify-center shadow-inner border-4 border-black "
          style={{
            backgroundColor: "white",
            marginTop:"40px",
            padding: "100px",
            borderRadius: "10px"
          }} >
          {/* Div izquierdo */}
          <div className="container mx-auto p-4 flex flex-col justify-center " >
            <h1 className="text-3xl font-bold"><Link href="/">Don Gestín</Link></h1>
            <p>Facilita la gestión de tus finanzas</p>
          </div>
  
          {/* Div derecho con el formulario */}
          <div className="container mx-auto p-4 flex justify-center items-center" >
  
            <form 
            onSubmit={handleSubmit}

            className="max-w-md bg-white p-8 rounded shadow-md">
              <h2 className="text-center text-gray-900 text-lg font-bold mb-2">Ingresa a tu Cuenta</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value= {user.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña:
                </label>
                <input type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value= {user.password}
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
                 {/* <LoginButton /> */}
                 </div>
                 <div className="flex justify-center">
  
                <button
                  className="hover:bg-gray-800 text-white py-2 px-4 rounded" 
                  style={{marginTop:"10px",
                background:"#4b5563"}}
                >
                  <Link href="/auth/register">¿No tienes una Cuenta?</Link>
                </button>
             </div>
            </form>
          </div>
        </div>
      </div>
    )
  }


