import React from 'react'
import '../signin/sigin.css'
import face from '../../iconos/facebook.png'
import insta from '../../iconos/logotipo-de-instagram (1).png'
import twitter from '../../iconos/signo-de-twitter.png'
import lin from '../../iconos/logotipo-de-linkedin.png'
import github from '../../iconos/signo-de-github.png'
import telefono from '../../iconos/telefono.png'
import ubicacion from '../../iconos/mapas-y-banderas.png' 


export default function SignIn() {
  return (
    <>
    <div className='iconC'>
      <div className='redes'>
       <img className='icon' src={face}></img>
       <h3>restaurante_naguaraVnzl</h3>
      </div>
      <div  className='redes'>
       <img className='icon' src={insta}></img>
       <h3>restaurante_naguaraVnzl</h3>
      </div>
      <div  className='redes'>
       <img className='icon' src={twitter}></img>
       <h3>naguaraVnzl</h3>
      </div>
      <div  className='redes'>
       <img className='icon' src={lin}></img>
       <h3>Restaurante Naguara </h3>
      </div>
      <div  className='redes'>
       <img className='icon' src={github}></img>
       <h3>naguara_Vnzl</h3>
      </div>
      <div  className='redes'>
       <img className='icon' src={telefono}></img>
       <h3>+57 3136004567  3042037218</h3>
      </div>
      <div  className='redes'>
       <img className='icon' src={ubicacion}></img>
       <h3>Carrera 43F #11-30, Antioquia</h3>
      </div>

     </div>
    </>
  )
}
