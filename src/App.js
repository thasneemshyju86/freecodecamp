
import {Provider} from 'react-redux'
import store from './store';
import './features/cartSlice'
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
    
     <Navbar/>
     <CartContainer/>
     </Provider>
    </div>
  );
}

export default App;
