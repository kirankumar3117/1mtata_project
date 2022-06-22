
// import { useRoutes } from 'react-router-dom';
import './App.css';
import { Route,Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage/Landingpage';
import Itempage from './pages/Itempage/Itempage';
import Individualitem from './components/Individualitem/Individualitem';
// import Navbar from './components/Navbar/Navbar';


function App() {
  // const {Routes,Route} =useRoutes()
  return (
    <div className="App">
    <Routes>
      <Route path={"/"} element={<Landingpage/>}/>
      <Route path={"otc/:name"} element={<Individualitem/>}/>
    </Routes>
    </div>
  );
}

export default App;