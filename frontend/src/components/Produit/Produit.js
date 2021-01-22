import React,{useEffect} from 'react'
import {getProduits} from "../../js/actions/produitaction"
import { useSelector,useDispatch } from "react-redux";
import Produitcard from "./Produitcard"
import {Link} from "react-router-dom"
import { getCategories } from '../../js/actions/categoryaction';


function Produit({setName,setEdit,
    setCategoryId,setReference,setTarif}) {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProduits());
        dispatch(getCategories());
      },[]);
    const produits =useSelector((state)=>state.produitreducer.produits)
  
    return (
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Products</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Products</li>
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
                  <Link to ="/produit/add"><button type="submit" className="btn btn-primary">+Add Product</button></Link>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                        <th>Name</th>
                          <th>Tarif</th>
                          <th>Refrence</th>
                          <th>Category</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                      {produits.map(e=>
               <Produitcard key={e._id} e={e}  setName={setName} setEdit = {setEdit}  
               setCategoryId={setCategoryId} setReference={setReference} setTarif={setTarif}/>)
                }
                      </tbody>
                      <tfoot>
                        <tr>
                        <th>Name</th>
                          <th>Tarif</th>
                          <th>Refrence</th>
                          <th>Category</th>
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

export default Produit
