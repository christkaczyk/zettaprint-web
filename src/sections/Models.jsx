import { FiArrowUpRight } from 'react-icons/fi'

import {
  modelosRinon,
  modelosAsas,
} from '../data/productos'

function ModelCard({ modelo }) {
  const esRinon = modelo.tipo === 'riñón'

  return (
    <article
      className={`model-card ${
        esRinon ? 'model-rinon' : 'model-asas'
      }`}
    >
      <div className="model-visual">

        <div className="bag-shape">

          {esRinon ? (
            <div className="bag-handle-cutout">
              <span />
            </div>
          ) : (
            <div className="bag-handle">
              <span />
            </div>
          )}

          <div className="bag-body">
            <span>ZETTA</span>
            <strong>PRINT</strong>
          </div>

        </div>

      </div>

      <div className="model-info">
        <div>
          <span className="model-type">
            {esRinon
              ? 'MANIJA TROQUELADA'
              : 'MANIJA TIPO ASA'}
          </span>

          <h3>{modelo.nombre}</h3>
        </div>

        <button
          className="model-arrow"
          aria-label={`Ver ${modelo.nombre}`}
        >
          <FiArrowUpRight size={20} />
        </button>
      </div>
    </article>
  )
}

function Models() {
  return (
    <section className="models-section" id="comprar">
      <div className="container-custom">

        <div className="section-heading models-heading">
          <span>NUESTROS MODELOS Y TAMAÑOS</span>

          <h2>
            Elegí la bolsa que mejor
            <strong> se adapta a tu marca.</strong>
          </h2>

          <p>
            Contamos con distintos tamaños y tipos de manija
            para que encuentres el formato ideal para tus productos.
          </p>
        </div>

        <div className="model-group">

          <div className="model-group-header">
            <div>
              <span>01</span>
              <h3>Modelo riñón</h3>
            </div>

            <p>Manija troquelada</p>
          </div>

          <div className="models-grid">
            {modelosRinon.map((modelo) => (
              <ModelCard
                key={modelo.id}
                modelo={modelo}
              />
            ))}
          </div>

        </div>

        <div className="model-group">

          <div className="model-group-header">
            <div>
              <span>02</span>
              <h3>Con asas</h3>
            </div>

            <p>Manija tipo asa</p>
          </div>

          <div className="models-grid">
            {modelosAsas.map((modelo) => (
              <ModelCard
                key={modelo.id}
                modelo={modelo}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Models