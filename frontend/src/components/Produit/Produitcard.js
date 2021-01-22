import React from 'react'
import {deleteproduit} from "../../js/actions/produitaction"
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import Swal from "sweetalert2"

function Produitcard({e,setName,setEdit,setCategoryId,setReference,setTarif}) {

    const categories =useSelector((state)=>state.categoryreducer.categories)
    const dispatch = useDispatch()
    const deleteproduitt=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteproduit(e._id))
                Swal.fire({
                  position: 'middle',
                  icon: 'success',
                  title: 'Product has been deleted',
                  showConfirmButton: false,
                  timer: 1100
                })
            }
          })
        
    }
    const getproduitfield=(prod)=>{
        
        setCategoryId(prod.categoryId)
        setName(prod.name)
        setReference(prod.reference)
        setTarif(prod.tarif)
        setEdit(true)
    }

    return (       
        <tr>
        <td>{e.name}</td>
<td>{e.tarif}</td>
<td>{e.reference}</td>
<td>{e.email}{categories && categories.find(category=>category._id===e.categoryId) && categories.find(category=>category._id===e.categoryId).name}</td>
<td><Link to={`/produit/edit/${e._id}`}><button className="btn btn-info btn-sm" onClick={()=>getproduitfield(e)}><i className=" fas fa-pencil-alt"></i> Edit</button></Link></td>
<td><button className="btn btn-danger btn-sm " onClick={deleteproduitt}><i className=" fas fa-trash"></i> Delete</button></td>
            </tr>        
    )
}

export default Produitcard
