import React from 'react'
import './reservaciones.css'
import { FormLabel, Form} from 'react-bootstrap'

function Reservaciones() {
  return (
    <>
    <h1>reserva</h1>
    <div className='contenedor'>
      <Form>
        <h1>Datos de la reserva</h1>
        <FormLabel>Nombre:</FormLabel>
        <input type='text' required name='nombre'></input>
        <FormLabel>Apellido:</FormLabel>
        <input type='text' required name='apellido'></input>
        <FormLabel>Email:</FormLabel>
        <input type='text' required name='email'></input>
        <FormLabel>Telefono:</FormLabel>
        <input type='text' required name='telefono'></input>
        <FormLabel>Fecha:</FormLabel>
        <input type='date' required name='nombre'></input>
        <FormLabel>Hora:</FormLabel>
        <input type='time' required name='nombre'></input>
      
      </Form>

    </div>
    </>
  )
}

export default  Reservaciones