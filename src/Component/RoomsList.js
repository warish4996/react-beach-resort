import React from 'react'
import Room from './Room'
import classes from '../App.module.css'

const RoomsList = ({rooms}) => {
    console.log(rooms)
    if(rooms.length === 0){
        return(
            <div className={classes.emptysearch}>
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
       <section className={classes.roomslist}>
        <div className={classes.roomslistcenter}>
            { rooms.map(item =>{
                return <Room key={item.id} room={item}/>
            })}

       </div>
       </section>     
    )
}

export default RoomsList
