import React from 'react'
import classes from '../App.module.css'


const Banner = (props) => {
    return (
        <div className={classes.banner}>
            <h1>{props.title}</h1>
            <div/>
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    )
}

export default Banner
