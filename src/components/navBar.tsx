import { Link } from "react-router-dom"
import "../App.css"
import { useAuth } from "../context/authContext"

function NavBar(){
  const {user} = useAuth()
  return (
    <nav>
      <ul className="navList">
        <li><Link to={"/"}>Home</Link></li>
        { user && <li><Link to={"/apiStarWars"}>StarShips</Link></li> }
      </ul>
    </nav>
  )
}

export default NavBar