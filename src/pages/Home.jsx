import React from 'react'
import './home.css'
import img from '../imagenes/arepashome.jpg'
import bonos from '../imagenes/bonos.jpg'



export default function Home() {
  return (
    <>
    <div className='contenedorFrase'>
    <img className='HomeImg' src={img}></img>
    <h2 className='h2'>Nuestro sazón venezolano, una experiencia para tu paladar.</h2>
    </div>
    <div className='divDomicilio'>
      <a className='domicilio'>PIDE TU DOMICILIO AQUÍ</a>
    </div>
    <div className='principaldiv'>
    <div className='centrar'>
       <h1>Bonos de Regalos</h1>
        <h6>ALIANZAS EXCLUSIVAS</h6>
       <div className='verMas'>
         <a>VER MÁS</a>
       </div>
     </div>
    <div className='conteinerBonos'>
     <img className='imgBonos' src={bonos}></img>
    </div>
    </div>

    <div>
     <ul className='ullis'>
        <li className='lista'>Escribenos</li>
        <li className='lista'>Preguntas Frecuentes</li>
        <li className='lista'>Trabaja con Nosotros</li>
        <li className='lista'>Conectados</li>
     </ul>
   </div>
    
    </>
  )
}
