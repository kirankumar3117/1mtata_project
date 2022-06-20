import React from 'react'
import FeaturedBrands from '../../components/FeaturedBrands/FeaturedBrands'
import Healthcare_products from '../../components/Healthcare_product/Healthcare_products'
import Listofitems from '../../components/ListOfItems/Listofitems'
import Navbar from '../../components/Navbar/Navbar'
import Searchbar from '../../components/Searchbar/Searchbar'
import Slidebar from '../../components/Slidebar_offerlist/Slidebar'
import Topseller_product from '../../components/topseller_product/Topseller_product'
import PopularCatogery from "../../components/PopularCatogery/PopularCatogery"
import Ashwaganda_Landing from '../../components/Ashwaganda_Landing/Ashwaganda_Landing'
import Healthconcern from '../../components/Healthconcern/Healthconcern'
import Footer from '../../components/Footer/Footer'

const Landingpage = () => {
  return (
    <div>
        <Navbar/>
        <Searchbar/>
        <Listofitems/>
        <Slidebar/> 
        <FeaturedBrands/>
        <Topseller_product/>
        <Healthcare_products/>
        <PopularCatogery/>
        <Ashwaganda_Landing/>
        <Healthconcern/>
        <Footer/>
    </div>
  )
}

export default Landingpage