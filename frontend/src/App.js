import React,{useState} from 'react'

import {BrowserRouter,Route} from "react-router-dom"

import Client from "./components/Client/Client"
import Appnavbar from "./menu/Appnavbar"
import Appsidebar from "./menu/Appsidebar"
import Controlsidebar from "./menu/Controlsidebar"
import Footer from "./menu/Footer"
import Addclient from "./components/Client/Addclient"
import Editclient from "./components/Client/Editclient"
import Category from "./components/Category/Category"
import Produit from "./components/Produit/Produit"
import Addcategory from "./components/Category/Addcategory"
import Editcategory from "./components/Category/Editcategory"
import Addproduit from "./components/Produit/Addproduit"
import Editproduit from "./components/Produit/Editproduit"
import Home from "./components/home/Home"


function App() {
  //state for category &produit
  const [name,setName]=useState("")
  //state for category & produit & client
  const [edit,setEdit]=useState(false)
  //state for produit
  const [categoryId,setCategoryId]=useState("")
  const [reference,setReference]=useState("")
  const [tarif,setTarif]=useState("")
  //state for client
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")

  return (
    <BrowserRouter>
    <Appnavbar/>
    <Appsidebar/>
    <Controlsidebar/>

    <Route exact path="/" component={Home}  />

    <Route path="/categorie" render={() => (
            <Category name={name} setName={setName} setEdit={setEdit}/>  )}  />
   <Route path="/category/add" render={() => (
            <Addcategory name={name} setName={setName} />  )}  />
   <Route path="/category/edit/:id" render={(props) => (
            <Editcategory name={name} setName={setName} edit={edit} setEdit={setEdit} {...props} />  )}  />  


    <Route exact path="/produit" render={() => (
            <Produit name={name} setName={setName} setEdit={setEdit} categoryId={categoryId} reference={reference} tarif={tarif} 
            setCategoryId={setCategoryId} setReference={setReference} setTarif={setTarif} />  )}  />

   <Route path="/produit/add" render={() => (
            <Addproduit name={name} setName={setName}  categoryId={categoryId} reference={reference} tarif={tarif} 
            setCategoryId={setCategoryId} setReference={setReference} setTarif={setTarif} />  )}  />

     <Route path="/produit/edit/:id" render={(props) => (
            <Editproduit name={name} setName={setName}  categoryId={categoryId} reference={reference} tarif={tarif} 
            setCategoryId={setCategoryId} setReference={setReference} setTarif={setTarif} edit={edit} setEdit={setEdit} {...props} />  )}  />  

   

     <Route exact path="/client" render={() => (
            <Client firstName={firstName} setFirstName={setFirstName}  lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} setEdit={setEdit}/>  )}  />

               <Route path="/client/add" render={() => (
            <Addclient firstName={firstName} setFirstName={setFirstName}  lastName={lastName} setLastName={setLastName} email={email} 
            setEmail={setEmail}  />  )}  />

     <Route path="/client/edit/:id" render={(props) => (
            <Editclient firstName={firstName} setFirstName={setFirstName}  lastName={lastName} setLastName={setLastName} email={email} 
            setEmail={setEmail}  edit={edit} setEdit={setEdit} {...props} />  )}  />
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
