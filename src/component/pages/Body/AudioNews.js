import React from 'react';
import 'component/css/Display.scss';

class AudioNews extends React.Component{
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
        const {item} = this.props;
        return(
            <a className='AudioNews' href={this.getURL(item)}>
                <div className="zoom-img">
                    <img src={item.img1} alt="Audio News Img"/>
                </div>
                <div>
                    <div className="title">
                        {item.title}
                    </div>
                    <div className="Status">{item.sourceName} . {item.createTime}</div>
                </div>
            </a>
        )

    }
}

export default AudioNews;