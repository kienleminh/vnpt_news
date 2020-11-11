import React, { Component } from 'react'; 
import MainNews from './MainNews';
import ExtraNews from './ExtraNews';
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
            Trending: [],Lastest: [],Video: [],Social: [],Economic: [],
            Life: [],Audio: [],MainNews: [], ImgNews: [],
        };
        this.params = {};
    }
    componentDidMount() {
        this.getTrending(); this.getLastest(); this.getVideo();
        this.getCateList();  this.getCateSoc(); this.getCateEco();
        this.getCateLife(); this.getCateAudio(); this.getMainNews();
        this.getImg();
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
    getMainNews() {
        const params = {
            groupType: 13,
            contentType: 0,
            pageSize: 5,
        }
        NewsService.getNewsList({params}, res => {
            this.setState({
                MainNews: res.data[0],
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
    getImg(){
        const params = {
            contentType: 2,
            orderType: 0,
            pageSize: 3,
        }
        NewsService.getNewsList({params}, res =>{
            this.setState({
                ImgNews: res.data,
            })
        })
    }
    renderImg(CateList) {
        let List = CateList.map((data, index) =>
            <>
                <ImgNews item={data} key={index} />
            </>
        );
        return List;
    }
    renderCate = (CateList) => {
        let List = CateList.map((data, index) =>
            <>
                <ExtraNews item={data} ></ExtraNews>
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
    renderAudio(CateList) {
        let List = CateList.map((data, index) =>
            <>
                <AudioNews item={data} key={index} />
            </>
        );
        return List;
    }
    putListSlide = (News) => {
        let List = [];
        List = News.map((data, index) => data.img1);
        return List;
    }
    render(){
    return(
        <>
            <div className="body">
                <div className="Left">
                    <>
                    <MainNews item={this.state.MainNews} />
                    </>
                    <BlueTitle title="Xu hướng" />
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
                    <div className="Right">
                        {this.renderImg(this.state.ImgNews)}
                    </div>
                    <BlueTitle title="Tin Audio" link="/audionews"/>
                    <div className="Right">
                        {this.renderAudio(this.state.Audio)}
                    </div>
                </>
                </div>
            </div>
            <div className="SummarizedNews">
                {/* <SummarizedNews title={More.title} img={More.img} time={More.time} extratitle="Văn hoá"/>
                <SummarizedNews title={More.title} img={More.img} time={More.time} extratitle="Xã hội" />
                <SummarizedNews title={More.title} img={More.img} time={More.time} extratitle="Thể thao" /> */}
            </div>
        
        </>
    )
}
}

export default BodyHome;