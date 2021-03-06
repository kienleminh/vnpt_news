import React from 'react';
import 'component/css/Display.scss';
import { NewsService} from 'services/NewsService';
import BlueTitle from './BlueTitle';
import ExtraAudio from './ExtraAudio';

class BodyAudio extends React.Component {
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
        // this.getComment();
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
            "contentType": 3,
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
                <ExtraAudio item={data}></ExtraAudio>
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
    render(){
        return(
            <div className="body">
                <div className="SubNews">
                    <a className="topic" href="/audionews" >{this.state.field}</a>
                    <div className="baiviet" style={{position: 'relative', maxWidth: '570px', paddingBottom: '11px'}}>
                        <audio controls src={this.state.content} autoPlay="true"/>
                        <div className="title" style={{width: '570px'}}>{this.state.title}</div>
                        <div className="menutitle" style={{font: 'normal normal 300 16px/18px Quicksand'}}>{this.state.NewsById.sourceName} . {NewsService.convertedTime(this.state.NewsById.createTime)}</div>
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

export default BodyAudio;