import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Heart, Zap } from 'lucide-react'

function Home() {
  const features = [
    { icon: Heart, title: 'Hecho con Amor', desc: 'Cada galleta elaborada con dedicación' },
    { icon: Star, title: 'Ingredientes Premium', desc: 'Solo lo mejor para ti' },
    { icon: Zap, title: 'Entrega Rápida', desc: 'Frescas directo a tu puerta' },
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dulce-500 to-dulce-600 text-white py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              🍪 Galletas Artesanales
              <span className="block text-dulce-100 mt-2">Hechas con Pasión</span>
            </h1>
            <p className="text-xl text-dulce-100 mb-8 leading-relaxed">
              Descubre el sabor auténtico de nuestras galletas artesanales, elaboradas con ingredientes naturales y tradición.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/recetas" className="btn-primary inline-flex items-center gap-2">
                Ver Recetas <ArrowRight size={20} />
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Ordenar Ahora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="card p-8 text-center"
              >
                <div className="inline-block p-4 bg-dulce-100 rounded-full mb-4">
                  <Icon className="text-dulce-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Featured Recipe */}
      <section className="bg-gradient-to-r from-dulce-100 to-dulce-200 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Receta Especial del Mes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Descubre nuestra galleta de chocolate belga con nueces de macadamia. Una combinación exquisita de sabores que hará que vuelvas por más.
              </p>
              <Link to="/recetas" className="btn-primary">
                Ver todas las recetas →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-8xl">🍫</div>
              <p className="text-2xl font-bold text-dulce-600 mt-4">Chocolate & Nueces</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
