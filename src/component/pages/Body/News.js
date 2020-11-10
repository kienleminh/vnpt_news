import React from 'react';
import StatusTab from './Statustab';
import 'component/css/Display.scss';


class VideoNews extends React.PureComponent {
    getURL(params){
        let url = '/videonews?';
        url +=('newsId=' + params.newsId);
        url +=('&contentType='+params.contentType);
        console.log(url)
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
                        Vnexpress . {item.createTime}
                        <StatusTab/>
                    </div>
    
                </a>
                
            </>
        );
    }
}

export default VideoNews;