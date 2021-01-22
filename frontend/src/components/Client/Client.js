import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {getClients} from "../../js/actions/clientaction"
import Clientcard from "./Clientcard"


function Client({firstName,setFirstName,lastName,setLastName,email,setEmail,setEdit}) {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getClients());
      },[]);
    const clients =useSelector((state)=>state.clientreducer.clients)
    return (
        <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Clients</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Clients</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
            <Link to ="/client/add"><button type="submit" className="btn btn-primary">+Add Client</button></Link>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                  <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                 {clients.map(e=>
            <Clientcard key={e._id} e={e}  setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail}  setEdit={setEdit}/>)}
                </tbody>
                <tfoot>
                  <tr>
                  <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

    )
}

export default Client
