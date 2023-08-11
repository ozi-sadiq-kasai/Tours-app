import { useState,useEffect } from 'react'
import Loading from './components/Loading'

const url = 'https://course-api.com/react-tours-project'
import axios from 'axios'
import Tours from './components/Tours'

function App() {
 const [tours , setTours] = useState([])
 const [loading, setLoading] = useState(true)

 const refresh = () =>{
  setLoading(true)
  fetchTours()
 }
 const removeTour =(id)=>{
       const newTours = tours.filter((tour) => tour.id !== id);
       setTours(newTours)
       }
  const fetchTours = async () =>{
       try {
        const response = await axios.get(url)
         setLoading(false)
        setTours(response.data)
       }catch (error) {
        setLoading(false)
        console.log(error.message)
       }
      }
      useEffect(()=>{
       fetchTours()
      },[])

  return (
    <main>
     
     {tours.length === 0?<button onClick={refresh}>Refresh</button>:<h1>We Have {tours.length} this month</h1>  
     }
     {loading ? <Loading/> :  <Tours tours={tours} removeTour={removeTour}/>}
    </main>
  )
}
export default App