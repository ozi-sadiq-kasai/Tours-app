import { useState } from "react"

const Tours = ({tours,removeTour})=> {
 const [readMore,setReadMore]=useState(false)
  
  return (
    <>
      {tours.map((tour) =>{
       const {id,name,info,image,price} = tour
       return(
        <article key={id} className="single-tour">
         <img src={image} alt={name} style={{width:'1000px'}} />
         <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
            <p>{
            readMore ? info :`${info.substring(0,250)}...`
            }
            <button onClick={()=>setReadMore(!readMore)}>{readMore?'Show less':'Readmore'}</button>
            </p>
            <button className="delete-btn btn-block btn" onClick={()=> removeTour(id)}>Not Interested</button>
          </div>
          
         </footer>
        </article>
       )
       })}  
    </>
  )
      } 
  

export default Tours
