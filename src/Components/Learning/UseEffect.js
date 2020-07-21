import React, { useEffect } from 'react'

// useEffect() -> Implementa os ciclos de vida de um componente

const UseEffect = () => {

    useEffect( () => {
        
        console.log("useEffect componete iniciado - OK!")

        return _=> console.log("useEffect desmontado!")
    })


    return (     
        <>
            <h1>Inicializado com sucesso</h1>
            <h2>Aperte o botão para OCULTAR!</h2>
        </>  
    )
}
 
export default UseEffect