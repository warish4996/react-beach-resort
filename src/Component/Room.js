import React from 'react'
import classes from '../App.module.css';
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'


export default function Room(room) {
    const{ name, slug, images, price}= room.room
   
    return (
       <article className={classes.room}>
           <div className={classes.imgcontainer}>
               <img src={images[0] || defaultImg } alt="single room"/>
               <div className={classes.pricetop}>
                 <h6>RS:{price}</h6>
                 <p>per night</p>
               </div>
               <div className={classes.roomlink}>
               <Link to={`/rooms/${slug}`} className={classes.btnprimary}>
                   Feature
               </Link>
               </div>
               <p className={classes.roominfo}>{name}</p>
           </div>

       </article>
    )

}

Room.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.string.isRequired,

    })
}