const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            ZETTA<span>PRINT</span>
          </div>

          <p>
            Bolsas de friselina personalizadas
            para potenciar tu marca.
          </p>
        </div>

        <div className="footer-links">
          <h4>NAVEGACIÓN</h4>

          <a href="#inicio">Inicio</a>
          <a href="#modelos">Modelos</a>
          <a href="#personalizacion">Personalización</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#como-comprar">Cómo comprar</a>
          <a href="#envios">Envíos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-social">
          <h4>SEGUINOS</h4>

          <a
            href="https://instagram.com/zettaprint"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://facebook.com/zettaprint"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://wa.me/5491126902249"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ZettaPrint</span>
        <span>Bolsas personalizadas en Argentina</span>
      </div>

    </footer>
  )
}

export default Footer