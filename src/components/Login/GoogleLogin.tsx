import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthenticationContext";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated,setIsAuthenticated } = useAuth();

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRCT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const hadleLoginBtn = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRCT_URI}&response_type=code&scope=email%20profile`;
  };

  const handleLogoutBtn = () => {
    setIsAuthenticated(false);
    navigate('/');
  }

  return (
    <>
      {isAuthenticated ? (
        <button onClick={handleLogoutBtn}>Logout</button>
      ) : (
        <button onClick={hadleLoginBtn}>Google Login</button>
      )}
    </>
  )
};

export default Login;