import React from 'react'
import {productos} from '../menu/data.js'
import { Card,Button} from 'react-bootstrap'



export default function Menu() {
  return (
    <>
    <div>
      <div className='menu-contenedor'>
        <div className='productos-contenedor'>
          {productos.map((producto, index)=>{
            return(
              <Card>
                <Card.Img variant='top' src={producto.img}/>
                <Card.Body>
                  <Card.Title>
                    {producto.descripcion}
                  </Card.Title>
                  <Button variant="primary">{producto.precio}</Button>
               </Card.Body>
              </Card>

            )
          })

          }

        </div>

      </div>
    </div>
    </>
  )
}
