import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInformation'

function App() {
  const [isEditable, setIsEditable] = useState(true);
  const [generalInf, changeGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    adress: ""
  });

  function onChangeValue(e){
      const value = e.target.value;
      const inputName = e.target.name;
      const newGeneralInf = {
        ...generalInf,
        [inputName]: value
      };
      changeGeneralInfo(newGeneralInf);
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsEditable(!isEditable);
  }

  return (
    <>
      <h1>CV Aplication</h1>
      <form onSubmit={handleSubmit} className='main'>
        <GeneralInfo {...generalInf} onChangeValue={onChangeValue} isEditable={isEditable}/>
        <button type="submit">{isEditable ? "Guardar" : "Editar"}</button>
      </form>
    </>
  )
}

export default App
