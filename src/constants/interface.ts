export interface Coordinates {
  lat: number;
  lng: number;
}

export interface State {
  address: string;
  coordinates: Coordinates;
}

export const SET_ADDRESS = "SET_ADDRESS";
export const SET_COORDINATES = "SET_COORDINATES";

interface setAddressAction {
  type: typeof SET_ADDRESS;
  payload: string;
}

interface SetCoordinatesAction {
  type: typeof SET_COORDINATES;
  payload: Coordinates;
}

export type ActionTypes = setAddressAction | SetCoordinatesAction;

export interface ArrowProps {
  currentIndex: number;
  maximumItems: number;
  arrayLength?: number;
  onHandler: () => void;
}
