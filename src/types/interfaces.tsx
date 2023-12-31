
export interface IStarship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
  url: string;
  films: string[];
  pilots: string[];
}

export interface IStarshipProp {
  ship: IStarship;
  onClick?: () => void;
}
export interface IPilotsProp {
  pilots: string[];
}

export interface IFilmsProp {
  films: string[];
}

export interface IButton {
  text: string;
  handleClick: () => void;
  className: string;
  isLoading: boolean;
}
export interface IPaginated {
  handleNext: () => void;
  isLoading: boolean;
}
