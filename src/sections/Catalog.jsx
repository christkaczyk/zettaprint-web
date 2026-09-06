import { FiShoppingBag } from 'react-icons/fi'

import {
  modelosRinon,
  modelosAsas,
} from '../data/productos'

import {
  formatearPrecio,
  obtenerPrecioMinimo,
} from '../data/helpers'

function ProductCard({ producto, onSelect }) {
  const esRinon = producto.tipo === 'riñón'

  return (
    <article className="product-card">

      <div className="product-card-visual">

        <div
          className={`catalog-bag ${
            esRinon
              ? 'catalog-bag-rinon'
              : 'catalog-bag-asas'
          }`}
        >

          {esRinon ? (
            <div className="catalog-rinon-handle">
              <span />
            </div>
          ) : (
            <div className="catalog-asas-handle">
              <span />
            </div>
          )}

          <div className="catalog-bag-body">
            <strong>ZETTA</strong>
            <strong>PRINT</strong>
          </div>

        </div>

      </div>

      <div className="product-card-content">

        <div>
          <span className="product-type">
            {esRinon
              ? 'MANIJA TROQUELADA'
              : 'MANIJA TIPO ASA'}
          </span>

          <h3>
            Bolsa {producto.nombre}
          </h3>

          <p>
            Packs desde{' '}
            <strong>
              {formatearPrecio(
                obtenerPrecioMinimo(producto.precios)
              )}
            </strong>
          </p>
        </div>

        <button
          className="product-button"
          onClick={() => onSelect(producto)}
        >
          <FiShoppingBag size={18} />
          Comprar
        </button>

      </div>

    </article>
  )
}

function Catalog({ onSelectProduct }) {
  return (
    <section
      className="catalog-section"
      id="productos"
    >
      <div className="container-custom">

        <div className="section-heading catalog-heading">

          <span>NUESTROS PRODUCTOS</span>

          <h2>
            Elegí tu modelo.
            <br />
            <strong>Personalizalo a tu manera.</strong>
          </h2>

          <p>
            Todos nuestros modelos se venden en packs de
            50, 100, 200, 300, 400 o 500 unidades.
          </p>

        </div>

        {/* RIÑÓN */}

        <div className="catalog-group">

          <div className="catalog-group-title">
            <span>01</span>

            <div>
              <h3>Modelo riñón</h3>
              <p>Manija troquelada</p>
            </div>
          </div>

          <div className="products-grid">

            {modelosRinon.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onSelect={onSelectProduct}
              />
            ))}

          </div>

        </div>

        {/* ASAS */}

        <div className="catalog-group">

          <div className="catalog-group-title">
            <span>02</span>

            <div>
              <h3>Con asas</h3>
              <p>Manija tipo asa</p>
            </div>
          </div>

          <div className="products-grid">

            {modelosAsas.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onSelect={onSelectProduct}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Catalog