import Link from "next/link";
import Image from "next/image";
import landscape from "../assets/landscape.jpg";

export default function Inicio() {

  return (
    <div>
      <nav className="bg-neutral-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Personal Finance</h1>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Start</Link></li>
            <li><Link href="#" className="hover:underline">About us</Link></li>
            <li><Link href="#" className="hover:underline">Services</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </nav>


      <section className="bg-section hero-section bg-gray-300 py-20" >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold py-2">Don Gestin</h1>
          <h2 className="text-4xl font-bold mb-4">Manage your Finances with Ease</h2>
          <p className="text-lg font-bold text-black">Get full control over your expenses and income in a simple and effective way.</p>
          <div className="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 px-6 mt-6 inline-block rounded-full">
          <Link href="/auth/login">Start now</Link> </div>
        </div>
      </section>


      <section className="features-section py-20">
        <div className="container mx-auto flex justify-center gap-12">
          <div className="text-center">
            <Image src="" alt="Feature 1" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-xl font-semibold mb-2">Expense Control</h3>
              <p className="text-gray-700">Keep a detailed record of your daily and monthly expenses.</p>
          </div>
          <div className="text-center">
            <Image src="" alt="Feature 2" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-xl font-semibold mb-2">Planificación Financiera</h3>
              <p className="text-gray-700">Create savings plans and set achievable financial goals.</p>
          </div>
          <div className="text-center">
            <Image src="" alt="Feature 3" className="mx-auto mb-4 rounded-full"/>
              <h3 className="text-xl font-semibold mb-2">Custom Notifications</h3>
              <p className="text-gray-700">Receive alerts and notifications about your financial movements.</p>
          </div>
        </div>
      </section>


      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Personal Finance</p>
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
