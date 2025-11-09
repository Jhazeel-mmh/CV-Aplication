import "../styles/educationInfo.css"
import "../styles/inputField.css"


function EducationInfo({schoolName, title, city, country, dateS, dateE, onChangeValue, isEditable}){
    const inputEducationInfo = (
        <>
            <label htmlFor="schoolName">School Name: </label>
            <input type="text" name="schoolName" id="schoolName" value={schoolName} onChange={onChangeValue}/>

            <label htmlFor="title">Title: </label>
            <input type="text" value={title} name="title" id="title" onChange={onChangeValue}/>

            <label htmlFor="city">City: </label>
            <input type="text" value={city} name="city" id="city" onChange={onChangeValue}/>

            <label htmlFor="country">Country: </label>
            <input type="text" value={country} name="country" id="country" onChange={onChangeValue}/>

            <div className="education-info-input__dates dates">
                <label htmlFor="dateS">Start Date: </label>
                <input type="date" value={dateS} name="dateS" id="dateS" onChange={onChangeValue}/>

                <label htmlFor="dateE">End Date: </label>
                <input type="date" value={dateE} name="dateE" id="dateE" onChange={onChangeValue}/>
            </div>
        </>
    );

     const displayInfo = ( 
        <>
            <div className="sub-section">
                <h4>School Name: </h4>
                <p> {schoolName} </p>
            </div>
            <div className="sub-section">
                <h4>Title: </h4>
                <p> {title} </p>
            </div>
            <div className='sub-section'>
                <h4>City: </h4>
                <p> {city} </p>
            </div>
            <div className='sub-section'>
                <h4>Country: </h4>
                <p> {country} </p>
            </div>

            <div className="education-info-input__dates">
                <div className='sub-section'>
                    <h4>Start Date: </h4>
                    <p> {dateE} </p>
                </div>
                <div className='sub-section'>
                    <h4>End Date: </h4>
                    <p> {dateE} </p>
                </div>
            </div>


            
        </>
    );

    return (
        <div className="education-info-input">
            <h2>Education Info</h2>
            {isEditable ? inputEducationInfo : displayInfo}
        </div>
    )
}

export default EducationInfo;