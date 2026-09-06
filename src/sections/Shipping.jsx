import {
  FiTruck,
  FiMapPin,
  FiPackage,
} from 'react-icons/fi'

function Shipping() {
  return (
    <section
      className="shipping-section"
      id="envios"
    >
      <div className="container-custom">

        <div className="section-heading shipping-heading">
          <span>ENVÍOS</span>

          <h2>
            Recibí tus bolsas,
            <br />
            <strong>donde estés.</strong>
          </h2>

          <p>
            Preparamos tu pedido y lo enviamos de forma
            segura según tu ubicación.
          </p>
        </div>

        <div className="shipping-grid">

          <article className="shipping-card">
            <div className="shipping-icon">
              <FiTruck size={24} />
            </div>

            <span className="shipping-number">
              01
            </span>

            <h3>CABA y GBA</h3>

            <p>
              Enviamos tu pedido mediante
              <strong> Flex</strong>, directamente
              hasta tu domicilio.
            </p>

            <div className="shipping-label">
              <FiMapPin size={15} />
              Envío a domicilio
            </div>
          </article>


          <article className="shipping-card">
            <div className="shipping-icon">
              <FiPackage size={24} />
            </div>

            <span className="shipping-number">
              02
            </span>

            <h3>Interior del país</h3>

            <p>
              Realizamos envíos mediante
              <strong> Correo Argentino</strong> hasta
              la sucursal más cercana.
            </p>

            <div className="shipping-label">
              <FiMapPin size={15} />
              Envío a sucursal
            </div>
          </article>

        </div>

        <div className="shipping-note">
          <span>IMPORTANTE</span>

          <p>
            El costo del envío se calcula según la
            ubicación y no está incluido en el precio
            de las bolsas.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Shipping