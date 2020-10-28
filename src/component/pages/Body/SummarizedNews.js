import React from 'react';
import BlueTitle from './BlueTitle';
import MoreNewsImg from 'component/Figure/MoreNewsImg.png';
import StatusTab from './Statustab';
import AudioNews from './AudioNews';
import 'component/css/Display.scss';

function SummarizedNews(props) {
    return (
        <div className="subSummarized" style={{borderBottom: '0px'}}>
            <div className="subSummarized">
                <BlueTitle title={props.extratitle} link="/readingnews"/>
                <div className="VideoNews">
                    <img src={MoreNewsImg} alt="Video News Img" />
                    <div>{props.title}</div>
                    <div className="Status">
                        Vietnamnet . {props.time} phút trước
                        <StatusTab/>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '15px'}}>
                <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
            </div>
        </div>
            
        
    )
}

export default SummarizedNews;