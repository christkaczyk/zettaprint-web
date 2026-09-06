import { useState } from 'react'

import ColorSwatch from '../components/ColorSwatch'

import {
  coloresBolsa,
  coloresEstampa,
} from '../data/colores'

function ColorSelector({
  title,
  colors,
  selectedColor,
  onSelect,
}) {
  return (
    <div className="color-selector">

      <div className="color-selector-header">
        <div>
          <span>{title}</span>

          <strong>
            {selectedColor?.nombre || 'Elegí un color'}
          </strong>
        </div>
      </div>

      <div className="colors-grid">
        {colors.map((color) => (
          <ColorSwatch
            key={color.nombre}
            color={color}
            selected={
              selectedColor?.nombre === color.nombre
            }
            onClick={() => onSelect(color)}
          />
        ))}
      </div>

    </div>
  )
}

function Customization() {
  const [colorBolsa, setColorBolsa] = useState(
    coloresBolsa[0]
  )

  const [colorEstampa, setColorEstampa] = useState(
    coloresEstampa[1]
  )

  return (
    <section
  className="customization-section"
  id="comprar"
>
      <div className="container-custom">

        <div className="customization-layout">

          {/* INFORMACIÓN */}

          <div className="customization-content">

            <div className="section-heading">
              <span>COMPRÁ TUS BOLSAS PERSONALIZADAS</span>

              <h2>
                Tu marca.
                <br />
                <strong>Tus colores.</strong>
              </h2>

              <p>
                Elegí el color de la bolsa y combiná
                con el color de estampa que mejor
                represente a tu marca.
              </p>
            </div>

            <div className="customization-preview">
              <div
                className="preview-bag"
                style={{
                  '--bag-color': colorBolsa.hex,
                  '--print-color': colorEstampa.hex,
                }}
              >
                <div className="preview-handle" />

                <div className="preview-logo">
                  <span>AQUí TU</span>
                  <strong>LOGO</strong>
                </div>
              </div>
            </div>

          </div>

          {/* SELECTORES */}

          <div className="customization-options">

            <ColorSelector
              title="Color de bolsa"
              colors={coloresBolsa}
              selectedColor={colorBolsa}
              onSelect={setColorBolsa}
            />

            <ColorSelector
              title="Color de estampa"
              colors={coloresEstampa}
              selectedColor={colorEstampa}
              onSelect={setColorEstampa}
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Customization