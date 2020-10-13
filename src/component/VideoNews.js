import React, {useState} from 'react';
import LikeIcon from './Figure/LikeIcon.svg';
import CommentIcon from './Figure/CommentIcon.svg';
import YoutubeIcon from './Figure/YoutubeIcon.jpg';
import './css/Display.scss';


function VideoNews(props) {
    const [like, setLike] = useState(888);
    const [comment, setComment] = useState(888);
    return(
        <div>
            <div className="VideoNews">
                <img src={props.img} alt="Video News Img" />
                <div>{props.title}</div>
                <div className="Status">
                    Vnexpress . {props.time} phút trước
                    <div style={{marginLeft: '60px'}}>
                        <a href="http://youtube.com/" >
                            <img src={YoutubeIcon} alt="Youtube Icon" style={{height: '13px', width: '15px', marginRight: '16px'}}/>
                        </a>
                        <span  style={{marginRight: '7px'}} >{like}</span>
                        <button onClick={() => setLike(like+1)}>
                            <img src={LikeIcon} alt="Like Icon"/>
                        </button>
                        <span style={{marginLeft: '7px', marginRight: '7px'}} >{comment}</span>
                        <button onClick={() => setComment(comment+1)}>
                            <img src={CommentIcon} alt="Comment Icon"/>
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default VideoNews;