import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-dulce-500 to-dulce-600 text-white py-16">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Contacto
          </motion.h1>
          <p className="text-dulce-100 text-lg">¿Preguntas? Estamos aquí para ayudarte</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-6">Información de Contacto</h2>

            {[
              { icon: Phone, label: 'Teléfono', value: '+1 (555) 123-4567' },
              { icon: Mail, label: 'Email', value: 'info@dulcegalletas.com' },
              { icon: MapPin, label: 'Ubicación', value: 'Madrid, España' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4">
                  <div className="p-4 bg-dulce-100 rounded-lg h-fit">
                    <Icon className="text-dulce-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Nombre</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-dulce-300 rounded-lg focus:border-dulce-500 focus:outline-none transition"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-dulce-300 rounded-lg focus:border-dulce-500 focus:outline-none transition"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Mensaje</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 py-3 border-2 border-dulce-300 rounded-lg focus:border-dulce-500 focus:outline-none transition resize-none"
                placeholder="Tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {submitted ? '¡Enviado! ✓' : 'Enviar Mensaje'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 h-96 rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-dulce-500 to-dulce-600 flex items-center justify-center text-white text-2xl font-semibold">
          📍 Mapa (integración disponible)
        </div>
      </section>
    </div>
  )
}

export default Contact
