import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import classes from '../App.module.css'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <Hero >
        <Banner title="404" subtitle="Page Not Found">
            <Link to="/" className={classes.btnprimary}>
                Return Home
            </Link>
        </Banner>
    </Hero>
    )
}

export default Error
