import '../styles/generalInformation.css'

function GeneralInfo({name, email, phone,adress, onChangeValue, isEditable}){
    const inputFields = (
        <>
            <label htmlFor="nombreUsuario">Name: </label>
            <input id="nombreUsuario" type='text' onChange={onChangeValue} value={name} name="name"></input>

            <label htmlFor="emailUsuario">Email: </label>
            <input type="text" onChange={onChangeValue} value={email} id="emailUsuario" name="email"/>

            <label htmlFor="phoneUsuario">Phone: </label>
            <input type="tel" onChange={onChangeValue} value={phone} id="phoneUsuario" name="phone"/>

            <label htmlFor="adressUsuario">Phone: </label>
            <input type="text" onChange={onChangeValue} value={adress} id="adressUsuario" name="adress"/>
        </>
    ); 

    const displayInfo = (
        <>
        <div className="sub-section">
            <h2>Nombre: </h2>
            <p> {name} </p>
        </div>
        <div className="sub-section">
            <h2>Email: </h2>
            <p> {email} </p>
        </div>
        <div className='sub-section'>
            <h2>Phone: </h2>
            <p> {phone} </p>
        </div>

        </>
    );

    return (
        <div className='general-info section'>
            <h2>General Information</h2>
            {isEditable ? inputFields : displayInfo }
        </div>
    )
}

export default GeneralInfo;