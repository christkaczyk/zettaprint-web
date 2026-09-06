import { useState } from 'react'
import {
  FiX,
  FiTrash2,
  FiShoppingBag,
  FiMinus,
  FiPlus,
} from 'react-icons/fi'


function Cart({
  carrito,
  abierto,
  onClose,
  onRemove,
  onIncrease,
  onDecrease,
  onClear,
}) {

  const [confirmacionAbierta, setConfirmacionAbierta] =
  useState(false)

  const total = carrito.reduce(
    (acumulado, item) => acumulado + item.precio,
    0
  )

  const formatearPrecio = (precio) => {
    return `$ ${precio.toLocaleString('es-AR')}`
  }

  const comprarPorWhatsApp = () => {
    if (carrito.length === 0) return

    const sena = total / 2
const restante = total / 2

let mensaje = `Hola! Quiero realizar el siguiente pedido:\n\n`

carrito.forEach((item, index) => {
  mensaje += `*${index + 1}. Bolsa ${item.nombre}*\n`
  mensaje += `• Modelo: ${item.tipo === 'riñón' ? 'Riñón' : 'Con asas'}\n`
  mensaje += `• Cantidad: ${item.cantidad} unidades\n`
  mensaje += `• Color de bolsa: ${item.colorBolsa.nombre}\n`
  mensaje += `• Color de estampa: ${item.colorEstampa.nombre}\n`
  mensaje += `• Precio: ${formatearPrecio(item.precio)}\n\n`
})

mensaje += `━━━━━━━━━━━━━━━━━━\n`
mensaje += `*TOTAL DEL PEDIDO: ${formatearPrecio(total)}*\n`
mensaje += `*SEÑA 50%: ${formatearPrecio(sena)}*\n`
mensaje += `*SALDO RESTANTE 50%: ${formatearPrecio(restante)}*`

    const telefono = '5491126902249'

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
      mensaje
    )}`

    window.open(url, '_blank')
  }

  return (
    <>
      {abierto && (
        <div
          className="cart-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
        />
      )}

      <aside className={`cart-drawer ${abierto ? 'active' : ''}`}>
        <div className="cart-header">
          <div>
            <span>CARRITO</span>
            <h2>Tu pedido</h2>
          </div>

          <div className="cart-header-actions">

  {carrito.length > 0 && (
    <button
      type="button"
      className="cart-clear"
      onClick={onClear}
    >
      Vaciar
    </button>
  )}

  <button
    type="button"
    className="cart-close"
    onClick={onClose}
    aria-label="Cerrar carrito"
  >
    <FiX size={22} />
  </button>

</div>
        </div>

        <div className="cart-content">
          {carrito.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">
                <FiShoppingBag size={28} />
              </div>

              <h3>Tu carrito está vacío</h3>

              <p>
                Elegí un modelo, personalizalo y agregalo
                a tu pedido.
              </p>
            </div>
          ) : (
            <div className="cart-items">
              {carrito.map((item) => (
                <article
                  className="cart-item"
                  key={item.id}
                >
                  <div className="cart-item-top">
                    <div>
                      <span className="cart-item-type">
                        {item.tipo === 'riñón'
                          ? 'RIÑÓN'
                          : 'CON ASAS'}
                      </span>

                      <h3>
                        Bolsa {item.nombre}
                      </h3>
                    </div>

                    <button
                      type="button"
                      className="cart-item-remove"
                      onClick={() =>
                        onRemove(item.id)
                      }
                      aria-label="Eliminar producto"
                    >
                      <FiTrash2 size={17} />
                    </button>
                  </div>

                  <div className="cart-item-details">
                    <div className="cart-item-quantity">
  <span>Cantidad</span>

  <div className="cart-quantity-control">

    <button
      type="button"
      onClick={() => onDecrease(item.id)}
      disabled={item.cantidad === 50}
      aria-label="Disminuir cantidad"
    >
      <FiMinus size={15} />
    </button>

    <strong>
      {item.cantidad}
    </strong>

    <button
      type="button"
      onClick={() => onIncrease(item.id)}
      disabled={item.cantidad === 500}
      aria-label="Aumentar cantidad"
    >
      <FiPlus size={15} />
    </button>

  </div>
</div>

                    <div>
                      <span>Bolsa</span>
                      <strong>
                        {item.colorBolsa.nombre}
                      </strong>
                    </div>

                    <div>
                      <span>Estampa</span>
                      <strong>
                        {item.colorEstampa.nombre}
                      </strong>
                    </div>
                  </div>

                  <div className="cart-item-bottom">
                    <strong>
                      {formatearPrecio(item.precio)}
                    </strong>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {carrito.length > 0 && (
  <div className="cart-footer">

    <div className="cart-summary">

      <div className="cart-summary-row cart-summary-total">
        <span>TOTAL DEL PEDIDO</span>

        <strong>
          {formatearPrecio(total)}
        </strong>
      </div>

      <div className="cart-summary-row">
        <span>SEÑA 50%</span>

        <strong>
          {formatearPrecio(total / 2)}
        </strong>
      </div>

      <div className="cart-summary-row">
        <span>SALDO RESTANTE 50%</span>

        <strong>
          {formatearPrecio(total / 2)}
        </strong>
      </div>

      <div className="cart-summary-note">
        La seña del 50% se abona para confirmar el pedido.
      </div>

    </div>

    <button
  type="button"
  className="cart-whatsapp"
  onClick={() => setConfirmacionAbierta(true)}
>
  <FiShoppingBag size={19} />
  Comprar por WhatsApp
</button>

  </div>
)}
      </aside>

      {confirmacionAbierta && (
  <div
    className="cart-confirm-overlay"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        setConfirmacionAbierta(false)
      }
    }}
  >
    <div className="cart-confirm">

      <button
        type="button"
        className="cart-confirm-close"
        onClick={() => setConfirmacionAbierta(false)}
        aria-label="Cerrar confirmación"
      >
        <FiX size={19} />
      </button>

      <div className="cart-confirm-icon">
        <FiShoppingBag size={25} />
      </div>

      <span className="cart-confirm-tag">
        CONFIRMAR PEDIDO
      </span>

      <h3>
        ¿Confirmás tu pedido?
      </h3>

      <p>
        Revisá los importes antes de enviarlo
        por WhatsApp.
      </p>

      <div className="cart-confirm-summary">

  <div className="cart-confirm-products">

    {carrito.map((item) => (
      <div
        className="cart-confirm-product"
        key={item.id}
      >

        <div className="cart-confirm-product-info">

          <span className="cart-confirm-product-type">
            {item.tipo === 'riñón'
              ? 'RIÑÓN'
              : 'CON ASAS'}
          </span>

          <strong>
            Bolsa {item.nombre}
          </strong>

          <div className="cart-confirm-product-details">

  <span>
    {item.cantidad} unidades
  </span>

  <div className="cart-confirm-color">
    <span
      className="cart-confirm-color-dot"
      style={{
        backgroundColor: item.colorBolsa.hex,
      }}
    />

    <span>
      Bolsa: {item.colorBolsa.nombre}
    </span>

  </div>

  <div className="cart-confirm-color">
    <span
      className="cart-confirm-color-dot"
      style={{
        backgroundColor: item.colorEstampa.hex,
      }}
    />

    <span>
      Estampa: {item.colorEstampa.nombre}
    </span>

    
  </div>

</div>

        </div>

        <strong className="cart-confirm-product-price">
          {formatearPrecio(item.precio)}
        </strong>

      </div>
    ))}

  </div>


  <div className="cart-confirm-payment">

    <div className="cart-confirm-payment-row cart-confirm-payment-total">
      <span>TOTAL DEL PEDIDO</span>

      <strong>
        {formatearPrecio(total)}
      </strong>
    </div>

    <div className="cart-confirm-payment-row">
      <span>SEÑA 50%</span>

      <strong className="cart-confirm-sena">
        {formatearPrecio(total / 2)}
      </strong>
    </div>

    <div className="cart-confirm-payment-row">
      <span>SALDO RESTANTE 50%</span>

      <strong>
        {formatearPrecio(total / 2)}
      </strong>
    </div>

  </div>

</div>

      <div className="cart-confirm-actions">

        <button
          type="button"
          className="cart-confirm-cancel"
          onClick={() => setConfirmacionAbierta(false)}
        >
          Cancelar
        </button>

        <button
          type="button"
          className="cart-confirm-send"
          onClick={() => {
            setConfirmacionAbierta(false)
            comprarPorWhatsApp()
          }}
        >
          <FiShoppingBag size={17} />
          Enviar pedido
        </button>

      </div>

    </div>
  </div>
)}

    </>
  )
}

export default Cart