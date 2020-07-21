import React, { useState } from 'react'


const Tarefas = () => {


    const [ tarefas, setTarefas ] = useState([])    
    const [ input, setInput] = useState('')
    
    const addTarefa = () => {  
        setTarefas([ ...tarefas, input ])
        setInput('')
    }

    const addTarefa2 = e => {
      e.preventDefault() 

      setTarefas([ ...tarefas, input ])
      setInput('')
    }


    return ( 
      <>
            <div className="row justify-content-center">
              <div className="col-md-6 mx-auto m-3">                
                <table className="table table-hover table-striped table-dark m-0">
                  <tbody>
                    { 
                      tarefas.map( tarefa => (
                        <tr key={ tarefa }>
                          <td > { tarefa } </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>          
              </div>        
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 mx-auto">              
                <div className="row justify-content-center">

                    <form onSubmit={ addTarefa2 } >

                        <div className="row justify-content-center">
                          <input 
                            type="text" 
                            className="form-control"
                            autoFocus
                            required
                            value={ input } 
                            onChange={ e => setInput( e.target.value ) } 
                            placeholder="Digite o nome da tarefa..."
                          />
                        </div>

                        <div className="row justify-content-center mt-1">                          
                            <button 
                              type="submit"
                              className="btn btn-danger btn-block"
                            > AddTask2 </button>                          
                        </div>

                    </form>
                </div>          
                <br/><br/> 
              
                <div className="row justify-content-center">
                  <div className="col-md-6 mx-auto">
                    <button 
                      className="btn btn-primary
                      btn-block" 
                      onClick={ () => addTarefa() }
                    > AddTask </button>
                  </div>
                </div>

              </div>   
            </div>              
            <br/>            
      </>
     
    )
}
 
export default Tarefas