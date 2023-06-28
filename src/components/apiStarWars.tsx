import { useEffect, useState } from "react"
import { DetailStarShip } from "./detailStarShip"
import "../App.css"
import { IStarship } from "../types/interfaces"
import InfiniteScroll from "react-infinite-scroll-component"

function ApiStarWars() {

  const [starShips, setStarShips] = useState<IStarship[]>([])
  const [itemStarShips, setItemStarShips] = useState<IStarship[]>([])
  const [page, setPage] = useState<number>(1)
  const [next, setNext] = useState<number|null>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url = `https://swapi.dev/api/starships/?page=${page}`

  const GetStarShip = () => {
    setIsLoading(true)
    if(next !== null) {
      setPage(page+1);
    } 
    fetch(url)
    .then(res => res.json())
    .then((res) => {
      if(res.results){
        setIsLoading(false)
        setStarShips(res.results)
        setNext(res.next)
        setItemStarShips(itemStarShips.concat(res.results))
      }
    })
  }

  useEffect(() => {
    GetStarShip()
  }, [])

  function refresh() {
    throw new Error("Function not implemented.")
  }

  return (

    <>
    
      <InfiniteScroll
        dataLength={itemStarShips.length} //This is important field to render the next data
        next={GetStarShip}
        hasMore={ (next !== null) && true}
        loader={isLoading && <h4>Loading...</h4>}
        endMessage={ 
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={1}
      >
        <ul className="listStarShips" >
          { 
            itemStarShips.map((elem, index) => {

              console.log('ship',elem.name)
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
        </ul>
      </InfiniteScroll>
    </>
  )
}

export default ApiStarWars