import React,{useState} from 'react'
import {addClients,editClient} from "../../js/actions/clientaction"
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"

function Formclient({firstName,setFirstName,lastName,setLastName,email,setEmail,edit,setEdit,id}) {
  const[firstNameError,setFirstNameError]=useState("")
  const[lastNameError,setLastNameError]=useState("")
  const[emailError,setEmailError]=useState("")  
  const dispatch=useDispatch()
    const history=useHistory()

    const validate=()=>{
      let firstNameError="";
      let lastNameError="";
      let emailError="";
    //valid firstName  
      if (!firstName){
       firstNameError="Name is required";
      }
      //valid lastName
      if (!lastName){
       lastNameError="Last Name is required";
      }
      //valid email
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ((!regEmail.test(email))){
          emailError="invalid mail"
      }
      if (emailError || firstNameError || lastNameError){
       setFirstNameError(firstNameError)
       setLastNameError(lastNameError)
          setEmailError(emailError)    
          return false;
      }
      return true;
  }

      const addClientss=(e)=>{
        e.preventDefault();
        const isValid=validate()
        if (isValid) {
         setFirstNameError("")
         setLastNameError("")
            setEmailError("")
            dispatch(addClients({firstName,lastName,email}));
            setFirstName("");
            setLastName("");
            setEmail("");
            history.push("/client")
        }
 
          
        
      }
      const editClientt=(e)=>{
        e.preventDefault();
      
        const isValid=validate()
        if (isValid) {
         setFirstNameError("")
         setLastNameError("")
            setEmailError("")
            dispatch(editClient(id,{firstName,lastName,email}));
            setFirstName("");
            setLastName("");
            setEmail("");
            setEdit(false);
            history.push("/client")
        }         
    }
    const resetclient=()=>{
if (edit){setEdit(false);setFirstName("");setLastName("");setEmail("");};
setFirstName("");
setLastName("");
setEmail("");
history.push("/client")
        
    }
  
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
    </div>{/* /.container-fluid */}
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
              <h3 className="card-title">Client Form</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">FirstName</label>
                  <input type="text" className="form-control"  value ={firstName} placeholder="enter FirstName" onChange={e=>setFirstName(e.target.value)}/>
                  <div style={{ fontSize :"12",color:"red"}}>{firstNameError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">LastName</label>
                  <input type="text" className="form-control" value={lastName}  placeholder="enter LastName" onChange={e=>setLastName(e.target.value)} />
                  <div style={{ fontSize :"12",color:"red"}}>{lastNameError}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" value={email} placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
                  <div style={{ fontSize :"12",color:"red"}}>{emailError}</div>
                </div>
 
   
        
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={edit ? editClientt : addClientss} >Submit</button>
                
                <button type="submit" className="btn btn-primary" style={{marginLeft:"10px"}} onClick={resetclient}>Back</button>
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

export default Formclient
