import Header from "../Components/Header"
import Home from "./Home"


function Contact() {
  return <div>
  <div className="min-h-screen flex flex-col items-center justify-center bg-slate-600">
      <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>
      
      <ul className="space-y-4 w-full max-w-sm">
        {/* Gmail */}
        <li>
          <a
            href="mailto:mohajiinowaza09@gmail.com"
            className="block text-white bg-red-600 py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:scale-105 hover:opacity-90 transition transform duration-300"
          >
            <i class="fa-solid fa-envelope"></i> My Email
          </a>
        </li>

        {/* WhatsApp */}
        <li>
          <a
            href="https://wa.me/252616913269"
            rel="noopener noreferrer"
            className="block text-red-600 bg-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:scale-105 hover:opacity-90 transition transform duration-300"
          >
            <i class="fa-brands fa-whatsapp"></i> My Whatsapp
          </a>
        </li>
      </ul>
    </div>
  </div>
}

export default Contact
