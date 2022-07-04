
// import { useRoutes } from 'react-router-dom';
import './App.css';
import { Route,Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage/Landingpage';
import Itempage from './pages/Itempage/Itempage';
import Individualitem from './components/Individualitem/Individualitem';
import Login from './components/Login/Login';
import Cart from './Cart/Cart';


function App() {
  // const {Routes,Route} =useRoutes()
  return (
    <div className="App">
     <Routes>
      <Route path={"/"} element={<Landingpage/>}/>
      <Route path={"otc/:name/otc/:id"} element={<Individualitem/>}/>
    </Routes>    
    {/* <Cart/> */}
    </div>
  );
}

export default App;
