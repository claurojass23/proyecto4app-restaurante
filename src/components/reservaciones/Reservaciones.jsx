import React, { useState } from 'react'
import db from '../../config/dbFirebase'
import './reservaciones.css'
import { FormLabel, Form} from 'react-bootstrap'

function Reservaciones() {

 //guardar lista de reservas
 const [reservas,setReservas] = useState([])
 // valores del formulario
 const[formData, setFormData] = useState({
  
 })

  return (
    <>
    
    <div className='contenedor'>
     <h1>RESERVACIONES</h1>
      <Form className='form-reserva'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type='string' placeholder='Escribe tu nombre y apellido' name='Nombre'/>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='phone' placeholder='Escribe tu telefono' name='Telefono'/>
        <Form.Label>Fecha de Reservacion</Form.Label>
        <Form.Control type='date' name='Fecha'/>
        <Form.Label>Hora de la reservacion</Form.Label>
        <Form.Control type='time'  name='Hora'/>
        <Form.Label>Comensales</Form.Label>
        <Form.Control type='string' placeholder='Escribe el numero de personas' name='Conmensales'/>
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type='email' placeholder='Escribe tu Email' name='Email'/>

        <Form.Text className='text-muted'>
         Tu informacion es privada y no sera compartida o reutilizada
        </Form.Text>
        <button type="button" class="btn btn-light">Guardar</button>
        </Form.Group>
        
      
      </Form>

    </div>
    </>
  )
}

export default  Reservaciones