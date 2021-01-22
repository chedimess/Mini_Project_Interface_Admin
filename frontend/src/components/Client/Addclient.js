import React from 'react'
import Formclient from "./Formclient"


function Addclient({firstName,setFirstName,lastName,setLastName,email,setEmail}) {

    return (
        <div>
            <Formclient firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}
            email={email} setEmail={setEmail}/>
        </div>
    )
}

export default Addclient