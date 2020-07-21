import React, { useState, useEffect  } from 'react'

/*              handleFavorite(id){}
Nesta função, Ao clicar no botão Favoritar, capturamos o id do objeto daquele elemento
A ideia é criar uma nova lista de repos com base na nossa lista "repositories" e atualizá-la.
Para isso, adcionamos uma propriedade "favorite" ao objeto corrente. 

Ao compararmos o id de cada elemento(repo) com o capturado pela nossa função,
teremos que avaliar Assim, quando ele encontra o repo pelo id passado adciona favorite:true, 
caso contrário (o id seja diferente) apenas retorna o repo.
*/

const ReposGithub = () => {

     
  const [ repositories, setRepositories ] = useState([])
  
  useEffect( async () => {    
    const response = await fetch('https://api.github.com/users/cascdev/repos')
    const data = await response.json()
    setRepositories(data)    
  }, [] )


  function handleFavorite( id ){

    const newRepositories = repositories.map( repo => {
    return repo.id === id ? { ...repo, favorite: !repo.favorite  } : repo
    })
    setRepositories( newRepositories )
  }


  
  useEffect( () => {

    const filtered = repositories.filter( repo => repo.favorite )
    document.title = `Você têm ${filtered.length} Favoritos `

  }, [ repositories  ] )


    return (        
                        
      <ul>
          {
            repositories.map( repo => 
              < li key={repo.id}>
                { repo.name }
                { repo.favorite && <span>   |Favoritado |  </span> }

                <button onClick={ () => handleFavorite(repo.id)}>
                 Favoritar 
                </button>         
              </li>)
          }
      </ul>            
  )
}
 
export default ReposGithub