import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('token');

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRCT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const hadleLoginBtn = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRCT_URI}&response_type=code&scope=email%20profile`;
  };

  const handleLogoutBtn = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/');
  }

  return (
    <>
      {accessToken ? (
        <button onClick={handleLogoutBtn}>Logout</button>
      ) : (
        <button onClick={hadleLoginBtn}>Google Login</button>
      )}
    </>
  )
};

export default Login;