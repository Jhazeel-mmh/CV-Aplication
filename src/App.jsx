import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInformation'
import EducationInfo from './components/EducationInfo';

function App() {
  const [isEditable, setIsEditable] = useState(true);
  const [generalInf, changeGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    adress: ""
  });

  const [eduactionInf, changeEducationInfo] = useState({
    schoolName: "",
    title: "",
    city: "",
    country: "",
    dateS: null,
    dateE: null
  });

  function onChangeValueGeneral(e){
      const value = e.target.value;
      const inputName = e.target.name;
      const newGeneralInf = {
        ...generalInf,
        [inputName]: value
      };
      changeGeneralInfo(newGeneralInf);
  }

  function onChangeValueEducation(e){
      const value = e.target.value;
      const inputName = e.target.name;
      const newEducationInf = {
        ...eduactionInf,
        [inputName]: value
      };
      changeEducationInfo(newEducationInf);
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsEditable(!isEditable);
  }

  return (
    <>
      <h1>CV Aplication</h1>
      <form onSubmit={handleSubmit} className='main'>
        <GeneralInfo {...generalInf} onChangeValue={onChangeValueGeneral} isEditable={isEditable}/>
        <EducationInfo {...eduactionInf} onChangeValue={onChangeValueEducation} isEditable={isEditable}/>
        <button type="submit">{isEditable ? "Guardar" : "Editar"}</button>
      </form>
    </>
  )
}

export default App;
