import { motion } from 'framer-motion'
import { Award, Target, Heart } from 'lucide-react'

function About() {
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
            Sobre Nosotros
          </motion.h1>
          <p className="text-dulce-100 text-lg">La historia detrás de Dulce Galletas</p>
        </div>
      </section>

      {/* Story */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Todo comenzó en una pequeña cocina con la pasión por hacer las mejores galletas. Lo que empezó como un hobbyse convirtió en nuestra misión: llevar alegría a través de cada galleta.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Utilizamos solo ingredientes naturales y de la más alta calidad, sin conservantes ni aditivos artificiales. Cada receta ha sido perfeccionada durante años para garantizar el mejor sabor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy, seguimos comprometidos con la excelencia y la satisfacción de nuestros clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-9xl mb-4">👨‍🍳</div>
            <p className="text-xl font-semibold text-dulce-600">Hecho con amor desde 2020</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dulce-100 py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nuestros Valores
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Pasión', desc: 'Hacemos cada galleta con dedicación y amor' },
              { icon: Target, title: 'Calidad', desc: 'Ingredientes premium en cada producto' },
              { icon: Award, title: 'Excelencia', desc: 'Estándares de calidad garantizados' },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-block p-4 bg-dulce-500 text-white rounded-full mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-custom py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestro Equipo
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Elena García', role: 'Confitería', emoji: '👩‍🍳' },
            { name: 'Marco López', role: 'Gerente', emoji: '👨‍💼' },
            { name: 'Sofia Martínez', role: 'Diseño & Marketing', emoji: '👩‍🎨' },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="card p-8 text-center"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
