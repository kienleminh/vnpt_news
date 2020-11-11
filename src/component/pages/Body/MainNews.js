import React, { Component } from 'react';
import 'component/css/Display.scss';

class MainNews extends Component {
    getURL(params){
        let url = '/';
        if(params.contentType===0){url += 'readingnews?'}
        else if(params.contentType===1){url += 'videonews?'}
        else if(params.contentType===2){url += 'imagenews?'}
        else {url += 'audionews?'}
        url +=('newsId=' + params.newsId);
        url +=('&contentType='+params.contentType);
        return url;
    }
    render() {
        const {item}=this.props;
        return (
            <a href={this.getURL(item)} className="MainNews">
                <div className="zoom-img">
                    <img src={item.img1} alt="Main News Img" style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                    {/* {this.props.title} */}
                </div>
                <div style={{paddingTop: '16px', paddingBottom: '19px'}}>{item.title}</div>
            </a>
        )
    }
}

export default MainNews;