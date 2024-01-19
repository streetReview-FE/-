import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RedirectionPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const params  = new URLSearchParams(window.location.search);
      const code = params.get("code");

      console.log(code);

      if(!code) {
        console.error('error: login fail');
        navigate('/login');
        return;
      }
      try {
        const res = await axios.post("http://localhost:8085/member/oauth2/google", {code});
        localStorage.setItem('token', res.data.accessToken);
        navigate('/home');
      }catch(error) {
        console.log('error : ',error);
        navigate('/login');
      }finally {
        setLoading(false);
      }
    };
    handleAuth();
  },[navigate]);
  return (
    <>
    로그인중입니다... 잠시만 기다려주세요!
    </>
  )
}

export default RedirectionPage;