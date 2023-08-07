import React from 'react'
import './reservaciones.css'
import { FormLabel, Form} from 'react-bootstrap'

function Reservaciones() {
  return (
    <>
    <h1>reserva</h1>
    <div className='contenedor'>
      <Form>
        <Form.Group>
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type='string' placeholder='Escribe tu nombre y apellido'/>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='phone' placeholder='Escribe tu telefono'/>
        <Form.Label>Fecha:</Form.Label>
        <input type='date' required name='nombre'></input>
        <Form.Label>Hora:</Form.Label>
        <input type='time' required name='nombre'></input>
        <Form.Label>Email:</Form.Label>
        <input type='text' required name='email'></input>
      
        </Form.Group>
        
      
      </Form>

    </div>
    </>
  )
}

export default  Reservaciones