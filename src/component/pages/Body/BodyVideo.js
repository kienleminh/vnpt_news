import React from 'react';
import ExtraNews from './ExtraNews';
import './BodyVideo.scss';
import {MainNewsService, checkType} from 'services/MainNewsService';
import {NewsService} from 'services/NewsService';
import BlueTitle from './BlueTitle';
class BodyVideo extends React.Component {
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
        this.getRelatedList();
        this.getNewsDetail();
        this.getComment();
    }
    getRelatedList() {
        const params = {
            "id": 59598,
            "cateId": [
                36
            ],
            "tags": [
                "Video bóng đá",
                "Video trận đấu",
                "Điểm tin",
                "Real Madrid",
                "Mbappe"
            ],
            "contentType": 1,
            "pageSize": 10
        };
        MainNewsService.getnews(params, res => {
            this.setState({
                RelatedList: res.data,
            })
        });
    }
    getNewsDetail() {
        const params = {
            id: 59598,
        };
        NewsService.getNewsById({ params }, res => {
            this.setState({
                NewsById: res.data[0],
                field: res.data[0].cateName[res.data[0].cateId[0]],
                content: res.data[0].content,
                title: res.data[0].title,
            })
            console.log("den day roi");
            if(res.data[0].contentType===0){
                this.setState({
                    field: res.data[0].cateName[res.data[0].cateId[0]]
                })
            } else {
                this.setState({
                    field: checkType(res.data[0].contentType)
                })
            }
        });
    }
    getComment() {
        const params = {
            id: 59069,
            pageSize: 2,
        };
        NewsService.getCommentList({params}, res => {
            this.setState({
            })
        })
    }
    renderRelatedList = () => {
        let RelatedList = this.state.RelatedList.map((data, index) =>
            <>
                <ExtraNews item={data}></ExtraNews>

            </>
        );
        return RelatedList;
    }
    render(){
    return (
        <div className="body">
            <div className="SubNews">
                <div className="topic">
                    {this.state.field}
                </div>
                <div className="baiviet">
                    <div className="video" >
                        <video poster={this.state.NewsById.img1} src={this.state.content} type="video/mp4" autoplay="" controls=""></video>
                    </div>
                    <h1>
                        {this.state.title}
                    </h1>
                    <div className="menutitle">{this.state.NewsById.sourceName} . {NewsService.convertedTime(this.state.NewsById.createTime)} </div>
                    <div style={{marginTop: '50px'}}>
                    <BlueTitle title="Tin chủ đề" />
                    {this.renderRelatedList()}
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default BodyVideo;