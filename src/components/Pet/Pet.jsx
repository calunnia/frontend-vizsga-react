import React from 'react'

function Pet({pet,i}) {

    console.log('pet=', pet);

    const [ vaccinated, setVa]

    return (
        <div className="Pet">
           { pet.name } / {pet.animal}
           <button onClick={()=>(setVaccinated(!vaccinated))}>Vaccinated</button>
        </div>
    )
}

export default Pet
