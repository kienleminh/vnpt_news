import React from 'react';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import AuFile from 'component/Audio/Nang_tho_remix.mp3';
import 'component/css/Display.scss';

const BodyAudio = () => {
    const Audio = {
        topic: 'Audio',
        title: 'Người Mỹ chi hàng trăm triệu USD mỗi năm cho việc đọc sách',
        file: AuFile,
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
    return(
        <div className="body">
            <div className="SubNews">
                <a className="topic" href="/audionews" >{Audio.topic}</a>
                <div className="baiviet" style={{position: 'relative', maxWidth: '570px', paddingBottom: '11px'}}>
                    <audio controls src={Audio.file} autoPlay="true"/>
                    <div className="title" style={{width: '570px'}}>{Audio.title}</div>
                    <div className="menutitle" style={{font: 'normal normal 300 16px/18px Quicksand'}}>Vietnamnet . 6 phút trước</div>
                    
                </div>
                <ExtraNews title={Extra.title} img={Extra.img} time={Extra.time} extratitle={Extra.extratitle}/>
                <ExtraNews title={Extra2.title} img={Extra2.img} time={Extra2.time} extratitle={Extra2.extratitle}/>
            </div>
        </div>
    )
}

export default BodyAudio;