import React, { Component } from 'react'; 
import MainNews from './MainNews';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import MainNewsImg from 'component/Figure/MainNewsImg.png';
import Right from './Right';
import SummarizedNews from './SummarizedNews';
import MoreNewsImg from 'component/Figure/MoreNewsImg.png';
import {VideoLink} from 'component/Video';
import 'component/css/Display.scss';
import BlueTitle from './BlueTitle';
import {NewsService} from 'services/NewsService';
import {HomeService} from 'services/HomeService';


class BodyHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            field: '',
            NewsById: [],
            RelatedList: [],
            Comment: [],
            Trans: [],
            a: '',
        };
    }
    componentDidMount() {
        this.getNewsList();
        this.getCateList();
    }
    getNewsList() {
        const params = {

        }
        NewsService.getNewsList(params, res => {
            console.log(res);
        })
    }
    getCateList() {
        const params = {

        }
        NewsService.getCateList(params, res => {
            console.log(res);
        })
    }
    getHome() {
        const params = {

        }
        HomeService.getHome(params, res => {
            console.log(res);
        })
    }
    render(){
    var News = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong toả trong thời gian dài',
        newsId: '6',
        img1: ExtraNewsImg,
    };
    const Videos = {
        title: 'Chính phủ họp bàn phương án cách ly xã hội sau 15/4',
        time: '6',
        vid: VideoLink,
    };
    var More = {
        title: 'Hơn 80 tấn gạo ủng hộ cho 2 \'ATM gạo\' ở Đà Nẵng',
        img: MoreNewsImg,
        time: '6',
    }
    return(
        <>
            <div className="body">
                <div className="Left">
                    <a href="/readingnews">
                    <MainNews title={News.title} img={MainNewsImg} />
                    </a>
                    <BlueTitle title="Xu hướng"/>
                    <ExtraNews item={News}/>
                    <BlueTitle title="Mới nhất"/>
                    <ExtraNews item={News}/>
                    <ExtraNews item={News} extratitle="Xã hội"/>
                    <ExtraNews item={News} extratitle="Sức khoẻ"/>
                    <ExtraNews item={News} extratitle="Giáo dục"/>
                    
                </div>
                <div className="Right">
                    <Right firBigtitle='Tin Video' secBigtitle='Tin Ảnh' thrBigtitle='Tin Audio' title={Videos.title} vid={Videos.vid} time={Videos.time}/>
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
}

export default BodyHome;