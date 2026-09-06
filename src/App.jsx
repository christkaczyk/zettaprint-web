import { useEffect, useState } from 'react'
import {
  modelosRinon,
  modelosAsas,
} from './data/productos'


import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Cart from './components/Cart'
import Benefits from './sections/Benefits'
import Customization from './sections/Customization'
import Catalog from './sections/Catalog'
import HowToBuy from './sections/HowToBuy'
import Shipping from './sections/Shipping'
import ProductConfigurator from './components/ProductConfigurator'



function App() {
  const [productoSeleccionado, setProductoSeleccionado] =
    useState(null)

  const [carrito, setCarrito] = useState(() => {
  try {
    const carritoGuardado = localStorage.getItem(
      'zettaprint-carrito'
    )

    return carritoGuardado
      ? JSON.parse(carritoGuardado)
      : []
  } catch {
    return []
  }
})

  const [carritoAbierto, setCarritoAbierto] = useState(false)

  useEffect(() => {
  localStorage.setItem(
    'zettaprint-carrito',
    JSON.stringify(carrito)
  )
}, [carrito])

  const abrirConfigurador = (producto) => {
    setProductoSeleccionado(producto)
  }

  const cerrarConfigurador = () => {
    setProductoSeleccionado(null)
  }

  const agregarAlCarrito = (producto) => {
  setCarrito((carritoActual) => [
    ...carritoActual,
    producto,
  ])
}

const obtenerProducto = (item) => {
  const modelos = item.tipo === 'riñón'
    ? modelosRinon
    : modelosAsas

  return modelos.find(
    (producto) => producto.id === item.productoId
  )
}

const aumentarCantidad = (id) => {
  setCarrito((carritoActual) =>
    carritoActual.map((item) => {
      if (item.id !== id) return item

      const producto = obtenerProducto(item)

      if (!producto) return item

      const cantidades = [50, 100, 200, 300, 400, 500]
      const indice = cantidades.indexOf(item.cantidad)

      if (
        indice === -1 ||
        indice >= cantidades.length - 1
      ) {
        return item
      }

      const nuevaCantidad = cantidades[indice + 1]

      return {
        ...item,
        cantidad: nuevaCantidad,
        precio: producto.precios[nuevaCantidad],
      }
    })
  )
}

const disminuirCantidad = (id) => {
  setCarrito((carritoActual) =>
    carritoActual.map((item) => {
      if (item.id !== id) return item

      const producto = obtenerProducto(item)

      if (!producto) return item

      const cantidades = [50, 100, 200, 300, 400, 500]
      const indice = cantidades.indexOf(item.cantidad)

      if (indice <= 0) {
        return item
      }

      const nuevaCantidad = cantidades[indice - 1]

      return {
        ...item,
        cantidad: nuevaCantidad,
        precio: producto.precios[nuevaCantidad],
      }
    })
  )
}

const vaciarCarrito = () => {
  setCarrito([])
}

  return (
    <>
      <Navbar
  carrito={carrito}
  onOpenCart={() => setCarritoAbierto(true)}
/>

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section
          className="hero"
          id="inicio"
        >
          <div className="container-custom hero-content">

            <span className="hero-eyebrow">
              BOLSAS DE FRISELINA PERSONALIZADAS
            </span>

            <h1>
  <span className="hero-brand-title">TU MARCA</span>
  <br />
  <span>EN CADA DETALLE</span>
</h1>

            <p>
              Bolsas resistentes, reutilizables y
              personalizadas para que tu marca llegue
              más lejos.
            </p>

            <div className="hero-buttons">

              <a
                href="#productos"
                className="btn-primary"
              >
                Pedí tu presupuesto
              </a>

            

            </div>

          </div>
        </section>
        

        {/* =========================
            BENEFICIOS
        ========================= */}

        <Benefits />
        

        {/* =========================
            CATÁLOGO
        ========================= */}

        <Catalog
          onSelectProduct={abrirConfigurador}
        />

        {/* =========================
            CÓMO COMPRAR
        ========================= */}
        <HowToBuy />

        {/* =========================
            ENVÍOS
        ========================= */}
        <Shipping />

        {/* =========================
            CONTACTO
        ========================= */}
        <Contact />

        {/* =========================
            FOOTER
        ========================= */}
        <Footer />

      </main>

      <Cart
  carrito={carrito}
  abierto={carritoAbierto}
  onClose={() => setCarritoAbierto(false)}
  onRemove={(id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((item) => item.id !== id)
    )
  }}
  onIncrease={aumentarCantidad}
  onDecrease={disminuirCantidad}
  onClear={vaciarCarrito}
/>

      {/* =========================
          CONFIGURADOR
      ========================= */}

      <ProductConfigurator
        producto={productoSeleccionado}
        onClose={cerrarConfigurador}
        onAddToCart={agregarAlCarrito}
      />
    </>
  )
}

export default App