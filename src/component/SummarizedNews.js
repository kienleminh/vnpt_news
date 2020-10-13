import React, {useState} from 'react';
import BlueTitle from './BlueTitle';
import MoreNewsImg from './Figure/MoreNewsImg.png';
import LikeIcon from './Figure/LikeIcon.svg';
import CommentIcon from './Figure/CommentIcon.svg';
import './css/Display.scss';

function SummarizedNews(props) {
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(0);
    return (
        
        <div className="subSummarized">
            <BlueTitle title={props.extratitle} />
            <div className="VideoNews">
                <img src={MoreNewsImg} alt="Video News Img" />
                <div>{props.title}</div>
                <div className="Status">
                    Vietnamnet . {props.time} phút trước
                    <span style={{marginLeft: '119px'}}>
                        <span  style={{marginRight: '7px'}} >{like}</span>
                        <button onClick={() => setLike(like+1)}>
                            <img src={LikeIcon} alt="Like Icon"/>
                        </button>
                        <span style={{marginLeft: '7px', marginRight: '7px'}} >{comment}</span>
                        <button onClick={() => setComment(comment+1)}>
                            <img src={CommentIcon} alt="Comment Icon"/>
                        </button>
                    </span>
                </div>
            </div>

        </div>
            
        
    )
}

export default SummarizedNews;