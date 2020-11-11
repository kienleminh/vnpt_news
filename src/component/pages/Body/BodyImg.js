import React from 'react';
import ExtraNews from './ExtraNews';
import { NewsService} from 'services/NewsService';
import BlueTitle from './BlueTitle';
import './BodyImg.scss';
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
            Img: [],
            descrip: '',
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
        return Id;
    }
    //Realated List
    getRelatedList() {
        const params = {
            "id": this.getParams(),
            "cateId": [
            ],
            "contentType": 2,
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
            "id": this.getParams(),
        };
        NewsService.getNewsById({ params }, res => {
            this.setState({
                NewsById: res.data[0],
                content: res.data[0].content,
                title: res.data[0].title,
                descrip: res.data[0].description,
                Img: res.data[0].contentImgList,
            })
        });
    }
    myImg(array) {
        let img = array.map((data, index) =>
            <>
                <img src={data}></img>
            </>
        );
        return img;
    }
    //Comment
    getComment() {
        const params = {
            "id": this.getParams(),
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
                    {/* <div style={{fontWeight: '700'}}>{this.myContent(this.state.descrip)}</div> */}
                    {this.myImg(this.state.Img)}
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