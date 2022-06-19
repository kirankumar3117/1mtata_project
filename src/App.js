
import './App.css';
import Listofitems from './components/ListOfItems/Listofitems';
import Navbar from "./components/Navbar/Navbar"
import Searchbar from './components/Searchbar/Searchbar';
import Slidebar from './components/Slidebar_offerlist/Slidebar';
import Footer from "./components/Footer/Footer"
import FeaturedBrands from './components/FeaturedBrands/FeaturedBrands';
import PopularCatogery from './components/PopularCatogery/PopularCatogery';
import Healthconcern from './components/Healthconcern/Healthconcern';
import Topseller_product from './components/topseller_product/Topseller_product';
import Healthcare_products from './components/Healthcare_product/Healthcare_products';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Searchbar/>
   <Listofitems/>
   <Slidebar/> 
   <FeaturedBrands/>
   <Topseller_product/>
   <Healthcare_products/>
   <PopularCatogery/>
   <Healthconcern/>
  
<Footer/>
 
   <div></div>
   <div></div>
    </div>
  );
}

export default App;
