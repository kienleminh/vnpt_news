import React from 'react';
import 'component/pages/Body/ExtraVideo.scss';
import {NewsService} from 'services/NewsService';

class ExtraVideo extends React.PureComponent {
    getURL(params){
        let url = '/videonews?';
        url +=('newsId=' + params.newsId);
        url +=('&contentType='+params.contentType);
        return url;
    }
    render() {
        const {item} = this.props;
        return (
            <div>
                <a href={this.getURL(item)} className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '12px'}}>
                            <img src={item.img1} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px', fontWeight:'bolder'}}>
                        <div>{item.title}</div>
                        <div className="Status">{item.sourceName} . {NewsService.convertedTime(item.createTime)}</div>
                    </div>
                </a>
                
            </div>
        )
    }
}

export default ExtraVideo;