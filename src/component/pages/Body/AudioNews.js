import React from 'react';
import 'component/css/Display.scss';
import {NewsService} from 'services/NewsService';

class AudioNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
        }
    }
    componentDidMount(){
        this.getCateAudio();
    }
    getCateAudio() {
        const params = {
            contentType: 3,
            pageSize: 3,
        };
        NewsService.getNewsList({params}, res => {
            this.setState({
                item: res.data,
            })
        });
    }
    renderAudio(CateList) {
        let List = CateList.map((data, index) =>
            <a className='AudioNews' href="/audionews">
                <div className="zoom-img">
                    <img src={data.img1} alt="Audio News Img"/>
                </div>
                <div className="title">
                    {data.title}
                </div>
            </a>
        );
        return List;
    }
    render() {
        return(
            <>
                {this.renderAudio(this.state.item)}
            </>
        )

    }
}

export default AudioNews;