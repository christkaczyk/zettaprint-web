import { useState } from 'react'
import {
  FiShoppingBag,
  FiMenu,
  FiX,
} from 'react-icons/fi'

function Navbar({
  carrito = [],
  onOpenCart,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const cantidadCarrito = carrito.length

  return (
    <>
      <header className="navbar">
        <div className="container-custom navbar-container">

          {/* LOGO */}

          <a
            href="#"
            className="navbar-logo"
            onClick={closeMenu}
          >
            ZETTA<span>PRINT</span>
          </a>

          {/* MENU */}

          <nav
            className={`navbar-menu ${
              menuOpen ? 'active' : ''
            }`}
          >
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>


            <a href="#productos" onClick={closeMenu}>
  Comprar
</a>

            <a
              href="#como-comprar"
              onClick={closeMenu}
            >
              Cómo comprar
            </a>

            <a
              href="#envios"
              onClick={closeMenu}
            >
              Envíos
            </a>

            <a
              href="#contacto"
              onClick={closeMenu}
            >
              Contacto
            </a>
          </nav>

          {/* ACCIONES */}

          <div className="navbar-actions">

            <button
              type="button"
              className="navbar-cart"
              onClick={onOpenCart}
              aria-label="Abrir carrito"
            >
              <FiShoppingBag size={21} />

              {cantidadCarrito > 0 && (
                <span>
                  {cantidadCarrito}
                </span>
              )}
            </button>

            <button
              type="button"
              className="navbar-toggle"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <FiX size={25} />
              ) : (
                <FiMenu size={25} />
              )}
            </button>

          </div>

        </div>
      </header>
    </>
  )
}

export default Navbar