import React from 'react';
import BlueTitle from './BlueTitle';
import StatusTab from './Statustab';
import AudioNews from './AudioNews';
import 'component/css/Display.scss';
import {NewsService} from 'services/NewsService';

class SummarizedNews extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            news: [], sub1:[],sub2:[],sub3:[],
        }
    }
    getNews(){
        const params = {
            cateId: 31,
            contentType: 0,
            pageSize: 4,
        }
        NewsService.getNewsList({params}, res =>{
            this.setState({
                news: res.data[0],
                sub1: res.data[1],
                sub2: res.data[2],
                sub3: res.data[3],
            })
        })
    }
    renderSumNew(cate){
        let res = item.map((data, index) => 
            <>
                <div className="subSummarized">
                    <div className="VideoNews">
                        <img src={data[0].img1} alt="Video News Img" />
                        <div>{data[0].title}</div>
                        <div className="Status">
                            {data[0].sourceName} . {data[0].createTime}
                            <StatusTab/>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '15px'}}>
                    <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                    <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                    <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                </div>
            </>
        );
        return res;
    }
    render(){
        return (
            <>
                <div className="subSummarized" style={{borderBottom: '0px'}}>
                    <div className="subSummarized">
                        <BlueTitle title="Thế giới" link="/catenews?cateId=32"/>
                    </div>
                    {this.renderSumNew(this.getNews)}
                </div>
                {this.renderSumNew(cate)}
            </>
        )
    }
}

export default SummarizedNews;