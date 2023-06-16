import { IPaginated } from "../types/interfaces";
import { Button } from "./button";

function Paginated({page, handleNext, handleprevious, isLoading}: IPaginated) {

  return (
    <div className="buttonPageContent">
      <Button className="buttonPage" text="Previous" handleClick={handleprevious} isLoading={isLoading} />
        <p>{page}</p> 
      <Button className="buttonPage" text="Next" handleClick={handleNext} isLoading={isLoading} />
    </div>
  )
}

export default Paginated