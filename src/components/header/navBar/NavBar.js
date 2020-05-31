import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component{

    render(){
        return(
            <div className="nav-bar">
                <a href="/">Food Supplies</a>
                <div className="nav">
                    <div className="upper-bar">
                        upper bar
                    </div>
                    <div className="lower-bar">
                        lower bar
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar