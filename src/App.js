import './App.css'
import React, {useState} from 'react'

const App = () => {

const [data, setData] =useState([])
const [serach,setSearch] = useState("")
const [loading, setLoading] = useState(false)


const startFetch =() => {
 setLoading(true)
 setData([])
 
  
    setLoading(true)
    setData([])
    
    fetch(`/api/clinets?search=${search}`)
      .then((resopnse) => (resopnse.json()))
      .then((responseAdat)=>(setData(responseAdat)))
      .catch(error=>{
                      console.log('error=',error );
                      setData(null)
      })
      .finally( () => {
                        console.log('fetch end');
                        setLoading(false)
      })
    
    
    
    console.log('data', data);



}


  return (
    <div className="App">
      <h1>Clients</h1>
      <input type="text" onChange={(ev)=>(setSearch(ev.target.value))}/>
      <button onClick={()=>(startFetch())}>Search</button>

      
    </div>
  )
}

export default App
