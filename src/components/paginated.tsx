import { IPaginated } from "../types/interfaces";
import { Button } from "./button";

function Paginated({handleNext, isLoading}: IPaginated) {

  return (
    <div className="buttonPageContent">
      <Button className="buttonPage" text="View more" handleClick={handleNext} isLoading={isLoading} />
    </div>
  )
}

export default Paginated