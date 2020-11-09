import React, { Component } from 'react'; 
import MainNews from './MainNews';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import MainNewsImg from 'component/Figure/MainNewsImg.png';
import SummarizedNews from './SummarizedNews';
import MoreNewsImg from 'component/Figure/MoreNewsImg.png';
import 'component/css/Display.scss';
import BlueTitle from './BlueTitle';
import {NewsService} from 'services/NewsService';
import VideoNews from './VideoNews';
import ImgNews from './ImgNews';
import AudioNews from './AudioNews';

class BodyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: [],
            Trending: [],
            Lastest: [],
            Video: [],
            Social: [],
            Economic: [],
            Life: [],
            Audio: [],
        };
    }
    componentDidMount() {
        this.getTrending();
        this.getLastest();
        this.getVideo();
        this.getCateList();
        this.getCateSoc();
        this.getCateEco();
        this.getCateLife();
        this.getCateAudio();
    }
    getCateList() {
        const params = {}
        NewsService.getCateList(params, res => {
            this.setState({
                
            })
        })
    }
    getLastest() {
        const params = {
            contentType: 0,
            orderType: 0,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Lastest: res.data,
            })
        });
    }
    getTrending() {
        const params = {
            contentType: 0,
            trending: 1,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Trending: res.data,
            })
        });
    }
    getVideo() {
        const params = {
            orderType: 0,
            contentType: 1,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Video: res.data,
            })
        });
    }
    getCateSoc() {
        const params = {
            contentType: 0,
            cateId: 31,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Social: res.data,
            })
        });
    }
    getCateEco() {
        const params = {
            contentType: 0,
            cateId: 34,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Economic: res.data,
            })
        });
    }
    getCateLife() {
        const params = {
            contentType: 0,
            cateId: 40,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Life: res.data,
            })
        });
    }
    getCateAudio() {
        const params = {
            contentType: 3,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                Audio: res.data,
            })
        });
    }
    renderCate = (CateList) => {
        let List = CateList.map((data, index) =>
            <>
                <ExtraNews item={data}></ExtraNews>
            </>
        );
        return List;
    }
    renderVideo = (CateList) => {
        let List = CateList.map((data, index) =>
            <>
                <VideoNews item={data}></VideoNews>
            </>
        );
        return List;
    }
    render(){
    var News = {
        title: 'Nghiêm túc cách ly xã hội trong thời gian ngắn để không phải phong toả trong thời gian dài',
        newsId: '6',
        img1: ExtraNewsImg,
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
                    <>
                        {this.renderCate(this.state.Trending)}
                    </>
                    <BlueTitle title="Mới nhất"/>
                    <>
                        {this.renderCate(this.state.Lastest)}
                    </>
                    <BlueTitle title="Xã hội"/>
                    <>
                        {this.renderCate(this.state.Social)}
                    </>
                    <BlueTitle title="Kinh tế"/>
                    <>
                        {this.renderCate(this.state.Economic)}
                    </>
                    <BlueTitle title="Đời sống"/>
                    <>
                        {this.renderCate(this.state.Life)}
                    </>
                    
                </div>
                <div className="Right">
                <>
                    <BlueTitle title="Tin Video" link="/videonews" />
                    <div className="Right">
                        {this.renderVideo(this.state.Video)}
                    </div>
                    <BlueTitle title="Tin Ảnh" link="/videonews"/>
                    <ImgNews />
                    <BlueTitle title="Tin Audio" link="/audionews"/>
                    <div className="Right">
                        <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                        <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                        <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                    </div>
                </>
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