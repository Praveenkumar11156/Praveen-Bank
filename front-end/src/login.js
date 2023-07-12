import "./App.css";
import { useFormik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import React,{ useContext,useEffect } from "react";
import userContext from "./context"; 
import axios from "axios";

export default function Login(){
let userCtx=useContext(userContext)
const navigate=useNavigate();
const [show, setShow] = React.useState(true);
const[values,setValues]=React.useState({
  email:'',
  password:''
})

async function handle(){
  const url="http://localhost:4400/api/bank/login"
  await axios.post(url,{
    email:formik.values.email,
    password:formik.values.password
  })
  .then(res=>{
    console.log(res.data);
    localStorage.setItem('x-auth',res.data)
    let token=localStorage.getItem('x-auth')
    // console.log(token)
    if(res.status===200){
      alert("Sucesfully Logged In")
      setShow(false)
    }
    else{
      alert("Email id or Password Not match")
      setShow(true)
    }
  })
  .catch(error=>{
    console.log(error.message)
    
  })
}

const formik = useFormik({
  initialValues: {
    email: "",
    password:"",
    balance:0
  },
  onSubmit: (values) => {
    handle()
      // alert("Logged in Succesfully")
      // setShow(false)
    userCtx.users.push(values)
    console.log(values)
  },
  validate: (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if(!values.password) errors.password="Required"
    return errors;
  }
});

async function Deposit(){
  navigate('/deposit',{replace:true})
}
async function Withdraw(){
  navigate('/deposit',{replace:true})
}
async function Back(){
  navigate('/bank',{replace:true})
}
async function prof(){
  navigate('/profile')
}

return(
<>
{""} 
{show ? (
<div className="box">
  <h3  className="heading">Login</h3>
    <hr></hr>
    <form class="row g-3 needs-validation" novalidate onSubmit={formik.handleSubmit}>
      <div class="cform">
        <label for="validationCustom02" class="form-label">Email Address :</label>
        <input type="email" class="form-control" id="email" placeholder="Enter Mail-Id" required
        value={formik.values.email} onChange={formik.handleChange}/>
        <div class="valid-feedback"> Looks good! </div>
      </div>

      <div class="cform">
        <label for="validationCustom03" class="form-label">Password :</label>
        <input type="password" class="form-control" id="password" required
        value={formik.values.password} onChange={formik.handleChange}/>
        <div class="invalid-feedback"> Please provide a max 8 chacter. </div>
      </div>

      <div class="col-12">
        <button class="btn btn-primary" type="submit" onClick={handle}>Login</button>
      </div> 
      <Link to="/createAccount" class="link"> Not have an account ? <span>Sign up here </span> </Link>
    </form>
</div>
) : (
<>
<div className="box">
  <h5 class="success">Logged In Succesfully!</h5>
  <button id="another_btn" onClick={Deposit}>Deposit</button>
  <button id="another_btn" onClick={Withdraw}>WithDraw</button>
  <button id="another_btn" onClick={prof}>Profile</button>
</div>

</>
)}
</>
)}