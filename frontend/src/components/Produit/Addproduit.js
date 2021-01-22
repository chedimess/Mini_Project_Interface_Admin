import React from 'react'
import Formproduit from "./Formproduit"


function Addproduit({name,setName,categoryId, reference, tarif,
    setCategoryId,setReference,setTarif}) {
    return (
        <div>
            <Formproduit name={name} setName={setName}  categoryId={categoryId} reference={reference} tarif={tarif} 
            setCategoryId={setCategoryId} setReference={setReference} setTarif={setTarif}/>
        </div>
    )
    
}

export default Addproduit
