import React, { useEffect, useState } from 'react'
import db from '../../config/dbFirebase'
import './reservaciones.css'
import { addDoc, collection, onSnapshot } from "firebase/firestore"; 
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
   addDoc(collection(db,'reservaciones'),formData)
   alert('se guardo con exito')
 } 

 const onChange = (e) =>{
    setFormData({
      ...formData,[e.target.name] : e.target.value
    })

    console.log(formData)
 }

 const getReservas = async()=>{
  onSnapshot(collection(db,'reservaciones'), (snapshot)=>{
    const litas =[];
    snapshot.forEach(doc => litas.push({...doc.data(), id: doc.id}))
    setReservas(litas)
  })
   
 }

 useEffect(()=>{
 getReservas()
 },[])

  return (
    <>
    
    <div className='contenedor'>
     <h1>RESERVACIONES</h1>
      <Form  onSubmit={onSave} className='form-reserva'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type='string' value={formData.nombre}  onChange={onChange} placeholder='Escribe tu nombre y apellido' name='nombre'/>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='phone' value={formData.telefono} onChange={onChange} placeholder='Escribe tu telefono' name='telefono'/>
        <Form.Label>Fecha de Reservacion</Form.Label>
        <Form.Control type='date' value={formData.fecha} onChange={onChange} name='fecha'/>
        <Form.Label>Hora de la reservacion</Form.Label>
        <Form.Control type='time' value={formData.hora} onChange={onChange} name='hora'/>
        <Form.Label>Comensales</Form.Label>
        <Form.Control type='string'  value={formData.comensales} onChange={onChange} placeholder='Escribe el numero de personas' name='comensales'/>
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type='email'  value={formData.email} onChange={onChange} placeholder='Escribe tu Email' name='email'/>

        <Form.Text className='text-muted'>
         Tu informacion es privada y no sera compartida o reutilizada
        </Form.Text>
        
        </Form.Group>
        <button type="submit" class="btn btn-light">Guardar</button>
      
      </Form>

    </div>
    <div className='tabladatos'>
      <table>
        <thead>
          <th className='th'>Nombre</th>
          <th className='th'>Fecha</th>
          <th className='th'>Hora</th>
          <th className='th'>Comensales</th>
        </thead>
        <tbody>
          {
            reservas.map(reservas=>{
              return(
                <tr>
                 <td className='td'>{reservas.nombre}</td>
                 <td className='td'>{reservas.fecha}</td>
                 <td className='td'>{reservas.hora}</td>
                 <td className='td' >{reservas.comensales}</td>
                </tr>
              )
                
              
            })
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default  Reservaciones