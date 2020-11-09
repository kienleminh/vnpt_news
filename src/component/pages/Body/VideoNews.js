import React from 'react';
import StatusTab from './Statustab';
import 'component/css/Display.scss';


function VideoNews(props) {
    const {item} = props;
    return(
        <div>
            <div className="VideoNews">
                <div>
                    <video poster={item.img1} src={item.content} type="video/mp4" width="320px" height="185px" controls  style={{borderRadius: '20px'}}>
                    </video>
                    <a href="/videonews" style={{color:'black'}}>{props.title}</a>

                </div>
                <div className="Status">
                    Vnexpress . {item.createTime}
                    <StatusTab/>
                </div>

            </div>
            
        </div>
    );
}

export default VideoNews;