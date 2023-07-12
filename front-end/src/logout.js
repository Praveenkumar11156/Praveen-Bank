import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Logout({setshow}){
    const navigate=useNavigate();
    const logfunction=()=>{
        setshow(false)
        navigate('bank')
    }
    return(
        <div class="img1">      
            <p className="log">Thank You Dear Customers.. <br></br>Happy visit! Stay with us!</p>
            {/* <img alt="bl" class="img1" src={fnb}/> */}
           <Button className="bg-warning" onClick={logfunction}>Logout</Button>
        </div>
  
    )
}