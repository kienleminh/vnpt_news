import React from 'react';
import 'component/css/Display.scss';

class ImgNews extends React.PureComponent {
    getURL(params){
        let url = '/';
        if(params.contentType===0){url += 'readingnews?'}
        else if(params.contentType===1){url += 'videonews?'}
        else if(params.contentType===2){url += 'imagenews?'}
        else {url += 'audionews?'}
        url +=('newsId=' + params.newsId);
        url +=('&contentType='+params.contentType);
        return url;
    }
    render(){
        const {item} = this.props;
        return(
            <>
                <a href={this.getURL(item)}>
                    <img src={item.img1} alt="Img" style={{maxWidth:'320px'}} />
                </a>

            </>
        )

    }
}

export default ImgNews;