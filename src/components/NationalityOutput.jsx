import axios from 'axios'
import react, { useEffect, useState } from 'react'

export default function NationalityOutput({country,nationality}){

  return(
    <div>
       <div>
      <div className='username'>
        {country && 
          <div>{nationality} <span className='user-text'> Possible Belong to </span></div>
        }  
      </div>
          {country && country.country.map((c)=>{
          return ( 
             <h4  className='user-text' key={c.country_id}>{c.country_id} Country</h4>                 
          )
        })}
     </div>
    </div>
  )
}