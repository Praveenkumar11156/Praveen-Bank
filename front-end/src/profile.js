import "./App.css";
import userContext from "./context";
import {useContext,useEffect,useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
let ctx = useContext(userContext);
const [data,setData]=useState([]);
let navigate=useNavigate();
 
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
       
        console.log(res.data)
       
		   setData(res.data)
       
      })
      .catch((error) => {
        console.log(error.response.data);
          
        })
      
  }
  useEffect(()=>{
	Myprofile();
  },[])

 
  

  return (
    <>
     {/* <nav class="navbar ">
  {/* <img alt="banklogo" class="banklogo" src={bl} /> */}
    {/* <ul class="nav">
     <li class="nav-item">
      <button class="logout" onClick={logout}></button>
     </li>
     </ul>
      </nav> */} 
      {/* <nav class="navbar ">
            <ul ul class="nav">
          <li class="nav-item">
          {data.map((item,i)=>
          <div  key={i}>
            <p class="profile" >Welcome</p>
            <p class="profile" >{item.firstname} {item.lastname}</p> 
      </div> 
          )} 
            </li>
          </ul>
        </nav> */}
	    <><th className="alldata">
      <td>
      {/* Data
      {JSON.stringify(ctx.users)} */}
      <table >
		 <tbody>
      <tr >
		<th>FirstName</th>
    <th>LastName</th>
			<th>Email</th>
      <th>Total Deposit</th>
      <th>Total Withdrawal</th>
			<th>CurrentBalance</th>
		   </tr>
		
		 {data.map((data,i)=>
		   <tr key={i}>
			 
			 <td>{data.firstname}</td>
       <td>{data.lastname}</td>
			 <td>{data.email}</td>
       <td>{data.deposit}</td>
       <td>{data.withdraw}</td>
			 <td>{data.balance}</td>
		   </tr>
		 )}
	  </tbody>
	  </table>
      </td>
      </th>
     
   
    
  </>
  </> 
  );
}
