import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import {Link} from 'react-router-dom'
import classes from '../App.module.css'
import Services from '../Component/Services'
import FeaturedRooms from '../Component/FeaturedRooms'



const Home = () => {
    return (
       <>
       <Hero >
           <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at RS-5000">
               <Link to="/rooms" className={classes.btnprimary}>
                   Our Rooms
               </Link>
           </Banner>
       </Hero>
       <Services/>
      <FeaturedRooms/>
      
       </>
    )
}

export default Home
