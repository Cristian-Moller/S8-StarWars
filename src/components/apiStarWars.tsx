import { useEffect, useState } from "react"
import { IStarship } from "../types/interfaces"
import { DetailStarShip } from "./detailStarShip"


function ApiStarWars(){

  const [ starShips, setStarShips] = useState<IStarship[]>([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(res => res.json())
      .then(res => setStarShips(res.results))
  }, [])

  return (

    <>
      <ul className="listStarShips" >
        {starShips.map((elem, index) => {
          
          return (
            <li key={elem.name}>

              <DetailStarShip
                ship={elem}
                key={index}
              />

            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ApiStarWars