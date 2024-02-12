export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (token: string) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
