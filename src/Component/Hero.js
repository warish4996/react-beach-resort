import React from 'react'
import classes from '../App.module.css'

const Hero = (props) => {
    return (
        <div>
            <header className={props.hero}>
               {props.children}
            </header>
        </div>
    )
}

Hero.defaultProps={
    hero:classes.defaultHero
}

export default Hero
