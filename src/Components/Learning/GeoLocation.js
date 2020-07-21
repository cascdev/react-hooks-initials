import React, { useEffect, useState } from 'react'


const GeoLocation = () => {
    
    const [ location, setLocation ] = useState({})

    useEffect( () => {    
         navigator.geolocation.watchPosition(handlePositionReceiveid)
    }, [ ] )

    function handlePositionReceiveid({coords}){

        const { latitude, longitude } = coords
        setLocation({ latitude, longitude })
    }


    return (
        <ul>
            <li>Latitude:{ location.latitude } | longitude: { location.longitude }</li>
        </ul>  
    )
}
 
export default GeoLocation