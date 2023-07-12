import "./App.css";
import {HashRouter,BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Nav from "./nav";
import Bank from "./bank";
import CreateAccount from "./createAccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Alldata from "./alldata";
import userContext from "./context";
import Login from './login';
import Account from "./account";
import Profile from "./profile";
import Logout from "./logout";

// import Nav from "./nav";
// import Profile from "./profile";
// import LoginAccount from "./longinScreen";
// import LoginAccount from "./longinScreen";

export default function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Nav />
          {/* <Link to="/createaccount">Home</Link>
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdrawal">Withdrawal</Link>
          <Link to="/alldata">Alldata</Link> */}
          
          <userContext.Provider
            value={{
              users: [
                {
                   name: "Dharani",
                   email: "dharaniathithi@gmail.com",
                   password: "dharani@24",
                  bal:0
                }
              ]
            }}>
           
            <Routes>
              <Route exact path="/bank" element={<Bank />} />
              <Route exact path="/createAccount" element={<CreateAccount />} />
              <Route exact path="/deposit" element={<Deposit />} />
              <Route exact path="/withdraw" element={<Withdraw />} />
              <Route exact path="/alldata" element={<Alldata />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/account" element={<Account/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/nav" element={<Nav/>}/>
              <Route exact path="/logout" element={<Logout/>}/>

            </Routes>
          </userContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}
