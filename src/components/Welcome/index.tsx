import React, { Component } from "react";

import mostViewedPost from '../../assets/img/post3.jpg'

import './styles.scss'

export default class Welcome extends Component {
    render () {
        return (
            <div className="welcome-container">
                <div className="most-viewed-post">
                    <img src={ mostViewedPost } alt="most viewed post" className="most-viewed-post-img"/>
                </div>
                <div className="welcome-carousel">
                    
                </div>
            </div>
        )
    }
}