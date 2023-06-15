import { useState } from "react";
import { IStarshipProp } from "../types/interfaces";


export function DetailStarShip({ship}: IStarshipProp) {

  const [ showStarShip, setShowStarShip] = useState<boolean>(false)

  const handleShow = () => {
    setShowStarShip(!showStarShip)
  }


  return (
    <div 
      onClick={handleShow}
      className="shipContainer"
    >
      {
        (showStarShip) ? (
          <ul className="detailsList" >
            <div className={showStarShip ? "detailsCenter" : "display: none"}>
              <li>{ship.name} </li>
              <li>Model: {ship.model} </li>
              <li>Starship class: {ship.starship_class} </li>
              <li>Manufacturer: {ship.manufacturer} </li>
              <li>Cost: {ship.cost_in_credits} </li>
            </div>
            
            <div className="detailsLeft">
              <li>Crew: {ship.crew} </li>
              <li>Passenger: {ship.passengers} </li>
              <li>Cargo capacity: {ship.cargo_capacity} </li>
              <li>Consumables: {ship.consumables} </li>
            </div>

            <div className="detailsRight">
              <li>Lenght: {ship.length} </li>
              <li>Max atmosphering speed: {ship.max_atmosphering_speed} </li>
              <li>Hyperdrive rating: {ship.hyperdrive_rating} </li>
              <li>Max speed in realspace: {ship.MGLT} </li>
            </div>
          </ul>
        ) 
        : 
        (
          <>
            <div className="shipName">
              {ship.name}
            </div>
            <div className="shipModel">
              {ship.model}
            </div>
          </>
        )
      }
    </div>    
        
  )
}