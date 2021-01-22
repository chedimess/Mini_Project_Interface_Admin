import React from 'react'
import Formclient from "./Formclient"

function Editclient(props) {
    return (
        <div>
            <Formclient firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} email={props.email} setEmail={props.setEmail} edit={props.edit} setEdit ={props.setEdit} id={props.match.params.id}/>
        </div>
    )
}

export default Editclient
