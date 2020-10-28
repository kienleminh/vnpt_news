import React from 'react';
import BlueTitle from './BlueTitle';
import 'component/css/Display.scss';

class ExtraNews extends React.PureComponent {
    
    render() {
        return (
            <div>
                <BlueTitle title={this.props.extratitle} link="/videonews" />
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={this.props.img} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{this.props.title}</div>
                        <div className="Status">Vietnamnet . {this.props.time} phút trước</div>
                    </div>
                </a>
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={this.props.img} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{this.props.title}</div>
                        <div className="Status">Vietnamnet . {this.props.time} phút trước</div>
                    </div>
                </a>
                <a href='/readingnews' className="ExtraNews">
                    <div className="zoom-img">
                        <div style={{overflow: 'hidden', borderRadius: '10px'}}>
                            <img src={this.props.img} alt="Extra News" />
                        </div>
                    </div>
                    <div style={{paddingLeft:'16px'}}>
                        <div>{this.props.title}</div>
                        <div className="Status">Vietnamnet . {this.props.time} phút trước</div>
                    </div>
                </a>
                
            </div>
        )
    }
}

export default ExtraNews;