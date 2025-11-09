import "../styles/experienciesInfo.css"
import "../styles/inputField.css"

function ExperienciesInfo({company, role, responsabilities, dateS, dateE, onChangueValue, isEditable }){
    const inputExperienciesInfo = (
        <>
            <label htmlFor="company">Company: </label>
            <input type="text" name="company" id="company" value={company} onChange={onChangueValue}/>

            <label htmlFor="">Role: </label>
            <input type="texrolet" name="role" id="role" value={role} onChange={onChangueValue}/>

            <label htmlFor="responsabilities">Responsabilities: </label>
            <input type="text" name="responsabilities" id="responsabilities" value={responsabilities} onChange={onChangueValue}/>
            <div className="experiencies-info-input__dates dates">
                 <label htmlFor="dateS">Start Date: </label>
                <input type="date" name="dateS" id="dateS" value={dateS} onChange={onChangueValue} />

                <label htmlFor="dateE">End Date: </label>
                <input type="date" name="dateE" id="dateE" value={dateE} onChange={onChangueValue} />
            </div>
        </>
    );

    const displayInfo = (
        <>
            <div className="sub-section">
                <h4>Company: </h4>
                <p> {company} </p>
            </div>
            <div className="sub-section">
                <h4>Role: </h4>
                <p> {role} </p>
            </div>
            <div className='sub-section'>
                <h4>Responsabilities: </h4>
                <p> {responsabilities} </p>
            </div>
            <div className="experiencies-info-input__info">
                <div className='sub-section'>
                    <h4>Start Date: </h4>
                    <p> {dateS} </p>
                </div>
                <div className='sub-section'>
                    <h4>End Date: </h4>
                    <p> {dateE} </p>
                </div>
            </div>
        </>
    );

    return (
        <div className="experiencies-info-input">
            <h2>Professional Experiencie</h2>
            {isEditable ? inputExperienciesInfo : displayInfo }
        </div>
    )
}

export default ExperienciesInfo;