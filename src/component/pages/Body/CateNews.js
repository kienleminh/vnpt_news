import React from 'react';
import {NewsService} from 'services/NewsService';
import './Cate.scss';
import MainNews from './MainNews';
import BlueTitle from './BlueTitle';
import News from './News';
import StatusTab from './Statustab';
import ExtraNews from './ExtraNews';

class CateList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cate: '',
            MainNews: [],
            SubNews: [],SubNews1: [],SubNews2: [],SubNews3: [],
            SubNews4: [],SubNews5: [],SubNews6: [],SubNews7: [],
            SubNews8: [],
        }
    }
    componentDidMount() {
        this.getNewsList();
    }
    getParams(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const cateId = urlParams.get('cateId');
        return cateId;
    }
    getNewsList(){
        const params = {
            "cateId": this.getParams(),
        }
        NewsService.getNewsList({params}, res =>{
            this.setState({
                cate: res.data[0].cateId[0],
                MainNews: res.data[0],
                SubNews: res.data[1],
                SubNews1: res.data[2],
                SubNews2: res.data[3],
                SubNews3: res.data[4],
                SubNews4: res.data[5],
                SubNews5: res.data[6],
                SubNews6: res.data[7],
                SubNews7: res.data[8],
                SubNews8: res.data[9],
            })
        })
    }
    title(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const cate = urlParams.get('cateId');
        return (cate==='31')?'Xã hội':(cate==='32')?'Thế giới':
        (cate==='33')?'Giáo dục':(cate==='34')?'Kinh tế':(cate==='35')?'Giải trí':
        (cate==='36')?'Thể thao':(cate==='37')?'Công nghệ':(cate==='38')?'Xe 360':
        (cate==='39')?'Sức khoẻ':(cate==='40')?'Đời sống':(cate==='41')?'Video':
        (cate==='42')?'Tin ảnh':'Tâm sự';
    }
    render() {
        return(
            <div>
                <div className="body" style={{display:'block'}}>
                <div style={{display:'flex'}}>
                    <div className="Left">
                        <BlueTitle title={this.title()} />
                        <MainNews item={this.state.MainNews} />
                        <div className="Status" style={{fontSize:'20px'}}>{this.state.MainNews.sourceName} . {this.state.MainNews.createTime}</div>
                    </div>
                    <div className="Right" style={{marginTop:'66px'}}>
                    <>
                        <div className="Right">
                            <News item={this.state.SubNews} />
                        </div>
                    </>
                    </div>

                </div>
                <div style={{display:'flex', marginTop:'20px'}}>
                    <div className="Right" style={{marginRight:'15px'}}>
                        <News item={this.state.SubNews1} />
                    </div>
                    <div className="Right" style={{marginRight:'15px'}}>
                        <News item={this.state.SubNews2} />
                    </div>
                    <div className="Right" style={{marginRight:'15px'}}>
                        <News item={this.state.SubNews3} />
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <ExtraNews item={this.state.SubNews4}/>
                    <ExtraNews item={this.state.SubNews5}/>
                    <ExtraNews item={this.state.SubNews6}/>
                    <ExtraNews item={this.state.SubNews7}/>
                    <ExtraNews item={this.state.SubNews8}/>
                </div>
                </div>
            </div>
        )
    }
}

export default CateList;