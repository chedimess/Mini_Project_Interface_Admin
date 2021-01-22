import React from 'react'
import Formcategory from "./Formcategory"

function Editcategory(props) {
    return (
        <div>
            <Formcategory name={props.name} setName={props.setName} edit={props.edit} setEdit ={props.setEdit} id={props.match.params.id}/>
        </div>
    )
}

export default Editcategory
