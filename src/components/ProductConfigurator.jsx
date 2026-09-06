import { useEffect, useState } from 'react'
import { FiX, FiShoppingBag, FiMinus, FiPlus } from 'react-icons/fi'

import {
  coloresBolsa,
  coloresEstampa,
} from '../data/colores'

import {
  cantidadesPack,
} from '../data/productos'

import {
  formatearPrecio,
} from '../data/helpers'

import ColorSwatch from './ColorSwatch'

function ProductConfigurator({
  producto,
  onClose,
  onAddToCart,
}) {
  const [cantidad, setCantidad] = useState(50)

  const [colorBolsa, setColorBolsa] = useState(
    coloresBolsa[0]
  )

  const [colorEstampa, setColorEstampa] = useState(
    coloresEstampa[1]
  )

  useEffect(() => {
  if (!producto) {
    return
  }

  document.body.style.overflow = 'hidden'

  return () => {
    document.body.style.overflow = ''
  }
}, [producto])

  if (!producto) {
    return null
  }

  const precio = producto.precios[cantidad]

  const esRinon = producto.tipo === 'riñón'

  const aumentarCantidad = () => {
    const indiceActual =
      cantidadesPack.indexOf(cantidad)

    if (
      indiceActual <
      cantidadesPack.length - 1
    ) {
      setCantidad(
        cantidadesPack[indiceActual + 1]
      )
    }
  }

  const disminuirCantidad = () => {
    const indiceActual =
      cantidadesPack.indexOf(cantidad)

    if (indiceActual > 0) {
      setCantidad(
        cantidadesPack[indiceActual - 1]
      )
    }
  }

  const handleAddToCart = () => {
    onAddToCart({
      id: `${producto.id}-${cantidad}-${colorBolsa.nombre}-${colorEstampa.nombre}-${Date.now()}`,
      productoId: producto.id,
      nombre: producto.nombre,
      tipo: producto.tipo,
      cantidad,
      precio,
      colorBolsa,
      colorEstampa,
    })

    onClose()
  }

  return (
    <div
      className="configurator-overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose()
        }
      }}
    >
      <div className="configurator-modal">

        {/* HEADER */}

        <div className="configurator-header">

          <div>
            <span>PERSONALIZÁ TU BOLSA</span>

            <h2>
              {producto.nombre}
            </h2>
          </div>

          <button
            type="button"
            className="configurator-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* CONTENIDO */}

        <div className="configurator-content">

          {/* PREVIEW */}

          <div className="configurator-preview">

            <div
              className={`configurator-bag ${
                esRinon
                  ? 'configurator-bag-rinon'
                  : 'configurator-bag-asas'
              }`}
              style={{
                '--bag-color': colorBolsa.hex,
                '--print-color': colorEstampa.hex,
              }}
            >

              {esRinon ? (
                <div className="configurator-rinon-handle">
                  <span />
                </div>
              ) : (
                <div className="configurator-asas-handle">
                  <span />
                </div>
              )}

              <div className="configurator-bag-body">

                <div className="configurator-logo">
                  <span>ZETTA</span>
                  <strong>PRINT</strong>
                </div>

              </div>

            </div>

            <div className="configurator-preview-info">
              <span>
                {esRinon
                  ? 'MANIJA TROQUELADA'
                  : 'MANIJA TIPO ASA'}
              </span>

              <strong>
                {producto.nombre}
              </strong>
            </div>

          </div>

          {/* OPCIONES */}

          <div className="configurator-options">

            {/* PACK */}

            <div className="config-option">

              <div className="config-option-heading">
                <div>
                  <span>01</span>
                  <h3>Elegí tu pack</h3>
                </div>

                <strong>
                  {formatearPrecio(precio)}
                </strong>
              </div>

              <div className="pack-options">

                {cantidadesPack.map(
                  (pack) => (
                    <button
                      type="button"
                      key={pack}
                      className={`pack-option ${
                        cantidad === pack
                          ? 'active'
                          : ''
                      }`}
                      onClick={() =>
                        setCantidad(pack)
                      }
                    >
                      <strong>
                        {pack}
                      </strong>

                      <span>
                        {formatearPrecio(
                          producto.precios[pack]
                        )}
                      </span>
                    </button>
                  )
                )}

              </div>

            </div>

            {/* COLOR BOLSA */}

            <div className="config-option">

              <div className="config-option-heading">

                <div>
                  <span>02</span>

                  <h3>
                    Color de bolsa
                  </h3>
                </div>

                <strong>
                  {colorBolsa.nombre}
                </strong>

              </div>

              <div className="config-colors">

                {coloresBolsa.map(
                  (color) => (
                    <ColorSwatch
                      key={color.nombre}
                      color={color}
                      selected={
                        colorBolsa.nombre ===
                        color.nombre
                      }
                      onClick={() =>
                        setColorBolsa(color)
                      }
                    />
                  )
                )}

              </div>

            </div>

            {/* COLOR ESTAMPA */}

            <div className="config-option">

              <div className="config-option-heading">

                <div>
                  <span>03</span>

                  <h3>
                    Color de estampa
                  </h3>
                </div>

                <strong>
                  {colorEstampa.nombre}
                </strong>

              </div>

              <div className="config-colors">

                {coloresEstampa.map(
                  (color) => (
                    <ColorSwatch
                      key={color.nombre}
                      color={color}
                      selected={
                        colorEstampa.nombre ===
                        color.nombre
                      }
                      onClick={() =>
                        setColorEstampa(color)
                      }
                    />
                  )
                )}

              </div>

            </div>

            {/* CANTIDAD */}

            <div className="config-option">

              <div className="config-option-heading">

                <div>
                  <span>04</span>

                  <h3>
                    Cantidad
                  </h3>
                </div>

                <strong>
                  {cantidad} unidades
                </strong>

              </div>

              <div className="quantity-control">

                <button
                  type="button"
                  onClick={
                    disminuirCantidad
                  }
                  disabled={
                    cantidad ===
                    cantidadesPack[0]
                  }
                  aria-label="Disminuir cantidad"
                >
                  <FiMinus size={18} />
                </button>

                <strong>
                  {cantidad}
                </strong>

                <button
                  type="button"
                  onClick={
                    aumentarCantidad
                  }
                  disabled={
                    cantidad ===
                    cantidadesPack[
                      cantidadesPack.length - 1
                    ]
                  }
                  aria-label="Aumentar cantidad"
                >
                  <FiPlus size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="configurator-footer">

          <div className="configurator-total">

            <span>TOTAL DEL PACK</span>

            <strong>
              {formatearPrecio(precio)}
            </strong>

          </div>

          <button
            type="button"
            className="configurator-add"
            onClick={handleAddToCart}
          >
            <FiShoppingBag size={19} />

            Agregar al carrito
          </button>

        </div>

      </div>
    </div>
  )
}

export default ProductConfigurator