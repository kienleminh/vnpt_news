import React, {useState} from 'react';
import BlueTitle from './BlueTitle';
import LikeIcon from './Figure/LikeIcon.svg';
import CommentIcon from './Figure/CommentIcon.svg';
import YoutubeIcon from './Figure/YoutubeIcon.jpg';
import './css/Display.scss';


function VideoNews(props) {
    const [like, setLike] = useState(888);
    const [comment, setComment] = useState(888);
    return(
        <div>
            <BlueTitle title="Tin Video" />

            
        </div>
    );
}

export default VideoNews;