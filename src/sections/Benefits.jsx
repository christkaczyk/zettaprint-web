import {
  FiRefreshCw,
  FiShield,
  FiPenTool,
  FiTruck,
} from 'react-icons/fi'

import FeatureCard from '../components/FeatureCard'

function Benefits() {
  const benefits = [
    {
      icon: FiRefreshCw,
      title: 'Reutilizables',
      description:
        'Bolsas pensadas para acompañar a tus clientes una y otra vez.',
    },
    {
      icon: FiShield,
      title: 'Resistentes',
      description:
        'Friselina de calidad para que tu marca esté presente en cada uso.',
    },
    {
      icon: FiPenTool,
      title: 'Personalizadas',
      description:
        'Tu logo y tu identidad estampados en tus bolsas.',
    },
    {
      icon: FiTruck,
      title: 'Envíos',
      description:
        'Enviamos tus pedidos a todo el país y coordinamos la opción más conveniente.',
    },
  ]

  return (
    <section className="benefits-section">
      <div className="container-custom">

        <div className="section-heading">
          <span>¿POR QUÉ ZETTAPRINT?</span>

          <h2>
            Bolsas que hacen que
            <strong> tu marca se destaque.</strong>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Benefits