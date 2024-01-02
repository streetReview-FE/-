import {
  State,
  SET_ADDRESS,
  ActionTypes,
  SET_COORDINATES,
} from "../constants/interface";

const initialState: State = {
  address: "",
  coordinates: { lat: 37.5665, lng: 126.978 },
};

const MapReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_COORDINATES:
      return { ...state, coordinates: action.payload };
    default:
      return state;
  }
};

export default MapReducer;
