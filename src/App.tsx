import './App';
import MobileRouter from "./MobileRouter";
import Router from './Router';
import { GlobalStyle } from './Styles/GlobalStyle';
import GoogleMaps from './components/GoogleMaps';

const App = () => {
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isMobile = window.innerWidth <= 480;
  console.log(isMobile);
  return (
    <div id='App'>
      <GoogleMaps/>
      <GlobalStyle/>
      {isMobile ? <MobileRouter/> : <Router/>}
    </div>
  )
}


  export default App;