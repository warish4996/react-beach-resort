import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer,} from "react-icons/fa"
import classes from '../App.module.css'

export default class service extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:" cocktail is a mixed drink typically made with a distilled liquor (such as arrack, brandy, cachaça, gin, rum, tequila, vodka, or whiskey)"
            },
            {
                icon:<FaHiking/>,
                title:"Super Hiking",
                info:" Hiking, walking in nature as a recreational activity. Especially among those with sedentary occupations."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free ShuttleVan",
                info:" Metropolitan Shuttle offers easy, cost-effective, and stress-free group transportation"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:" So, you are the lover of beer... Well, pour yourself a cold one and get comfortable because there's a whole lot of great stuff."
            }
           
        ]
    }
       
        render() {
            return (
                <section className={classes.services}>
                   <Title title="Services"/>
                   <div className={classes.servicescenter}>
                       {this.state.services.map((item,index)=>{
                           return <article key={index} className={classes.service}>
                               <span>{item.icon}</span>
                               <h6>{item.title}</h6>
                               <p>{item.info}</p>
                           </article>
                       })}
                   </div>
                </section >
            )
        }
    }