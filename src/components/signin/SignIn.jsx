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
       <h5>restaurante_naguaraVnzl</h5>
      </div>
      <div  className='redes'>
       <img className='icon' src={insta}></img>
       <h5>restaurante_naguaraVnzl</h5>
      </div>
      <div  className='redes'>
       <img className='icon' src={twitter}></img>
       <h5>naguaraVnzl</h5>
      </div>
      <div  className='redes'>
       <img className='icon' src={lin}></img>
       <h5>Restaurante Naguara </h5>
      </div>
      <div  className='redes'>
       <img className='icon' src={github}></img>
       <h5>naguara_Vnzl</h5>
      </div>
      <div  className='redes'>
       <img className='icon' src={telefono}></img>
       <h5>+57 3136004567  3042037218</h5>
      </div>
      <div  className='redes'>
       <img className='icon' src={ubicacion}></img>
       <h5>Carrera 43F #11-30, Antioquia</h5>
      </div>

     </div>
    </>
  )
}
