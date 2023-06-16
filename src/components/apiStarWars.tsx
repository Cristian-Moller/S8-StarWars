import { useEffect, useState } from "react"
import { DetailStarShip } from "./detailStarShip"
import "../App.css"
import Paginated from "./paginated"
import { IStarship } from "../types/interfaces"



function ApiStarWars() {

  const [starShips, setStarShips] = useState<IStarship[]>([])
  const [page, setPage] = useState<number>(1)
  const [next, setNext] = useState<number>()
  const [previous, setPrevious] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url = `https://swapi.dev/api/starships/?page=${page}`

  function handleNextPage(): void {
    if(next != null) setPage(page+1);
  }

  function handlepreviousPage(): void {
    if(previous != null && page - 1 > 0) setPage(page-1);
  }


  useEffect(() => {
    setIsLoading(true)
    console.log(isLoading)
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setIsLoading(false)
        setStarShips(res.results)
        setNext(res.next)
        setPrevious(res.previous)
        console.log(res.next)
        console.log(res.previous)
      });
  }, [page, url])

  return (

    <>
      <ul className="listStarShips" >
        {starShips.map((elem, index) => {

          return (
            <li key={elem.name}>

              <DetailStarShip
                key={index}
                ship={elem}
              />
            </li>
          )
        })}

        <Paginated
          page={page}
          handleNext={handleNextPage}
          handleprevious={handlepreviousPage}
          isLoading={isLoading}
        />
        {/* <div className="buttonPageContent">
          <Button className="buttonPage" text="Previous" handleClick={previousPage}/>
          <p>{page}</p> 
          <Button className="buttonPage" text="Next" handleClick={nextPage}/>
        </div> */}
      </ul>
    </>
  )
}

export default ApiStarWars