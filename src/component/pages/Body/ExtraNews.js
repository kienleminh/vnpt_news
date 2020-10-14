import React from 'react';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';

class ExtraNews extends React.PureComponent {
    
    render() {
        return (
            <div>
                <a href="/videonews"><BlueTitle title={this.props.extratitle} /></a>
                <div className="ExtraNews">
                    <img src={this.props.img} alt="Extra News" />
                    <div style={{paddingLeft:'16px'}}>
                        <div>{this.props.title}</div>
                        <div className="Status">Vietnamnet . {this.props.time} phút trước</div>
                    </div>
                </div>
                <div className="ExtraNews">
                    <img src={this.props.img} alt="Extra News" />
                    <div style={{paddingLeft:'16px'}}>
                        <div>{this.props.title}</div>
                        <div className="Status">Vietnamnet . {this.props.time} phút trước</div>
                    </div>
                </div>
                <div className="ExtraNews">
                    <img src={this.props.img} alt="Extra News" />
                    <div style={{paddingLeft:'16px'}}>
                        <div>{this.props.title}</div>
                        <div className="Status">Vietnamnet . {this.props.time} phút trước</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExtraNews;