import React from 'react';
import VideoNews from './VideoNews';
import BlueTitle from './BlueTitle';
import AudioNews from './AudioNews';
import ImgNews from './ImgNews';
import 'component/css/Display.scss';

function Right(props) {
    return (
        <>
            <BlueTitle title={props.firBigtitle} link="/videonews" />
            <div className="Right">
                <VideoNews title={props.title} vid={props.vid} time={props.time}/>
                <VideoNews title={props.title} vid={props.vid} time={props.time}/>
                <VideoNews title={props.title} vid={props.vid} time={props.time}/>
            </div>
            <BlueTitle title={props.secBigtitle} link="/videonews"/>
            <ImgNews />
            <BlueTitle title={props.thrBigtitle} link="/audionews"/>
            <div className="Right">
                <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
                <AudioNews title="Hơn 80 tấn gạo ủng hộ cho 2 'ATM gạo' ở Đà Nẵng"/>
            </div>
        </>
    )
}

export default Right;