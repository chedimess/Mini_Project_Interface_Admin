import React from 'react'
import Formcategory from "./Formcategory"


function Addcategory({name,setName}) {

    return (
        <div>
            <Formcategory name={name} setName={setName}/>
        </div>
    )
}

export default Addcategory
