import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInformation'
import EducationInfo from './components/EducationInfo';
import ExperienciesInfo from './components/ExperienciesInfo';
import PreviewCv from './components/PreviewCv';

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

  const [experienciesInf, changeExperienciesInf] = useState({
    company: "",
    role: "",
    responsabilities: "",
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

  function onChangeValueExperiencies(e){
      const value = e.target.value;
      const inputName = e.target.name;
      const newExperienciesInf = {
        ...experienciesInf,
        [inputName]: value
      };
      changeExperienciesInf(newExperienciesInf);
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsEditable(!isEditable);
  }

  return (
    <>
    
      <h1>CV Aplication</h1>
      <div className='main'>
        <form onSubmit={handleSubmit} className='main__form'>
          <GeneralInfo {...generalInf} onChangeValue={onChangeValueGeneral} isEditable={isEditable}/>
          <EducationInfo {...eduactionInf} onChangeValue={onChangeValueEducation} isEditable={isEditable}/>
          <ExperienciesInfo {...experienciesInf} onChangueValue={onChangeValueExperiencies} isEditable={isEditable} />
          <button type="submit">{isEditable ? "Guardar" : "Editar"}</button>
        </form>
        <PreviewCv>
          <div className="preview-sec__general-info">
            <h2 className='preview-sec__gi__name'>{generalInf.name}</h2>
            <p className='preview-sec__gi__email'>{generalInf.email}</p>
            <p className='preview-sec__gi__phone'>{generalInf.phone}</p>
            <p className='preview-sec__gi__adress'>{generalInf.adress}</p>
          </div>
          <div className="preview-sec__education-info">
            <h4>Education Info</h4>
            <p className='preview-sec__ei__school'>{eduactionInf.schoolName}</p>
            <p className='preview-sec__ei__title'>{eduactionInf.title}</p>
            <p className='preview-sec__ei__city'>{eduactionInf.city}</p>
            <p className='preview-sec__ei__country'>{eduactionInf.country}</p>
            <div className="preview-sec__ei__dates">
              <p className='preview-sec__ei__dates-s'>{eduactionInf.dateS}</p>
              <p className='preview-sec__ei__dates-e'>{eduactionInf.dateE}</p>
            </div>
          </div>
          <div className="preview-sec__experiencies-info">
            <h4 className='preview-sec__exi__company'>{experienciesInf.company}</h4>
            <h5 className='preview-sec__exi__role'>{experienciesInf.role}</h5>
            <p className="preview-sec__exi__responsabilities">{experienciesInf.responsabilities}</p>
            <div className="preview-sec__exi__dates">
              <p className='preview-sec__exi__dates-s'>{experienciesInf.dateS}</p>
              <p className='preview-sec__exi__dates-e'>{experienciesInf.dateE}</p>
            </div>
          </div>

        </PreviewCv>
      </div>
    </>
  )
}

export default App;
