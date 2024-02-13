import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/auth/authAction";
import { useAuth } from "../../utils/AuthenticationContext";

const RedirectionPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {setIsAuthenticated} = useAuth();

  // //가입한 유저 이동 페이지
  // const handleHome = () => {
  //   navigate("/");
  //   // window.location.reload();
  // }

  const handleAuth = async (code:any) => {
    const data = {code};
    try {
      const res = await axios.post("/member/oauth2/google", data, {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control" : "no-cache, no-store, max-age=0, must-revalidate"
        },
      });
      if(res.status === 200){
        console.log("access_toekn : ", res.data.data.accessToken);
        localStorage.setItem('token', res.data.data.accessToken);
        setIsAuthenticated(true);
        dispatch(loginSuccess(res.data.data.accessToken));
        navigate("/");
      }else {
        throw new Error("로그인 실패");
      }
    }catch(error) {
      console.log('error : ',error);
      navigate('/login');
    }finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      const code  = new URLSearchParams(window.location.search).get("code");
      console.log("code : ",code);
      if(code) {
        handleAuth(code);
      }else {
        console.log("로그인 재시도하세요.");
        navigate('/login');
      }
    },[navigate, dispatch]);

  if(loading) {
    return <div>로그인중입니다... 잠시만 기다려주세요!</div>
  }

  return null;
};

export default RedirectionPage;