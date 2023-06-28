import NavBar from "./navBar";
import starwars from "../assets/starwars.png"

function Header(){

  return (
    <header>
      <div>
        <img src={starwars} alt="" />
      </div>
      <NavBar />
    </header>
  )
}

export default Header