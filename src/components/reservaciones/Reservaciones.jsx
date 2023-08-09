import React, { useState } from 'react'
import db from '../../config/dbFirebase'
import './reservaciones.css'
import { FormLabel, Form} from 'react-bootstrap'

function Reservaciones() {

 //guardar lista de reservas
 const [reservas,setReservas] = useState([])
 // valores del formulario
 const[formData, setFormData] = useState({
  nombre:'',
  telefono:'',
  fecha:'',
  hora:'',
  comensales:'',
  email:''

  
 })

 const onSave =(event) =>{
   event.preventDefault ();
   console.log(formData)

 }

 const onChange = (e) =>{
    setFormData({
      ...formData,[e.target.name] : e.target.value
    })

    console.log(formData)
 }

  return (
    <>
    
    <div className='contenedor'>
     <h1>RESERVACIONES</h1>
      <Form  onSubmit={onSave} className='form-reserva'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type='string' value={formData.nombre}  onChange={onChange} placeholder='Escribe tu nombre y apellido' name='Nombre'/>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='phone' value={formData.telefono} onChange={onChange} placeholder='Escribe tu telefono' name='Telefono'/>
        <Form.Label>Fecha de Reservacion</Form.Label>
        <Form.Control type='date' value={formData.fecha} onChange={onChange} name='Fecha'/>
        <Form.Label>Hora de la reservacion</Form.Label>
        <Form.Control type='time' value={formData.hora} onChange={onChange} name='Hora'/>
        <Form.Label>Comensales</Form.Label>
        <Form.Control type='string'  value={formData.comensales} onChange={onChange} placeholder='Escribe el numero de personas' name='Conmensales'/>
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type='email'  value={formData.email} onChange={onChange} placeholder='Escribe tu Email' name='Email'/>

        <Form.Text className='text-muted'>
         Tu informacion es privada y no sera compartida o reutilizada
        </Form.Text>
        
        </Form.Group>
        <button type="button" class="btn btn-light">Guardar</button>
      
      </Form>

    </div>
    </>
  )
}

export default  Reservaciones