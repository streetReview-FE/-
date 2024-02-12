import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/auth/authAction";

const RedirectionPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //가입한 유저 이동 페이지
  const handleHome = () => {
    navigate("/");
    window.location.reload();
  }

  //url code부분 추출
  const params  = new URLSearchParams(window.location.search);
  const code = params.get("code");
  console.log("code : ",code);

  const handleAuth = async (code:any) => {
    const data = {
      code : code,
    };
    try {
      const BASE_URL = process.env.REACT_APP_BASE_URL;
      const res = await axios.post(`${BASE_URL}/member/oauth2/google`, data);
      if(res.status === 200){
        localStorage.setItem('token', res.data.accessToken);
        dispatch(loginSuccess(res.data.accessToken));
        handleHome();
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
      const params  = new URLSearchParams(window.location.search);
      const code = params.get("code");
      console.log("code : ",code);
      if(code) {
        handleAuth(code);
      }else {
        console.log("로그인 재시도하세요.");
      }
    },[code, navigate]);

  if(loading) {
    return <div>로그인중입니다... 잠시만 기다려주세요!</div>
  }

  return null;
};

export default RedirectionPage;