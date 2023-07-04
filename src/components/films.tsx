import { IFilmsProp } from "../types/interfaces";

export function Films({films}: IFilmsProp) {

  const URLFilms = films
  const numberURLFilms = URLFilms.replace(/\D/g, "")

  return (
    <>
      {
        <ul className="filmsList">
          <li>
            <img
              className="imgFilms"
              src={`https://starwars-visualguide.com/assets/img/films/${numberURLFilms}.jpg`}
              alt=""
            /> 
          </li>
        </ul>
      }
    </>
  )
}