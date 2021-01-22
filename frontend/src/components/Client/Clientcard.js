import React from 'react'
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {deleteclient} from "../../js/actions/clientaction"
import Swal from "sweetalert2"

function Clientcard({e,firstName,setFirstName,lastName,setLastName,email,setEmail,setEdit}) {
    const dispatch = useDispatch()

    const deleteclientt=()=>{
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
                dispatch(deleteclient(e._id))
                Swal.fire({
                  position: 'middle',
                  icon: 'success',
                  title: 'Client has been deleted',
                  showConfirmButton: false,
                  timer: 1100
                })
            }
          })
    }
   

    const getclientfield=(text)=>{
        setFirstName(text.firstName)
        setLastName(text.lastName)
        setEmail(text.email)
        setEdit(true)
    }
    return (
  
        
    
        <tr>
        <td>{e.firstName}</td>
<td>{e.lastName}</td>
<td>{e.email}</td>
<td><Link to={`/client/edit/${e._id}`}><button className="btn btn-info btn-sm" onClick={()=>getclientfield(e)}><i className=" fas fa-pencil-alt"></i> Edit</button></Link></td>
<td><button className="btn btn-danger btn-sm " onClick={deleteclientt}><i className=" fas fa-trash"></i> Delete</button></td>
            </tr>

    )
}

export default Clientcard
