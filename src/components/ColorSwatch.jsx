function ColorSwatch({
  color,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`color-swatch ${
        selected ? 'selected' : ''
      }`}
      onClick={onClick}
      title={color.nombre}
      aria-label={`Seleccionar ${color.nombre}`}
    >
      <span
        className="color-swatch-circle"
        style={{
          backgroundColor: color.hex,
        }}
      />
    </button>
  )
}

export default ColorSwatch