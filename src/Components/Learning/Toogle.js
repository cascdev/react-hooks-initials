import React, { useState } from 'react'

import UseEffect from './UseEffect'

const Toggle = () => {

    let [ estado, setEstado ] = useState({ show: true })
    
    let toggle = () => setEstado(  { ...estado, show: !estado.show } )

    return ( 

        <>
          <div className="row justify-content-center">
            <div className="col-md-6 mx-auto">            

              <button 
                type="button" 
                className="btn btn-success"
                onClick={ () => toggle() }
                > Mostrar/Ocultar 
              </button>

              { estado.show 
                ? <UseEffect/> 
                : ( <h4>Aperte o botão para mostrar!</h4>) 
              }
               
            </div>
          </div>
        </>

     )
}
 
export default Toggle