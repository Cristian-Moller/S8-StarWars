import { Link } from "react-router-dom"
import "../App.css"

function NavBar(){

  return (
    <nav>
      <ul className="navList">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/apiStarWars"}>StarShips</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar