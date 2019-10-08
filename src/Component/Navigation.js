import React, { Component } from 'react'
import logo from '../images/logo.svg'
import classes from '../App.module.css'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    state={
        isopen:false
    }

    handeltoggle=()=>{
        this.setState({isopen:!this.state.isopen})
    }
    render() {
        
        return (
            <nav className={classes.navbar}>
                <div className={classes.navcenter}>
                    <div className={classes.navheader}>
                    <Link to='/'>
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button className={classes.navbtn} onClick={this.handeltoggle}>
                        <FaAlignRight className={classes.navicon}/>
                    </button>
                    </div>
                    <ul
                    className={this.state.isopen ? classes.shownav: classes.navlinks}
                    >
                        <li >
                           <Link to="/" className={classes.navlinksa}>Home</Link>
                        </li>
                        <li >
                           <Link to="/rooms" className={classes.navlinksa}>Rooms</Link>
                        </li>
                        
                    </ul>
                </div>
                
            </nav>
        )
    }
}
