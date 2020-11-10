import React from 'react';
import ExtraNews from './ExtraNews';
import { NewsService} from 'services/NewsService';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';
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
        };
    }
    componentDidMount() {
        this.getRelatedList();
        this.getNewsDetail();
        this.getComment();
    }
    getParams(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const Id = urlParams.get('newsId');
        console.log(Id)
        return Id;
    }
    //Realated List
    getRelatedList() {
        const params = {
            "id": this.getParams(),
            "cateId": [
                34
            ],
            "contentType": 0,
            "pageSize": 10
        };
        NewsService.getRelatedList(params, res => {
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
            id: this.getParams(),
        };
        NewsService.getNewsById({ params }, res => {
            this.setState({
                NewsById: res.data[0],
                content: res.data[0].content,
                title: res.data[0].title,
            })
            if(res.data[0].contentType===0){
                this.setState({
                    field: res.data[0].cateName[res.data[0].cateId[0]]
                })
            } else {
                this.setState({
                    field: NewsService.checkType(res.data[0].contentType)
                })
            }
        });
    }
    createInnerHTML() {
        return {__html: this.state.content};
    }
    myContent() {
        return <div dangerouslySetInnerHTML={this.createInnerHTML()} />;
    }
    //Comment
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
                    {this.myContent()}
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