import React from 'react';
import ExtraNews from './ExtraNews';
import {MainNewsService} from 'services/MainNewsService';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';
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
            "id": 59069,
            "cateId": [
                34
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
    getNewsDetail() {
        const params = {
            id: 59069,
        };
        NewsService.getNewsById({ params }, res => {
            this.setState({
                NewsById: res.data[0],
                field: res.data[0].cateName[res.data[0].cateId[0]],
                content: res.data[0].content,
                title: res.data[0].title,
            })
            console.log("den day roi")
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
    createInnerHTML() {
        return {__html: this.state.content};
    }
    myContent() {
        return <div dangerouslySetInnerHTML={this.createInnerHTML()} />;
    }
    render(){
    return(
        <div className="body">
            <div className="SubNews">
                <div className="topic">
                    {this.state.field}
                </div>
                <div className="title">{this.state.title}</div>
                <div className="menutitle">{this.state.NewsById.sourceName} . 
                {NewsService.convertedTime(this.state.NewsById.createTime)} </div>
                <div className="baiviet" style={{position: 'relative', maxWidth: '570px'}}>
                    {this.myContent()}
                </div>
                <div style={{marginTop: '50px'}}>
                    <BlueTitle title="Tin chủ đề" />
                    {this.renderRelatedList()}
                </div>
            </div>
        </div>
    )
    }
}
export default BodyReading;