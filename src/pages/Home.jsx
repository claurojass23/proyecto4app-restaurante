import React from 'react'
import './home.css'
import img from '../imagenes/arepashome.jpg'


export default function Home() {
  return (
    <>
    <div className='contenedorFrase'>
    <img className='HomeImg' src={img}></img>
    <h2 className='h2'>Nuestro sazón venezolano, una experiencia para tu paladar.</h2>
    </div>
    
    
    </>
  )
}
