import React from 'react';
import 'component/pages/Body/ExtraNew.scss';
import {NewsService} from 'services/NewsService';

class ExtraNews extends React.PureComponent {
    
    render() {
        const {item} = this.props;
        return (
            <div>
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={item.img1} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{item.title}</div>
                        <div className="Status">{item.sourceName} . {NewsService.convertedTime(item.createTime)}</div>
                    </div>
                </a>
                
            </div>
        )
    }
}

export default ExtraNews;