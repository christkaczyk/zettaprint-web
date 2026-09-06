const Contact = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">

        <div className="contact-info">
          <span className="section-tag">CONTACTO</span>

          <h2>
            ¿Tenés un proyecto
            <span> en mente?</span>
          </h2>

          <p>
            Escribinos y contanos qué necesitás.
            Te ayudamos a elegir el modelo, tamaño,
            colores y cantidad ideal para tu pedido.
          </p>

          <div className="contact-links">

            <a
              href="https://wa.me/5491126902249"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">W</div>
              <div>
                <strong>WhatsApp</strong>
                <span>11 2690-2249</span>
              </div>
            </a>

            <a
              href="mailto:zettarestampas@gmail.com"
              className="contact-link"
            >
              <div className="contact-icon">@</div>
              <div>
                <strong>Email</strong>
                <span>zettarestampas@gmail.com</span>
              </div>
            </a>

            <a
              href="https://instagram.com/zettaprint"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">IG</div>
              <div>
                <strong>Instagram</strong>
                <span>@zettaprint</span>
              </div>
            </a>

          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-logo">
            ZETTA<span>PRINT</span>
          </div>

          <h3>
            Bolsas que llevan
            <br />
            tu marca.
          </h3>

          <p>
            Friselina personalizada para marcas,
            emprendimientos y negocios.
          </p>

          <a
            href="https://wa.me/5491126902249"
            target="_blank"
            rel="noreferrer"
            className="contact-main-button"
          >
            HABLAR POR WHATSAPP
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact