import './App.css'
import React, {useState} from 'react'
import LoadingMask from './components/LoadingMask/LoadinMask.jsx'

const App = () => {

const [data, setData] =useState([])
const [search,setSearch] = useState("")
const [loading, setLoading] = useState(false)


const startFetch =() => {
 setLoading(true)
 setData([])
 
  
    setLoading(true)
    setData([])
    
    fetch(`/api/clients?search=${search}`)
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

      {
        loading ? <LoadingMask/>
                : data === null
                                ? <p>Upps Something happend</p>
                                : data.map((client, i )=>( <Client data={client} key={i.toString() + "-client"}/> ))

      }

    </div>
  )
}

export default App
