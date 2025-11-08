import "../styles/educationInfo.css"


function EducationInfo({schoolName, title, city, country, dateOfStart, dateOfEnd, onChangeValue, isEditable}){
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

            <div className="education-info-input__dates">
                <label htmlFor="dateS">Date of Start: </label>
                <input type="date" value={dateOfStart} name="dateS" id="dateS" onChange={onChangeValue}/>

                <label htmlFor="dateE">Date of End: </label>
                <input type="date" value={dateOfEnd} name="dateE" id="dateE" onChange={onChangeValue}/>
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
            <div className='sub-section'>
                <h4>Date of Start: </h4>
                <p> {dateOfStart} </p>
            </div>
            <div className='sub-section'>
                <h4>Date of End: </h4>
                <p> {dateOfEnd} </p>
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