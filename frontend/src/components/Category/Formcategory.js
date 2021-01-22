import React,{useState} from 'react'
import {addCategories,editCategorie} from "../../js/actions/categoryaction"
import { useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"


function Formcategory({name,setName,edit,setEdit,id}) {
  const[nameError,setNameError]=useState("")
    const dispatch=useDispatch()
    const history=useHistory()
    const validate=()=>{
      let nameError="";
   
    //valid Name  
      if (!name){
       nameError="Name is required";
      }
   
      if (nameError){
       setNameError(nameError)
          
          return false;
      }
      return true;
  }
    
      const addCategoriees=(e)=>{
        e.preventDefault();
        const isValid=validate()
        if (isValid) {
         setNameError("")

         dispatch(addCategories({name}));
         setName("")
         history.push("/categorie")
        }
  
      }
       
      const editCategoriees=(e)=>{
        e.preventDefault();
        const isValid=validate()
        if (isValid) {
         setNameError("")

            dispatch(editCategorie(id,{name}));
            setEdit(false);
            setName("");
            history.push("/categorie")
        }

    }
    const resetcategorie=()=>{
if (edit){setEdit(false);setName("");};
        setName("");
        history.push("/categorie")
        
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
              <h3 className="card-title">Category Form</h3>
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
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={edit ? editCategoriees : addCategoriees} >Submit</button>
                
                <button type="submit" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={resetcategorie}>Back</button>
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

export default Formcategory
