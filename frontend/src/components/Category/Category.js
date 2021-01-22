import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {getCategories} from "../../js/actions/categoryaction"
import Categorycard from "./Categorycard"
import {Link}  from "react-router-dom"




function Category({name,setName,setEdit}) {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getCategories());
      },[]);
    const categories =useSelector((state)=>state.categoryreducer.categories)

   
    return (
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Categories</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Categories</li>
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
                  <Link to ="/category/add"><button type="submit" className="btn btn-primary">+Add Category</button></Link>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                        <th>Name</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                      {categories.map(e=>
            <Categorycard key={e._id} e={e} name={name} setName={setName} setEdit={setEdit}/>)}
                      </tbody>
                      <tfoot>
                        <tr>
                        <th>Name</th>
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

export default Category
