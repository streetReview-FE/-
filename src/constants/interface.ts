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
  id: number;
  streetName: string;
  streetAddress: string;
  reviewCount: number;
  likey: number;
  tagsList: Tag[];
  photoList: string[];
  x: number;
  y: number;
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

export interface RequestStreet {
  streetAddress: string;
  streetName: string;
  x: number;
  y: number;
  tagList: { value: string }[];
}

// 상세정보
export interface StreetDetail {
  streetName: string;
  streetAddress: string;
  x: number;
  y: number;
  reviewCount: number;
  content: string;
  likey: number;

  photoList: string[];
  tagsList: Tag[];
}
export interface ReviewDetail {
  content: string;
  likey: number;
  createdDate: string; 
  updatedDate: string;
  member: {
    memberId: number;
    providerId: string;
    email: string;
    nickName: string;
    picture: string;
  };
  photoList: string[];
}

export interface ImgPorpLocationState {
  id: string;
}