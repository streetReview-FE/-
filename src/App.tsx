import './App';
import Router from './Router';
import { GlobalStyle } from './Styles/GlobalStyle';
import GoogleMaps from './components/GoogleMaps';

const App = () => {
  return (
    <div id='App'>
      <GoogleMaps/>
      <GlobalStyle/>
      <Router/>
    </div>
  )
}


  export default App;