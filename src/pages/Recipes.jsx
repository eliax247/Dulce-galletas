import { motion } from 'framer-motion'
import { Clock, Users, ChefHat } from 'lucide-react'

function Recipes() {
  const recipes = [
    {
      id: 1,
      name: 'Galletas Clásicas',
      emoji: '🍪',
      time: '30 min',
      serves: '24 piezas',
      difficulty: 'Fácil',
      ingredients: ['Harina', 'Azúcar', 'Mantequilla', 'Huevo', 'Vainilla'],
      description: 'Las clásicas galletas de mantequilla que todos amamos.'
    },
    {
      id: 2,
      name: 'Chocolate Chip',
      emoji: '🍫',
      time: '35 min',
      serves: '20 piezas',
      difficulty: 'Media',
      ingredients: ['Harina', 'Chips de chocolate', 'Mantequilla', 'Huevo', 'Azúcar morena'],
      description: 'Galletas suaves con chips de chocolate premium.'
    },
    {
      id: 3,
      name: 'Galletas de Avena',
      emoji: '🌾',
      time: '40 min',
      serves: '18 piezas',
      difficulty: 'Fácil',
      ingredients: ['Avena', 'Harina', 'Mantequilla', 'Huevo', 'Miel'],
      description: 'Saludables y deliciosas galletas de avena y miel.'
    },
    {
      id: 4,
      name: 'Dulce de Leche',
      emoji: '🥛',
      time: '45 min',
      serves: '16 piezas',
      difficulty: 'Media',
      ingredients: ['Harina', 'Dulce de leche', 'Mantequilla', 'Huevo', 'Azúcar'],
      description: 'Galletas con relleno de dulce de leche irresistible.'
    },
    {
      id: 5,
      name: 'Fresas y Crema',
      emoji: '🍓',
      time: '35 min',
      serves: '20 piezas',
      difficulty: 'Media',
      ingredients: ['Harina', 'Fresas', 'Crema', 'Mantequilla', 'Huevo'],
      description: 'Galletas frescas con fresas y crema batida.'
    },
    {
      id: 6,
      name: 'Especial Canela',
      emoji: '✨',
      time: '38 min',
      serves: '22 piezas',
      difficulty: 'Fácil',
      ingredients: ['Harina', 'Canela', 'Azúcar', 'Mantequilla', 'Huevo'],
      description: 'Aromáticas galletas con canela y azúcar canela.'
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-dulce-500 to-dulce-600 text-white py-16">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Nuestras Recetas
          </motion.h1>
          <p className="text-dulce-100 text-lg">Descubre todas nuestras deliciosas recetas de galletas artesanales</p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card overflow-hidden hover:animate-pulse-glow"
            >
              <div className="bg-gradient-to-br from-dulce-100 to-dulce-200 h-32 flex items-center justify-center text-6xl">
                {recipe.emoji}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{recipe.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{recipe.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock size={16} className="text-dulce-500" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Users size={16} className="text-dulce-500" />
                    <span>{recipe.serves}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <ChefHat size={16} className="text-dulce-500" />
                    <span className={`font-semibold ${
                      recipe.difficulty === 'Fácil' ? 'text-green-600' :
                      recipe.difficulty === 'Media' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Ingredientes:</p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ing, i) => (
                      <span key={i} className="bg-dulce-100 text-dulce-700 px-3 py-1 rounded-full text-xs">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Recipes
