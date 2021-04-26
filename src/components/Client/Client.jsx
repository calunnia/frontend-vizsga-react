import React from 'react'
import Pet from '../Pet/Pet.jsx'

function Client({data,key}) {
    console.log("Client=", data );
    return (
        <div className="Client">
            { data.name}

             { data.pets.map( (pet, i) => (<Pet pet= {pet} key={i.toString() +'-pets'} />) )}
        </div>
    )
}

export default Client
