import "./App.css";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Deposit() {
   
      const [show, setShow] = React.useState(true);
      const [data,setData]=useState([]);
      const[bal,setbal]=useState(0);
      const [values,setValues]=useState(0);
      const navigate=useNavigate()
    
       const token=localStorage.getItem('x-auth');
// console.log(token)

      async function handle(){
        let headers={
          'Content-type':'application/json',
          'Accept':'application/json',
          'x-auth':token
        }
        const url="http://localhost:4400/api/bank/deposit"
        await axios.put(url,{
          deposit:values,
        },{headers})
        .then(res=>{
          if(res.status===400){
            alert("Something Went Wrong");
          }
          else{
            setShow(false);
            console.log(values)
            setbal(res.data.balance)
            alert("Successfully Deposited $" + values);

    
          }
        })
        .catch(error=>{
          alert(error.response.data)
        })
        
      }
      function Balance(){
        alert(`Your Avaliable Balance ${bal}`)
     }
 
    
    function clearForm() {
       setValues("");
       setShow(true);
      
    }


    return (
               <>
               <div className="deposit">
          {show ? (
            <>
              <h1 class="success">Deposit</h1> <br />
              <br/>
              <input class="lable"
                type="input"
                id="deposit"
                placeholder="Enter the Amount to Deposit"
                onChange={(e) =>
                  setValues((e.target.value))}
              />
              <br />
              <button class="btnsubmit"
                type="submit"
                disabled={!values}
                onClick={handle}>
                Deposit
              </button>
             
              <button class="cancel"  type="submit" onClick={()=>(navigate('/account'))}>
                Cancel
              </button>
              <br />
              {/* <div className="balance">
                <h5 class="available">Balance Avaliable
                <br/>
                {bal}</h5>
              </div> */}
             
            </>
           
          ) : (
            <>
              <h5 class="success">Successful Transaction!</h5>
              <br />
              <button
                type="submit" id="another_btn"
                onClick={clearForm} >
                 Another Deposit
              </button>
              <button id="another_btn" onClick={Balance}>Check Balance</button>
            </>
          )}
          </div>
        </>
    );
  }