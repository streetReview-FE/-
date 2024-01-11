import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GoogleMaps from './components/GoogleMaps';
import MainPage from './Pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/googleMap" element={<GoogleMaps/>}></Route>
        <Route path="/" element={<MainPage/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;