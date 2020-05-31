import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './slideShow.css';

class SlideShow extends Component {

    render() {
        const slideImages = [
            'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            'https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
            'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
        ];

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            pauseOnHover: false,
            onChange: (oldIndex, newIndex) => {
                console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
        }

        return (
            <div className="slide-show">
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default SlideShow