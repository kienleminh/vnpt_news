import React from 'react';
import 'component/css/Display.scss';

class BlueTitle extends React.PureComponent {
    render() {
        return(
            <a className="BlueTitle" href={this.props.link}>
                <div className="menutitlebox"></div>
                <div style={{marginTop: '8px'}}>{this.props.title}</div>
            </a>
        )
    }
}

export default BlueTitle;