import React from 'react';
import MainNews from './MainNews';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from './Figure/ExtraNewsImg.png';
import MainNewsImg from './Figure/MainNewsImg.png';
import VideoNewsImg from './Figure/VideoNewsImg.png';
import Right from './Right';
import SummarizedNews from './SummarizedNews';
import MoreNewsImg from './Figure/MoreNewsImg.png';
import './css/Display.scss';


function Body() {
    var News = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong toả trong thời gian dài',
        time: '6',
        img: ExtraNewsImg,
    };
    var Videos = {
        title: 'Chính phủ họp bàn phương án cách ly xã hội sau 15/4',
        time: '6',
        img: VideoNewsImg,
    };
    var More = {
        title: 'Hơn 80 tấn gạo ủng hộ cho 2 \'ATM gạo\' ở Đà Nẵng',
        img: MoreNewsImg,
        time: '6',
    }
    return(
        <>
        <div className="Body">
            <div className="Left">
                <MainNews title={News.title} img={MainNewsImg} />
                <ExtraNews title={News.title} img={News.img} time={News.time} extratitle="Xu hướng"/>
                <ExtraNews title={News.title} img={News.img} time={News.time} extratitle="Mới nhất"/>
                <ExtraNews title={News.title} img={News.img} time={News.time} extratitle="Xã hội"/>
                <ExtraNews title={News.title} img={News.img} time={News.time} extratitle="Sức khoẻ"/>
                <ExtraNews title={News.title} img={News.img} time={News.time} extratitle="Giáo dục"/>
            </div>
            <div className="Right">
                <Right firBigtitle='Tin Video' secBigtitle='Tin Ảnh' thrBigtitle='Tin Audio' title={Videos.title} img={Videos.img} time={Videos.time}/>
            </div>
        </div>
        <div className="SummarizedNews">
            <SummarizedNews title={More.title} img={More.img} time={More.time} extratitle="Văn hoá"/>
            <SummarizedNews title={More.title} img={More.img} time={More.time} extratitle="Xã hội" />
            <SummarizedNews title={More.title} img={More.img} time={More.time} extratitle="Thể thao" />
        </div>
        
        </>
    )
}

export default Body;