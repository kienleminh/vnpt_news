import React from 'react';
import VideoNews from './VideoNews';
import BlueTitle from './BlueTitle';
import './css/Display.scss';

function Left(props) {
    return (
        <>
            <BlueTitle title={props.bigtitle} />
            <div className="VideoNews">
                <VideoNews title={props.title} img={props.img} time={props.time}/>
                <VideoNews />
                <VideoNews />
            </div>
        </>
    )
}

export default Left;