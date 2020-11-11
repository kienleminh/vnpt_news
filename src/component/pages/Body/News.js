import React from 'react';
import StatusTab from './Statustab';
import 'component/css/Display.scss';


class VideoNews extends React.PureComponent {
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
            <>
                <a href={this.getURL(item)} className="VideoNews">
                    <div>
                        <img src={item.img1} width="320px" height="185px" style={{borderRadius: '20px'}}>
                        </img>
                        <a href={this.getURL(item)} style={{color:'black'}}>{item.title}</a>
    
                    </div>
                    <div className="Status">
                        {item.sourceName} . {item.createTime}
                        <StatusTab/>
                    </div>
    
                </a>
                
            </>
        );
    }
}

export default VideoNews;