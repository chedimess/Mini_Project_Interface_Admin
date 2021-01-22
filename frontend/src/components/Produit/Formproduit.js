import React,{useState} from 'react'
import {addProduits,editProduit} from "../../js/actions/produitaction"
import { useSelector,useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"

function Formproduit({name,setName,categoryId, reference, tarif,
    setCategoryId,setReference,setTarif,edit,setEdit,id}) {

      const[nameError,setNameError]=useState("")
      const[categoryIdError,setCategoryIdError]=useState("")
      const[tarifError,setTarifError]=useState("")
      const[referenceError,setReferenceError]=useState("")  

    const dispatch=useDispatch()
    const history=useHistory()
    const categories =useSelector((state)=>state.categoryreducer.categories)

    const validate=()=>{
      let nameError="";
      let categoryIdError="";
      let tarifError="";
      let referenceError="";
    //valid name  
      if (!name){
       nameError="Name is required";
      }
      //valid category
      if (!categoryId){
       categoryIdError="Category is required";
      }

           //valid tarif
           if (!tarif){
            tarifError="tarif is required";
           }
           //valid reference
           if (!reference){
            referenceError="reference is required";
           }
    
      if (nameError || categoryIdError || tarifError || referenceError){
       setNameError(nameError)
       setCategoryIdError(categoryIdError)
          setTarifError(tarifError) 
          setReferenceError(referenceError)     
          return false;
      }
      return true;
  }

  const addProduitts=(e)=>{
      e.preventDefault();
      const isValid=validate()
      if (isValid) {
       setNameError("")
       setCategoryIdError("")
          setTarifError("")
          setReferenceError("")

          dispatch(addProduits({categoryId,name,reference,tarif}));
          setCategoryId("")
          setName("")
          setReference("")
          setTarif("")
          history.push("/produit")
      }

      
  }
  const editProduitt=(e)=>{
    e.preventDefault();
    const isValid=validate()
    if (isValid) {
     setNameError("")
     setCategoryIdError("")
        setTarifError("")
        setReferenceError("")

        dispatch(editProduit(id,{categoryId,name,reference,tarif}));
        setEdit(false);
        setCategoryId("")
        setName("")
        setReference("")
        setTarif("")
        history.push("/produit")
    }
 
}
const resetproduit=()=>{
    if (edit){setEdit(false);setCategoryId("");setName("");setReference("");setTarif("")};
    setCategoryId("")
    setName("")
    setReference("")
    setTarif("")
    history.push("/produit")
            
        }
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
   
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-6">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Product Form</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Name</label>
                  <input type="text" className="form-control"  value ={name} placeholder="enter name" onChange={e=>setName(e.target.value)}/>
                  <div style={{ fontSize :"12",color:"red"}}>{nameError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Tarif</label>
                  <input type="text" className="form-control" value={tarif}  placeholder="enter tarif" onChange={e=>setTarif(e.target.value)} />
                  <div style={{ fontSize :"12",color:"red"}}>{tarifError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Reference</label>
                  <input type="text" className="form-control"  value={reference} placeholder="Enter reference" onChange={e=>setReference(e.target.value)} />
                  <div style={{ fontSize :"12",color:"red"}}>{referenceError}</div>
                </div>
               <div className="form-group">
                  <label>Category</label>
                 <select className="form-control select2" value={categoryId} onChange={e=>setCategoryId(e.target.value)} style={{width: '100%'}}>
                 <option  value="">---Select Category---</option>
                 
                 {
                                categories.map(ele=>
                                    <option key={ele._id} value={ele._id}>{ele.name}</option>
                                )
                            }
               </select>
               <div style={{ fontSize :"12",color:"red"}}>{categoryIdError}</div>
               </div>

 
   
        
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={edit ? editProduitt : addProduitts} >Submit</button>
                
                <button type="submit" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={resetproduit}>Back</button>
              </div>
              </form>
          </div>

 
        </div>
  
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
    )
}

export default Formproduit
