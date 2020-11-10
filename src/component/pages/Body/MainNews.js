import React, { Component } from 'react';
import 'component/css/Display.scss';

class MainNews extends Component {
    getURL(params){
        let url = '/readingnews?';
        url +=('newsId=' + params.newsId);
        url +=('&contentType='+params.contentType);
        console.log(url)
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