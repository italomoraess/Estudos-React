import { useState } from "react"

export const Loading = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ border: 'none', borderRadius: show ? '10%' : '50%' }}
      >{show ? 'Ocultar' : 'Mostrar'}</button>
      {show &&
        <div>Eu sou Italo</div>
      }
    </div>
  )
}