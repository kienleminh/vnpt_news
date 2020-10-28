import React, { Component } from 'react';
import 'component/css/Display.scss';

class MainNews extends Component {
    render() {
        return (
            <div className="MainNews">
                <div className="zoom-img">
                    <img src={this.props.img} alt="Main News Img"/>
                </div>
                <div style={{paddingTop: '16px', paddingBottom: '19px'}}>{this.props.title}</div>
            </div>
        )
    }
}

export default MainNews;