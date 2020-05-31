import React, { Component } from 'react';
import SlideShow from './slideShow/SlideShow';
import NavBar from './navBar/NavBar';

class Header extends Component{

    render(){
        return(
            <div className="header">
                <SlideShow />
                <NavBar />
            </div>
        )
    }
}

export default Header