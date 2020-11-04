import React, {useEffect, useState} from 'react';
import NewImg from 'component/Figure/NewImg.png';
import ExtraNews from './ExtraNews';
import ExtraNewsImg from 'component/Figure/ExtraNewsImg.png';
import {MainNewsService} from 'services/MainNewsService';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';
import {NewsService} from 'services/NewsService';
import {data} from 'jquery';


class BodyReading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            NewsById: [],
            RelatedList: [],
            Comment: [],
        };
    }
    // componentDidMount() {
    //     this.getRelatedList();
    //     this.getNewsDetail();
    //     this.getComment();
    // }
    getRelatedList() {
        const params = {
            "id": 57611,
            "cateId": [
                31
            ],
            "contentType": 0,
            "pageSize": 10
        };
        MainNewsService.getnews(params, res => {
            this.setState({
                RelatedList: res.data,
            })
            console.log("Related List");
            console.log(this.state.RelatedList);
            console.log(this.state.RelatedList[0].sourceName);
            console.log("getData");
        });
    }
    getNewsDetail() {
        const params = {
            id: 59069,
          };
          NewsService.getNewsById({ params }, res => {
              console.log(res.data[0]);
              this.setState({
                  NewsById: res.data[0],
                  title: res.data[0].cateName[res.data[0].cateId[0]],
                  content: res.data[0].content,
              })
            console.log("News By Id");
            console.log(this.state.content);
            console.log("getNewsDetail");

            console.log(this.state.title);
        });
    }
    getComment() {
        const params = {
            id: 59069,
            pageSize: 2,
        };
        console.log("getComment");
        NewsService.getCommentList({params}, res => {
            // console.log(res);
            this.setState({
            })
        })
    }
    renderNews = () => {
        let Comment = this.state.Comment.map((data, index) =>
            <>
                <div>
                    {data.id} 
                </div>
                <div>
                    {data.name} 
                </div>
                <div>
                    {data.email} 
                </div>
                <div>
                    {data.website} 
                </div>

            </>
        );
        return Comment;
    }
    render(){
        console.log('render');
    return(
        <div className="body">
            <div className="SubNews">
                <div className="topic">
                    {this.state.title}
                </div>
                <div id="demo"></div>
                <div className="title">{"ReadingNews.title"}</div>
                <div className="menutitle">Vietnamnet . {"ReadingNews.time"} phút trước</div>
                <div className="baiviet" style={{position: 'relative', maxWidth: '570px'}}>
                    {this.state.content}
                </div>
                <div style={{marginTop: '50px'}}></div>
                {this.renderUsers()}
            </div>
        </div>
    )
    }
}

export default BodyReading;