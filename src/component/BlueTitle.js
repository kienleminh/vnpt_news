import React from 'react';
import './css/Display.scss';

class BlueTitle extends React.PureComponent {
    render() {
        return(
            <div className="BlueTitle">
                <div className="menutitlebox"></div>
                <div style={{marginTop: '8px'}}>{this.props.title}</div>
            </div>
        )
    }
}

export default BlueTitle;