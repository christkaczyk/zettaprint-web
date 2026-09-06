import {
  FiGrid,
  FiEdit3,
  FiShoppingBag,
  FiMessageCircle,
} from 'react-icons/fi'

function HowToBuy() {
  const pasos = [
    {
      numero: '01',
      icono: FiGrid,
      titulo: 'Elegí tu modelo',
      texto:
        'Seleccioná el tamaño y tipo de manija que necesitás para tu marca.',
    },
    {
      numero: '02',
      icono: FiEdit3,
      titulo: 'Personalizá tu bolsa',
      texto:
        'Elegí el color de la bolsa, el color de estampa y la cantidad.',
    },
    {
      numero: '03',
      icono: FiShoppingBag,
      titulo: 'Agregá al carrito',
      texto:
        'Revisá tu pedido y verificá todos los detalles antes de enviarlo.',
    },
    {
      numero: '04',
      icono: FiMessageCircle,
      titulo: 'Confirmá por WhatsApp',
      texto:
        'Enviá tu pedido y coordinamos con vos los detalles finales.',
    },
  ]

  return (
    <section
      className="how-to-buy-section"
      id="como-comprar"
    >
      <div className="container-custom">

        <div className="section-heading how-to-buy-heading">
          <span>CÓMO COMPRAR</span>

          <h2>
            Tu pedido,
            <br />
            <strong>en pocos pasos.</strong>
          </h2>

          <p>
            Armá tu pedido directamente desde la web y
            envianos todos los detalles por WhatsApp.
          </p>
        </div>

        <div className="how-to-buy-grid">
          {pasos.map((paso) => {
            const Icon = paso.icono

            return (
              <article
                className="how-to-buy-card"
                key={paso.numero}
              >
                <div className="how-to-buy-top">
                  <span>{paso.numero}</span>

                  <div className="how-to-buy-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <div>
                  <h3>{paso.titulo}</h3>

                  <p>{paso.texto}</p>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default HowToBuy