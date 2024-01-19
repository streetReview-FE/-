import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GoogleMaps from './components/GoogleMaps';
import MainPage from './Pages/MainPage';
import Login from './components/Login/GoogleLogin';
import RedirectionPage from './components/Login/redirectionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/googleMap" element={<GoogleMaps/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/google/auth" element={<Login/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;