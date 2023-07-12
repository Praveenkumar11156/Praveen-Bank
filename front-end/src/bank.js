import "./App.css";
import { useNavigate } from "react-router-dom";

import bb from "./mhb.png";

export default function Img(){
  const navigate=useNavigate();
  async function reg(){
      navigate('/createAccount')
  }
  async function log(){
      navigate('/login')
  }

  return(<>
  <p class="bg">Money Heist BanK</p>
      <img alt="bl" class="img" src={bb}/>
      <div class="sign">
      <button class="home" onClick={reg}>Sign Up</button>
      <button  class="home" onClick={log}>Sign In</button>
      </div><br/>
      
    
  </>)
};