import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Loading from './Loading'
import Title from './Title'
import Room from './Room'
import classes from '../App.module.css';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext ;
    render() {
        let { loading,featuredRooms :rooms}=this.context
        

        rooms= rooms.map( room=>{
            return <Room key={room.id} room={room}/>
           
        })
        
        return (
            <section className={classes.featuredrooms}>
                <Title title="featured rooms"/>
                <div className={classes.featuredroomscenter}>
                    {loading ? <Loading/>:rooms}
                </div>
            </section>
        )
    }
}
