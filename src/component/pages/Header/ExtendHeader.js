import React from 'react';
import BlueTitle from 'component/pages/Body/BlueTitle';
import 'component/css/Display.scss';

function ExtendHeader(props) {
    //const [ext] = [props.ext];
    const list = [
        'Xã hội',
        'Sức khoẻ',
        'Giải trí',
        'Thể thao',
        'Bảng tin',
        'Video',
        'Văn hoá',
        'Giáo dục',
        'Audio',
        'Xu hướng',
        'Mới nhất',
        'Khác'
    ];
    return(
        <div className="extend">
            <div className="ex">
                <div style={{display:'flex', maxWidth: '160px'}}>
                    {
                        list.map((item, index) => {
                            if(index<6){
                                return (
                                    <div className="ex-content">
                                        <BlueTitle key={index} title={item}/>
                                    </div>
                                );
                            }
                            return null;
                                
                        })
                    }
                </div>
                <div style={{display:'flex'}}>
                    {
                        list.map((item, index) => {
                            if(index>=6){
                                return (
                                    <BlueTitle key={index} title={item}/>
                                )
                            }
                            return null; 
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default ExtendHeader;