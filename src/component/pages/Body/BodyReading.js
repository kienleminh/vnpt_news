import React from 'react';
import MainNews from './MainNews';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import MainNewsImg from 'component/Figure/MainNewsImg.png';
import 'component/css/Display.scss';


function BodyReading() {
    var News = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong toả trong thời gian dài',
        time: '6',
        img: ExtraNewsImg,
    };
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
        </div>
        
        </>
    )
}

export default BodyReading;