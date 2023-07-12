import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import userContext from "./context";
import {useContext,useEffect,useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Nav(){
  let ctx = useContext(userContext);
// const [userName,setUserName]=useState("")
const navigate=useNavigate()
const [data,setData]=useState([]);
let token=localStorage.getItem('x-auth');

 const config = {
    headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'x-auth':token
         
    }
  };
 async function Myprofile() {
  
    const url = "http://localhost:4400/api/bank/profile";
    axios
      .get(url,config
      )
      
      .then((res) => {
        console.log(res.data);
       localStorage.setItem('x-auth',res.data)
       let token=localStorage.getItem('x-auth')
       if(token){
        setData(res.data)
       }
       
      })
      .catch((error) => {
        console.log(error.response.data);
          
        })
      
  }
  useEffect(()=>{
	Myprofile();
  },[])

  const logout=()=>{
    localStorage.clear()
    setData([]);
    navigate('/login')
} 

 
 
  


  return(<>
  <nav class="navbar ">
  {/* <img alt="banklogo" class="banklogo" src={bl} /> */}
    <ul class="nav">
     <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#/Bank">Home</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="#/createAccount">CreateAccount</a>
     </li> 
     <li class="nav-item">
      <a class="nav-link" href="#/login">Login</a>
     </li> 
     <li class="nav-item">
       <a class="nav-link"
        href="#/deposit">Deposit</a>
     </li>
     <li class="nav-item">
       <a class="nav-link"
        href="#/withdraw">WithDraw</a>
     </li>
     <li class="nav-item">
       <a class="nav-link"
        href="#/allData">All Data</a>
   </li>
   <li class="nav-item">
       <a class="nav-link"
        href="#/logout">Logout</a>
   </li>
   {/* <li>
    {data.map((item,i)=>
    <div  key={i}>
       <p class="profile" >Welcome</p>
       <p class="profile" >{item.firstname} {item.lastname}</p> 

  <button class="logout" onClick={logout}>logout</button>
  </div> 
		 )} 
      </li> */}
     </ul>
  </nav>
  </>
  )}