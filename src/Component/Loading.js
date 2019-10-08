import React from 'react'
import classes from '../App.module.css'
import loadingGif from '../images/gif/loading-arrow.gif' 

export default function Loding() {
    return (
        <div className={classes.loading}>
            <h4>rooms data is loading...</h4>
            <img src={loadingGif} alt=""/>
            
        </div>
    )
}
