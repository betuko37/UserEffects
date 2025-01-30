import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {

   //uso del useState
   const [enabled, setEnabled] = useState(false)
   const [position, setPosition] = useState({ x: 0, y: 0 })
 
   //uso del useEffect
   useEffect(() => {
     console.log('efecto.....', { enabled })
 
     const handleMove = (event) => {
       //obtener las posiciones del cursor
       const { clientX, clientY } = event
       
       //setear las posiciones X y Y 
       setPosition({x: clientX, y: clientY})
     }
 
     //suscripcion al evento de seguir cursor
     if (enabled) {
       window.addEventListener('pointermove', handleMove)
     }
 
     //cuando el componente se desmonta o cambia las dependencias hace un cleanup
     return () => {
       window.removeEventListener('pointermove', handleMove)
     }
 
   }, [enabled])

  return (
    <>
    <div style={
      {
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: '-20px',
        top: '-20px',
        width: '40px',
        height: '40px',
        transform: `translate(${position.x}px, ${position.y}px)`
      }
    } />
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} Seguir el Puntero
    </button>
    </>
  )
}

function App() {
  
  return (
    <main>
      <FollowMouse></FollowMouse>
    </main>
  )

}

export default App
