import React, {useState} from 'react';
import LikeIcon from 'component/Figure/LikeIcon.svg';
import CommentIcon from 'component/Figure/CommentIcon.svg';
import YoutubeIcon from 'component/Figure/YoutubeIcon.jpg';
import 'component/css/Display.scss';


function StatusTab() {
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(0);
    return (
        <div style={{float: 'right'}}>
            <a href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src={YoutubeIcon} alt="Youtube Icon" style={{height: '13px', width: '15px', marginRight: '16px'}}/>
            </a>
            <span  style={{marginRight: '7px'}} >{like}</span>
            <button style={{border: '0px', backgroundColor: '#FFFFFF'}} onClick={() => setLike(like+1)}>
                <img src={LikeIcon} alt="Like Icon"/>
            </button>
            <span style={{marginLeft: '7px', marginRight: '7px'}} >{comment}</span>
            <button style={{border: '0px', backgroundColor: '#FFFFFF'}} onClick={() => setComment(comment+1)}>
                <img src={CommentIcon} alt="Comment Icon"/>
            </button>
        </div>
    )
}

export default StatusTab;