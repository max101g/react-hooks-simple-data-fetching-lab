// create your App component here
import React, { useState, useEffect } from "react";


function App () {
    const [displayDog, setDisplayDog] = useState (null)

    useEffect (()=> {
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then ((response)=> response.json ())
            .then ((data)=> setDisplayDog(data.message))
    }, [])

    if (!displayDog) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img 
                src={displayDog}
                alt="A Random Dog"
            />
        </div>
    )
}

export default App