import React, { useState } from 'react'


const UseState = () => {

    const [ counter, setcounter ] = useState(0)

    return ( 
        <>
            <button onClick={()=>{ setcounter(counter+1) }}>{ counter }</button>
        </>
    )
}
 
export default UseState



