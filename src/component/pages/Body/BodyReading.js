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
    componentDidMount() {
        this.getRelatedList();
        this.getNewsDetail();
        this.getComment();
    }
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
        });
    }
    getNewsDetail() {
        const params = {
            id: 59069,
          };
          NewsService.getNewsById({ params }, res => {
              this.setState({
                  NewsById: res.data[0],
                  title: res.data[0].cateName[res.data[0].cateId[0]],
                  content: res.data[0].content,
              })
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
                <div>
                    {data.title} 
                </div>
                <div>
                    {data.status} 
                </div>
                <div>
                    {data.sourceName} 
                </div>
                <div>
                    {data.newsId} 
                </div>

            </>
        );
        return RelatedList;
    }
    render(){
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
                <div style={{marginTop: '50px'}}>
                    {this.renderRelatedList()}
                </div>
            </div>
        </div>
    )
    }
}
export default BodyReading;