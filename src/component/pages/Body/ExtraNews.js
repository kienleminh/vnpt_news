import React from 'react';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';

class ExtraNews extends React.PureComponent {
    
    render() {
        console.log(this.props.item);
        const {item} = this.props;
        return (
            <div>
    
                {/* <BlueTitle title={item.extratitle} link="/videonews" /> */}
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={item.img1} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{item.title}</div>
                        <div className="Status">Vietnamnet . {item.newsId} phút trước</div>
                    </div>
                </a>
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={item.img1} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{item.title}</div>
                        <div className="Status">Vietnamnet . {item.newsId} phút trước</div>
                    </div>
                </a>
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={item.img1} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{item.title}</div>
                        <div className="Status">Vietnamnet . {item.newsId} phút trước</div>
                    </div>
                </a>
                
            </div>
        )
    }
}

export default ExtraNews;