import React from 'react';
import ExtraNews from './ExtraNews';
import {checkType, MainNewsService} from 'services/MainNewsService';
import BlueTitle from './BlueTitle';
import './BodyImg.scss';
import {NewsService} from 'services/NewsService';
class BodyReading extends React.Component {
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
            descrip: '',
        };
    }
    componentDidMount() {
        this.getRelatedList();
        this.getNewsDetail();
        this.getComment();
    }
    //Realated List
    getRelatedList() {
        const params = {
            "id": 59776,
            "cateId": [
                35
            ],
            "contentType": 0,
            "pageSize": 10
        };
        MainNewsService.getnews(params, res => {
            this.setState({
                RelatedList: res.data,
            })
        });
    }
    renderRelatedList = () => {
        let RelatedList = this.state.RelatedList.map((data, index) =>
            <>
                <ExtraNews item={data}></ExtraNews>
            </>
        );
        return RelatedList;
    }
    //Main news
    getNewsDetail() {
        const params = {
            "id": 59776,
        };
        NewsService.getNewsById({ params }, res => {
            this.setState({
                NewsById: res.data[0],
                content: res.data[0].content,
                title: res.data[0].title,
                descrip: res.data[0].description,
            })
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
    createInnerHTML(str) {
        return {__html: str};
    }
    myContent(str) {
        return <div dangerouslySetInnerHTML={this.createInnerHTML(str)} />;
    }
    //Comment
    getComment() {
        const params = {
            "id": 59776,
            "pageSize": 2,
        };
        NewsService.getCommentList({params}, res => {
            this.setState({
            })
        })
    }
    render(){
    return(
        <div className="body">
            <div className="SubNews">
                <div className="topic">
                    {this.state.field}
                </div>
                <div className="title">{this.state.title}</div>

                <div className="menutitle">{this.state.NewsById.sourceName} . {NewsService.convertedTime(this.state.NewsById.createTime)} </div>
                <div className="baiviet">
                    <div style={{fontWeight: '700'}}>{this.myContent(this.state.descrip)}</div>
                    {this.myContent(this.state.content)}
                </div>
                <div style={{marginTop: '50px'}}>
                    <BlueTitle title="Tin cùng chủ đề" />
                    {this.renderRelatedList()}
                </div>
            </div>
        </div>
    )
    }
}
export default BodyReading;