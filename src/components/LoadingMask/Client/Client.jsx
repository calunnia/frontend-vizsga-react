import React from 'react'

function Client({data,key}) {
    return (
        <div>
            {data.map((client)=>(client.name))

            }
        </div>
    )
}

export default Client
