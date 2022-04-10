import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

function Contact({contact}) {

  const [conectado, setConectado] = useState(contact.conectado)
  const isConectado = (conectado) => {
    return conectado ? 'Contacto en línea' : 'Contacto No disponible'
  }

  return (
    <div>
        <p>nombre: {contact.nombre}</p>
        <p>apellido: {contact.apellido}</p>
        <p>email: {contact.email}</p>
        <p>conectado: {isConectado(conectado)}</p>
        <button onClick={() => setConectado(!conectado)}>{isConectado(!conectado)}</button>
    </div>
  )
}
Contact.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired
}

export default Contact
