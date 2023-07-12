import "./App.css";
import { useNavigate } from "react-router-dom";

export default function Account(){
   
    const navigate=useNavigate();
    async function dep(){
        navigate('/deposit')
    }
    async function wit(){
        navigate('/withdraw')
    }
    async function prof(){
        navigate('/profile')
    }

    return(
        <>
               <div className="deposit">
          
               <h5 class="success">FNBank</h5>
              <br />
              <button id="another_btn" onClick={dep}>Deposit</button>
              <button id="another_btn" onClick={wit}>WithDraw</button>
              <button id="another_btn" onClick={prof}>Profile</button>
          </div>
        </>
    )
}