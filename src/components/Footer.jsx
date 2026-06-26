import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-dulce-300">Dulce Galletas</h3>
            <p className="text-gray-400">
              Galletas artesanales hechas con ingredientes naturales y mucho amor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-dulce-400 transition">Inicio</Link></li>
              <li><Link to="/recetas" className="hover:text-dulce-400 transition">Recetas</Link></li>
              <li><Link to="/nosotros" className="hover:text-dulce-400 transition">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-dulce-400 transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-dulce-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-dulce-400" />
                <span>info@dulcegalletas.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-dulce-400" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Dulce Galletas. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-dulce-400 transition">Privacidad</a>
            <a href="#" className="hover:text-dulce-400 transition">Términos</a>
            <a href="#" className="hover:text-dulce-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
