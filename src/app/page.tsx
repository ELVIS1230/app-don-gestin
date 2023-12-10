import Link from "next/link";
import Image from "next/image";
import landscape from "../assets/landscape.jpg";


export default function Inicio() {

  return (
    <div>
      <nav className="bg-neutral-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Finanzas Personales</h1>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="#" className="hover:underline">Sobre Nosotros</Link></li>
            <li><Link href="#" className="hover:underline">Servicios</Link></li>
            <li><Link href="#" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>
      </nav>


      <section className="bg-section hero-section bg-gray-300 py-20" >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold py-2">Don Gestin</h1>
          <h2 className="text-4xl font-bold mb-4">Administra tus Finanzas con Facilidad</h2>
          <p className="text-lg text-gray-700">Obtén control total sobre tus gastos e ingresos de manera simple y efectiva.</p>
          <div className="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 px-6 mt-6 inline-block rounded-full">
          <Link href="/auth/login">Comenzar Ahora</Link> </div>
        </div>
      </section>


      <section className="features-section py-20">
        <div className="container mx-auto flex justify-center gap-12">
          <div className="text-center">
            <Image src="" alt="Feature 1" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-xl font-semibold mb-2">Control de Gastos</h3>
              <p className="text-gray-700">Lleva un registro detallado de tus gastos diarios y mensuales.</p>
          </div>
          <div className="text-center">
            <Image src="" alt="Feature 2" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-xl font-semibold mb-2">Planificación Financiera</h3>
              <p className="text-gray-700">Crea planes de ahorro y establece metas financieras alcanzables.</p>
          </div>
          <div className="text-center">
            <Image src="" alt="Feature 3" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-xl font-semibold mb-2">Notificaciones Personalizadas</h3>
              <p className="text-gray-700">Recibe alertas y notificaciones sobre tus movimientos financieros.</p>
          </div>
        </div>
      </section>


      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Finanzas Personales</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>

  )
}
