import React from 'react'
import {deletecategorie} from "../../js/actions/categoryaction"
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import Swal from "sweetalert2"

function Categorycard({e,name,setName,setEdit}) {
    const dispatch = useDispatch()
    const produits =useSelector((state)=>state.produitreducer.produits)
    let a = produits.find(prod=>prod.categoryId===e._id)

    const deletecategoriee=()=>{

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
                if (a){
              Swal.fire({
            title: 'Are you sure?',
            text: "You will delete products associate to this category!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletecategorie(e._id))
                Swal.fire({
                  position: 'middle',
                  icon: 'success',
                  title: 'Category has been deleted',
                  showConfirmButton: false,
                  timer: 1100
                })
            }
          })
        }else{   dispatch(deletecategorie(e._id))
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Category has been deleted',
            showConfirmButton: false,
            timer: 1100
          })}
            }
          })   
    }
        
    const getcategoryfield=(text)=>{
        setName(text.name)
        setEdit(true)
        }
        
    return (
        <tr>
        <td>{e.name}</td>

<td><Link to={`/category/edit/${e._id}`}><button className="btn btn-info btn-sm" onClick={()=>getcategoryfield(e)}><i className=" fas fa-pencil-alt"></i> Edit</button></Link></td>
<td><button className="btn btn-danger btn-sm " onClick={deletecategoriee}><i className=" fas fa-trash"></i> Delete</button></td>
            </tr>
    )
}

export default Categorycard
