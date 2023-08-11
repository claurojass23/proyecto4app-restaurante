import React from 'react'
import './sobrenosotros.css'
import chef from '../../imagenes/chef.jpg'

export default function SobreNosotros() {
  return (
    <>

   <h1 className='h1'>La pasión servida en cada plato</h1>
   <div className='diaNosotros'>
    <div className='parrafos'>
    <p>Sabores auténticos de Venezuela en pleno corazón de Colombia. Ubicados en el vibrante escenario de Medellín, nuestro restaurante te invita a un viaje culinario a través de las delicias venezolanas.</p>
    <p>Nuestro equipo de chefs, expertos en la riqueza culinaria de Venezuela, han creado una amplia gama de platillos que transportarán tus sentidos a las costas caribeñas, las sabanas andinas y las tradiciones de nuestra tierra natal. Cada bocado es una muestra de nuestra dedicación para que tu experiencia gastronómica sea un recuerdo imborrable.</p>
    <p>Ven al Restaurante Naguara, donde la pasión por la comida se mezcla con el encanto colombiano para brindarte una experiencia única, llena de sabor, alegría y la calidez que nos caracteriza. ¡Estamos emocionados de recibirte y compartir contigo el amor por la comida venezolana en este rincón de Colombia!"</p>
    </div>
    <img className='imgN' src={chef}></img>
   </div>
    
    
    
    </>
  )
}
