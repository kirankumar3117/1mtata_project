
import './App.css';
import Listofitems from './components/ListOfItems/Listofitems';
import Navbar from "./components/Navbar/Navbar"
import Searchbar from './components/Searchbar/Searchbar';
import Slidebar from './components/Slidebar_offerlist/Slidebar';
import Footer from "./components/Footer/Footer"
import FeaturedBrands from './components/FeaturedBrands/FeaturedBrands';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Searchbar/>
   <Listofitems/>
   <Slidebar/> 
   <FeaturedBrands/>
<Footer/>
 
   <div></div>
   <div></div>
    </div>
  );
}

export default App;
