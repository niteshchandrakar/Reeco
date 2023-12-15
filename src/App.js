import './App.css';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import OrderDetails from './Components/OrderDetails';
import OrderMainDetails from './Components/OrderMainDetails';


function App() {
  return (
    <div className="App">
     <Header/>
     <OrderMainDetails/>
     <OrderDetails/>
     <MainContainer/>
    </div>
  );
}

export default App;
