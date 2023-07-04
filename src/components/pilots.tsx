import { IPilotsProp } from "../types/interfaces";

export function Pilots({pilots}: IPilotsProp) {

  const URLPilots = pilots
  const numberURLPilots = URLPilots.replace(/\D/g, "")

  return (
    <>
      {
        <ul className="pilotsList">
          <li>
            <img
              className="imgPilots"
              src={`https://starwars-visualguide.com/assets/img/characters/${numberURLPilots}.jpg`}
              alt=""
            /> 
          </li>
        </ul>
      }
    </>
  )
}