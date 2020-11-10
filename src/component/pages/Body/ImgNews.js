import React from 'react';
import 'component/css/Display.scss';
import {NewsService} from 'services/NewsService';

class ImgNews extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            img: [],
        }
    }
    componentDidMount() {
        this.getImg();
    }
    getImg(){
        const params = {
            contentType: 2,
            orderType: 0,
            pageSize: 3,
        }
        NewsService.getNewsList({params}, res =>{
            this.setState({
                img: res.data,
            })
            console.log(this.state.img)
        })
    }
    renderImg(CateList) {
        let List = CateList.map((data, index) =>
            <div>
                <img src={data.img1} alt="Tet Img" style={{maxWidth:'320px'}} />
            </div>
        );
        return List;
    }
    render(){
        return(
            <>
                {this.renderImg(this.state.img)}
    
            </>
        )

    }
}

export default ImgNews;