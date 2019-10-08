import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'

import Banner from '../Component/Banner'
import {Link} from 'react-router-dom'
import { RoomContext } from '../Context'
import classes from '../App.module.css';
import StyledHero from '../Component/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state={
            slug:this.props.match.params.slug,defaultBcg
    }
    }

    static contextType = RoomContext;
    render() {
        let { getRoom }=this.context
        const room = getRoom(this.state.slug);
         console.log(room)
         if(!room){
             return <div className={classes.error}>
                 <h3>no such room could found...</h3>
                 <Link to="/rooms" className={classes.btnprimary}>
                     back to rooms
                 </Link>
             </div>

         }
         const {name,description,capacity,price,extras,breakfast,pets,images}=room
         const [mainImage,...restofImage]=images
         
        return (
            <>
            <StyledHero img={mainImage || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                <Link to="/rooms" className={classes.btnprimary}>
                     back to rooms
                 </Link>
                </Banner>
            </StyledHero>
            <section className={classes.singleroom}>
                <div className={classes.singleroomimages}>
                    {restofImage.map((item,index)=>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className={classes.singleroominfo}>
                    <article className={classes.desc}>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className={classes.info}>
                        <h3>info</h3>
                        <h6>price:Rs-{price}</h6>
                        <h6>max capacity:{
                            capacity > 1 ? `${capacity} people`:`${capacity} person`
                        }</h6>
                        <h6>{pets ? 'pets allowed' :'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className={classes.roomextras}>
                <h6>extras</h6>
                <ul className={classes.extras}>
                    {extras.map((item,index)=>{
                        return <li key={index}>-  {item}</li> 
                    })}
                </ul>
            </section>
            </>
        )
    }
}
