import { useEffect, useState } from "react"
import { DetailStarShip } from "./detailStarShip"
import "../App.css"
import Paginated from "./paginated"
import { IStarship } from "../types/interfaces"

function ApiStarWars() {

  const [starShips, setStarShips] = useState<IStarship[]>([])
  const [itemStarShips, setItemStarShips] = useState<IStarship[]>([])
  const [page, setPage] = useState<number>(1)
  const [next, setNext] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url = `https://swapi.dev/api/starships/?page=${page}`

  function handleNextPage(): void {
    if(next != null) setPage(page+1);
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setIsLoading(false)
        setStarShips(res.results)
        setNext(res.next)
        setItemStarShips(itemStarShips.concat(res.results))
        console.log(res.next)
      });
  }, [page, url])

  return (

    <>
      <ul className="listStarShips" >
        { 
          itemStarShips.map((elem, index) => {

            return (
              <li key={elem.name}>

                <DetailStarShip
                  key={index}
                  ship={elem}
                />
              </li>
            )
          })
        }

        <Paginated
          handleNext={handleNextPage}
          isLoading={isLoading}
        />
      </ul>
    </>
  )
}

export default ApiStarWars