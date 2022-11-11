import { useState } from 'react';
import Input from './components/Input';
import NationalityOutput from './components/NationalityOutput';
import './App.css';

function App() {
  let [nationality, setNationality] = useState("")
  let [country, setCountry] = useState("")


  return (
    <div className="App">
    <h1>Nationality</h1>
    <Input 
      nationality={nationality} 
      setNationality={setNationality}
      setCountry={setCountry}
      />
    <NationalityOutput nationality={nationality} country={country} />
    
  </div>
  );
}

export default App;
