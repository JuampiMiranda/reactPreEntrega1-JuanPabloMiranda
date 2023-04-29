import { useState } from "react"


const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false);

    const manejadorMensaje = () => {
        setMensaje(!mensaje);
        //Recuerden que ! invierte el valor de la variable booleana. 
    } 

  return (
    <div>
        <button onClick={manejadorMensaje}> {mensaje ? "Ocultar" : "Mostrar"} </button>
        {mensaje && <h2>"Este es un espacio comercial destinado a profesionales de la salud de la Kinesiologia y la Fisioterapia"</h2>}
    </div>
  )
}

export default Mensaje
