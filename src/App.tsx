import { Provider } from 'react-redux';
import './App';
import Router from './Router';
import { GlobalStyle } from './Styles/GlobalStyle';
import GoogleMaps from './components/GoogleMaps';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
    <div id='App'>
      <GoogleMaps/>
      <GlobalStyle/>
      <Router/>
    </div>
    </Provider>
  )
}


  export default App;