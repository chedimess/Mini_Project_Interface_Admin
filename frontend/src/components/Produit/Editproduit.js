import React from 'react'
import Formproduit from "./Formproduit"

function Editproduit(props) {
    return (
        <div>
            <Formproduit name={props.name} categoryId={props.categoryId} tarif={props.tarif} reference ={props.reference} setName={props.setName} edit={props.edit} setEdit ={props.setEdit} setCategoryId={props.setCategoryId} setTarif={props.setTarif} setReference ={props.setReference} setName={props.setName} id={props.match.params.id}/>
        </div>
    )
}

export default Editproduit
