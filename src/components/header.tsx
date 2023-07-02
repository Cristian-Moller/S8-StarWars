import NavBar from "./navBar";
import starwars from "../assets/starwars.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from "./login";
import { useAuth } from "../context/authContext";
import Register from "./register";

function Header(){
  const {user, logout} = useAuth()
  console.log(user);

  const handleLogout = async() => {
    await logout()
  }

  return (
    <header>
      <div className="headerSubContainer" >
        <div className="headerLogo">
          <img src={starwars} alt="" />
        </div>
        <div className="headerUser">
          {
            !user && 
            (
              <>
                <Popup
                  className="authPopup"
                  trigger={<button className="authButton"> Login</button>}
                  nested
                  modal
                >
                  <Login></Login>
                </Popup>
                <Popup
                  className="authPopup"
                  trigger={<button className="authButton"> Register</button>}
                  nested
                  modal
                >
                  <Register></Register>
                </Popup>
              </>
            )
          }
           
          {
            user && 
            (
              <button className="authButton" onClick={handleLogout}> Logout</button>
            )
          } 
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header