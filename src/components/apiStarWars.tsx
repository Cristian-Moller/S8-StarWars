import { useEffect, useState } from "react"
import { IStarship } from "../types/interfaces"

function ApiStarWars() {
  const [ starShips, setStarShips] = useState<IStarship[]>([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(res => res.json())
      .then(res => setStarShips(res.results))
  }, [])

  return (
    <>
      <ul>
        {starShips.map((elem) => {
          return (
            <li key={elem.name}>
              <div>
                {elem.name}
              </div>
              <div>
                {elem.model}
              </div> 
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ApiStarWars