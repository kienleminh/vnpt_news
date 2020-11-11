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
        console.log(url)
        return url;
    }
    render() {
        const {item} = this.props;
        return(
            <>
                <div href={this.getURL(item)} className="VideoNews">
                    <div>
                        <video poster={item.img1} src={item.content} type="video/mp4" width="320px" height="185px" controls  style={{borderRadius: '20px'}}>
                        </video>
                        <a href={this.getURL(item)} style={{color:'black'}}>{item.title}</a>
    
                    </div>
                    <div className="Status">
                        Vnexpress . {item.createTime}
                        <StatusTab/>
                    </div>
    
                </div>
                
            </>
        );
    }
}

export default VideoNews;