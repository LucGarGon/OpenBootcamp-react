import React from 'react'
import { Contacto } from '../../models/contacto.class'
import Contact from '../pure/contact'

function ContactList() {
    const contact = new Contacto('Alex', 'Martínez', 'mar@gm.es', false)

    return (
    <Contact
    contact={contact}></Contact>
  )
}


export default ContactList
