import "./App.css";
// import React from "react";
// import userContext  from "./context";
import React,{ useState } from "react";
import axios from "axios";
 import { useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Withdraw() {
   
    const [show, setShow] = React.useState(true);
    const navigate=useNavigate();
    //  const navigate=NavLink();
    const token=localStorage.getItem('x-auth');
    const[bal,setbal]=useState();
     const [values,setValues]=useState(0);
     const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-auth':token
        }
      };
     async function handleCreate(e) {
        e.preventDefault();
        const url = "http://localhost:4400/api/bank/withdraw";
        axios
          .put(url, {
            withdraw:values
          },config
          )
          
          .then((res) => {
            setShow(false);
            console.log(res.data)
            setbal(res.data.balance)
            alert("Successfully Withdrawn $" + values);
          })
          .catch((error) => {
            
            console.log(error.response.data);
            
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
      <div className="withdraw">
        <div>
          {show ? (
            <>
              <h1 class="success"> WithDraw</h1> <br />
              <br/>
              <input type="input" class="lable" id="cashback" placeholder="Enter Amount to be withdrawn"
                // value={!values}
                onChange={(e) =>
                  setValues((e.target.value))}
              />
              <br />
              <button  type="submit"  class="btnsubmit" disabled={!values} onClick={handleCreate}>Withdraw
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
                 Another Withdraw
              </button>
              <button id="another_btn" onClick={Balance}>Check Balance</button>
            </>
          )}
        </div>
      </div>
    );
  }