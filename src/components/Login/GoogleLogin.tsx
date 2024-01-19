import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_ID_KEY;
  const REDIRCT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const hadleLoginBtn = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRCT_URI}&response_type=code&scope=email%20profile`;
  };

  return (
    <>
    <button onClick={hadleLoginBtn}>Google Login</button>
    </>
  )
};

export default Login;