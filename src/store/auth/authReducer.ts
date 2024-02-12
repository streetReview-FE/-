import { LOGIN_SUCCESS, LOGOUT } from "./authAction";

interface AuthState {
  token: string | null;
  isAuthenticataed: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticataed: false,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticataed: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticataed: false,
      };
    default:
      return state;
  }
};

export default authReducer;
