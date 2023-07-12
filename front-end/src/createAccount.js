// import "./App.css"
// // import { useContext } from "react";
// import userContext  from "./context";
// import React from "react";
// import { useNavigate,Link } from "react-router-dom";
// import { useContext } from "react";
// import { useFormik } from "formik";
// import axios from 'axios';
// // import { useState } from "react";

// export default function CreateAccount() {
//   const [show, setShow] = React.useState(true);
//   const [firstname, setFirstname] =  React.useState("");
//   const [lastname, setLastname] =  React.useState("");
//   const [email, setEmail] =  React.useState("");
//   const [password, setPassword] =  React.useState("");
//   const navigate=useNavigate() 
//   const handleCreate=async()=>{
//     try {
//       axios.post("http://localhost:4400/api/bank/register",{
//         firstname:firstname,
//         lastname:lastname,
//         email:email,
//         password:password
//       })
//       .then(res=>{
//         if(res.status===200){
//           alert("Account Created Sucessfully")
//           navigate('/login')
//         }
//       })
//       .catch(err=>console.warn(err))
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return (
//   <>
//   {""} 
//   {show ? (
//   <div className="box">
//     <h3  className="heading">Create Account</h3>
//     <hr></hr>
//     <form class="row g-3 needs-validation" novalidate>
//       <div class="cform">
//         <label for="validationCustom01" class="form-label">First Name</label>
//         <input type="text" class="form-control" id="firstname" placeholder="Enter FirstName" required
//         value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
//         <div class="valid-feedback"> Looks good! </div>
//       </div>

//       <div class="cform">
//         <label for="validationCustom02" class="form-label">Last Name</label>
//         <input type="text" class="form-control" id="lastname" placeholder="Enter LastName" required 
//         value={lastname} onChange={(e) => setLastname(e.target.value)}/>
//         <div class="valid-feedback"> Looks good! </div>
//       </div>

//       <div class="cform">
//         <label for="validationCustom02" class="form-label">Email Address</label>
//         <input type="email" class="form-control" id="email" placeholder="Enter Mail-Id" required value={email}
//         onChange={(e) => setEmail(e.target.value)}/>
//         <div class="valid-feedback"> Looks good! </div>
//       </div>

//       <div class="cform">
//         <label for="validationCustom03" class="form-label">Password</label>
//         <input type="password" class="form-control" id="password" required value={password}
//         onChange={(e) => setPassword(e.target.value)}/>
//         <div class="invalid-feedback"> Please provide a max 8 character. </div>
//       </div>

//       <div class="col-12">
//         <button class="btn btn-primary" type="submit" onClick={handleCreate}>Create Account</button>
//       </div> 
//       <Link to="/login" class="link"> Already have an account ? <span>Sign In</span> </Link>
//     </form>
//   </div>
//   ) : (
//   <>
//   <h5 class="success">Successfully Created!</h5>
//   </>
//   )}
//   </>
//   )}

import "./App.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from 'axios';

export default function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};

    if (!values.firstname) {
      errors.firstname = "First name is required";
    }

    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:4400/api/bank/register", {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password
        });

        alert("Account Created Successfully");
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <>
      {show ? (
        <div className="box">
          <h3 className="heading">Create Account</h3>
          <hr />
          <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="cform">
              <label htmlFor="firstname" className="form-label">First Name :</label>
              <input
                type="text"
                className={`form-control ${touched.firstname && errors.firstname ? "is-invalid" : ""}`}
                id="firstname"
                name="firstname"
                placeholder="Enter FirstName"
                value={values.firstname}
                onChange={handleChange}
                required
              />
              {touched.firstname && errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
            </div>

            <div className="cform">
              <label htmlFor="lastname" className="form-label">Last Name :</label>
              <input
                type="text"
                className={`form-control ${touched.lastname && errors.lastname ? "is-invalid" : ""}`}
                id="lastname"
                name="lastname"
                placeholder="Enter LastName"
                value={values.lastname}
                onChange={handleChange}
                required
              />
              {touched.lastname && errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
            </div>

            <div className="cform">
              <label htmlFor="email" className="form-label">Email Address :</label>
              <input
                type="email"
                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                placeholder="Enter Mail-Id"
                value={values.email}
                onChange={handleChange}
                required
              />
              {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="cform">
              <label htmlFor="password" className="form-label">Password :</label>
              <input
                type="password"
                className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                id="password"
                name="password"
                placeholder="Enter Your Password..."
                value={values.password}
                onChange={handleChange}
                required
              />
              {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">Create Account</button>
            </div>
            <Link to="/login" className="link">Already have an account? <span>Sign In</span></Link>
          </form>
        </div>
      ) : (
        <>
          <h5 className="success">Successfully Created!</h5>
        </>
      )}
    </>
  );
}
