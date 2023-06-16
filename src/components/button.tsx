import { IButton } from "../types/interfaces";


export function Button({text, handleClick, className, isLoading}: IButton) {

  return (
    <button onClick={handleClick} className={className} disabled={isLoading}>
      {text}
    </button>
  )
}