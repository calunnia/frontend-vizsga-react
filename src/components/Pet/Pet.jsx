import React,{useState} from 'react'


function Pet({pet,i}) {

    console.log('pet=', pet);

    const [ vaccinated, setVaccinated] = useState(pet.isVaccinated)
    const [data, setData] =useState([])
    const [loading, setLoading] = useState(false)
    
    
    const startPost =(petname,vaccinated) => {

      
        setLoading(true)
        setData([])
        
        fetch(`/api/pets`,{
            method:"POST",
            body: JSON.stringify({name:petname ,isVaccinated:vaccinated })
            )
          .then((resopnse) => (resopnse.json()))
          .then((responseAdat) => { setData(responseAdat);
                                    setVaccinated(vaccinated);               
          })
          .catch(error=>{
                          console.log('error=',error );
                          setData(null)
          })
          .finally( () => {
                            console.log('fetch end');
                            setLoading(false)
          })
        
        }
    
    return (
        <div className="Pet">
           { pet.name } / {pet.animal}
           <button onClick={()=>(startPost(pet.name, !vaccinated))}>
            {

                vaccinated
                            ? 'Vaccinated'
                            : ' Not Vaccinated'
            }   
               
     
              
               </button>
        </div>
    )
}

export default Pet
