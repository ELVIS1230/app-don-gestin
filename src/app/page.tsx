export default function Home() {
  return (
    <div className="flex justify-center overflow-hidden rounded-lg" style={{ margin: "10px" }}>
   
      <div className="flex flex-col md:flex-row justify-center shadow-inner"
        style={{
          backgroundColor: "white",
          marginTop:"40px",
          padding: "100px",
          borderRadius: "10px"
        }} >
        {/* Div izquierdo */}
        <div className="container mx-auto p-4 flex flex-col justify-center" >
          <h1 className="text-3xl font-bold">Don Gestión</h1>
          <p>Facilita la gestión de tus finanzas</p>
        </div>

        {/* Div derecho con el formulario */}
        <div className="container mx-auto p-4 flex justify-center items-center" >

          <form className="max-w-md bg-white p-8 rounded shadow-md">
            <h2 className="text-center text-gray-900 text-lg font-bold mb-2">Ingresa a tu Cuenta</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Contraseña"
                id="password" />

            </div>

            <div className="flex justify-center">

              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
              >
                Iniciar Sesión
              </button>
               </div>
               <div className="flex justify-center">

              <button
                className="hover:bg-gray-800 text-white py-2 px-4 rounded" 
                style={{marginTop:"10px",
              background:"#4b5563"}}
              >
                ¿No tienes una Cuenta?
              </button>
           </div>
          </form>
        </div>
      </div>
    </div>
  )
}
