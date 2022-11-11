import react, { useEffect } from 'react'

export default function Input({nationality, setNationality, setCountry}){
  let setInputNational = (event) => {
    setNationality(event.target.value)
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    getCountry(nationality)
    // console.log(nationality);
  }
  const getCountry = async(nationality) =>{
    let response = await fetch(`https://api.nationalize.io/?name=${nationality}`);
    let data = await response.json()
    setCountry(data)
    console.log(data)

}

return(
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="nationality" value={nationality} onChange={setInputNational}/>
      <button type="submit">Get My Nationality</button>

    </form>
   
  </div>
)
}