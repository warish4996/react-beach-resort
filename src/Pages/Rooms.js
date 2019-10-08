import React from 'react'
import Hero from '../Component/Hero'
import classes from '../App.module.css'
import Banner from '../Component/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../Component/RoomContainer'

const Rooms = () => {
    return (
        <>
        <Hero hero={classes.roomsHero}>
        <Banner title="Our Rooms" >
            <Link to="/" className={classes.btnprimary}>
                return Home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>
    </>
    )
}

export default Rooms
