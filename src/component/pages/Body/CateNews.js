import React from 'react';
import {NewsService} from 'services/NewsService';
import './Cate.scss';
import MainNews from './MainNews';
import BlueTitle from './BlueTitle';
import VideoNews from './VideoNews';

class CateList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            MainNews: [],
            SubNews: [],
        }
    }
    componentDidMount() {
        this.getNewsList();
    }
    getParams(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const Id = urlParams.get('newsId');
        console.log(Id)
        return Id;
    }
    getNewsList(){
        const params = {
            "cateId": 31,
        }
        NewsService.getNewsList({params}, res =>{
            this.setState({
                title: res.data[0].cateName[31],
                MainNews: res.data[0],
                SubNews: res.data[1],
            })
        })
    }
    render() {
        console.log(this.state.item)
        return(
            <>
                <div className="body">
                    <div className="Left">
                        <BlueTitle title={this.state.title} />
                        <MainNews item={this.state.MainNews} />
                        
                        {/* <BlueTitle title="Xu hướng" />
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
                        </> */}
                        
                    </div>
                    <div className="Right" style={{marginTop:'76px'}}>
                    <>
                        <div className="Right">
                            <VideoNews item={this.state.SubNews} />
                        </div>
                        {/* <BlueTitle title="Tin Ảnh" link="/videonews"/>
                        <ImgNews />
                        <BlueTitle title="Tin Audio" link="/audionews"/>
                        <div className="Right">
                            <AudioNews/>
                        </div> */}
                    </>
                    </div>
                </div>
            </>
        )
    }
}

export default CateList;