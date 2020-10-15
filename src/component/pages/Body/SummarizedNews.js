import React from 'react';
import BlueTitle from './BlueTitle';
import MoreNewsImg from 'component/Figure/MoreNewsImg.png';
import StatusTab from './Statustab';
import 'component/css/Display.scss';

function SummarizedNews(props) {
    return (
        
        <div className="subSummarized">
            <BlueTitle title={props.extratitle} />
            <div className="VideoNews">
                <img src={MoreNewsImg} alt="Video News Img" />
                <div>{props.title}</div>
                <div className="Status">
                    Vietnamnet . {props.time} phút trước
                    <StatusTab/>
                </div>
            </div>

        </div>
            
        
    )
}

export default SummarizedNews;