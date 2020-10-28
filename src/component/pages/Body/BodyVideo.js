import React from 'react';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import 'component/css/Display.scss';
import {VideoLink} from 'component/Video';

function BodyVideo() {
    const Video = {
        topic: 'Video',
        title: 'Người Mỹ chi hàng trăm triệu USD mỗi năm cho việc đọc sách',
    }
    var Extra = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong tỏa trong thời gian dài',
        time: 6,
        img: ExtraNewsImg,
        extratitle: 'Tin cùng chủ đề',
    }
    var Extra2 = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong tỏa trong thời gian dài',
        time: 6,
        img: ExtraNewsImg,
        extratitle: 'Xem nhiều',
    }
    return (
        <div className="body">
            <div className="SubNews">
                <a className="topic" href="/videonews" >{Video.topic}</a>
                <div className="baiviet" style={{position: 'relative', maxWidth: '570px', paddingBottom: '11px'}}>
                    <video width="520px" height="332px" controls autoPlay>
                        <source src={VideoLink} type="video/mp4"></source>
                    </video>
                    <div className="title" style={{width: '570px'}}>{Video.title}</div>
                    <div className="menutitle" style={{font: 'normal normal 300 16px/18px Quicksand'}}>Vietnamnet . 6 phút trước</div>
                    
                </div>
                <ExtraNews title={Extra.title} img={Extra.img} time={Extra.time} extratitle={Extra.extratitle}/>
                <ExtraNews title={Extra2.title} img={Extra2.img} time={Extra2.time} extratitle={Extra2.extratitle}/>
            </div>
        </div>
    )
}

export default BodyVideo;