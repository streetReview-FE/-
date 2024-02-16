import { Action, AnyAction } from "@reduxjs/toolkit";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface State {
  address: string;
  coordinates: Coordinates;
}
export interface StoreState {
  map: {
    address: string;
    coordinates: Coordinates;
  };
}
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_COORDINATES = "SET_COORDINATES";

interface setAddressAction extends Action<typeof SET_ADDRESS> {
  payload: string;
}

interface SetCoordinatesAction extends Action<typeof SET_COORDINATES> {
  payload: Coordinates;
}

export type ActionTypes = setAddressAction | SetCoordinatesAction | AnyAction;

export interface ArrowProps {
  currentIndex: number;
  maximumItems: number;
  arrayLength?: number;
  onHandler: () => void;
}

export interface GetPostListProps {
  coordinate: Coordinates;
  reviews: Review[];
}

export interface Tag {
  value: string;
}

export interface Review {
  streetName: string;
  streetAddress: string;
  reviewCount: number;
  likey: number;
  tagsList: Tag[];
  photoList: string[];
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GeocodeResult {
  status: string;
  results: {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
      location_type: string;
    };
    place_id: string;
    plus_code?: {
      compound_code: string;
      global_code: string;
    };
    types: string[];
  }[];
}

export interface menuTypes {
  label: string;
  isSelected: boolean;
  id: number;
}
