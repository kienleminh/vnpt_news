import React, { useState} from 'react';
import HomeIcon from 'component/Figure/HomeIcon.png';
//import AccountIcon from 'component/Figure/account.svg';
import SearchingIcon from 'component/Figure/SearchIcon.svg';
import LikeIcon from 'component/Figure/LikeIcon.svg';
import Signup from '../Body/SignupDia';
import 'component/css/Display.scss';
import {READ_NEWS,VID_NEWS,AUD_NEWS} from '../../routes';
import BlueTitle from 'component/pages/Body/BlueTitle';

function Header() {
  const [dis, setDis] = useState(false);
  //const [ext, setExt] = useState(false);
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
    return (
      <div className="header">
        <div className="searching">
          <a className="icon" href="/" target="_parent"><img src={HomeIcon} alt="Home Icon" /></a>
          <div style={{float: 'right', height: '36px', width: '36px'}}>
          <button style={{border: '0px', backgroundColor: '#FFFFFF'}}>
            {/* <img src={AccountIcon} alt="Account Icon" onClick={() => setDis(!dis)} /> */}
            <>
            
            <Signup dis={dis} setDis={setDis}/> 
          </>
          </button> 
          </div>
          <div className="searchingbox">
            <div>
              <form action="#" method="post" name="searching" style={{padding: '0px'}}>
                <input type="search" name="search" style={{border: '1px solid #F0F2FD', marginLeft: '22px',
                  marginTop: '10px', font: 'normal normal normal 14px/21px Quicksand', letterSpacing: '-0.35px',
                  color: '#000000', opacity: '1'}} placeholder="Nhập nội dung cần tìm kiếm" />
              </form>
            </div>
            <a className="searchingicon" href="http://google.com.vn" target="_self"><img src={SearchingIcon} alt="Searching Icon" /></a>
          </div>
        </div>
        <div className="menu">
          {/* <button onMouseOver={() => setExt(true)} style={{border: '0px', backgroundColor: '#FFFFFF'}}>
            <img src={LikeIcon} alt="Like Icon" />
          </button> */}
          <div className="dropdown">
            <button className="dropbtn"><img src={LikeIcon} alt="Like Icon" /></button>
            <div className="dropdown-content">
              <div style={{maxWidth:'992px'}}>
                <div className="sub-dropdown">
                {
                      list.map((item, index) => {
                          if(index<6){
                              return (
                                <a href="#" style={{maxWidth: '170px'}}>
                                  <BlueTitle style={{maxWidth: '170px'}} key={index} title={item}/>
                                </a>  
                              );
                          }
                          return null;
                      })
                  }
                </div>
                <div className="sub-dropdown">
                {
                      list.map((item, index) => {
                          if(index>=6){
                              return (
                                <a href="#" style={{maxWidth: '170px'}}>
                                  <BlueTitle style={{maxWidth: '170px'}} key={index} title={item}/>
                                </a>  
                              );
                          }
                          return null;
                      })
                  }
                </div>
              </div>
              {/* <div style={{display:'flex'}}>
                  {
                      list.map((item, index) => {
                          if(index<6){
                              return (
                                <a style={{maxWidth: '160px'}}>
                                  <BlueTitle style={{maxWidth: '160px'}} key={index} title={item}/>
                                </a>  
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
              </div> */}


            </div>
          </div>
          <div className="menubox">
            <a className="box" href={READ_NEWS} target="_self" id="menutitle">Xã hội</a>
          </div>
          <div className="menubox">
            <a className="box" href={READ_NEWS} target="_self" id="menutitle">Văn hoá</a>
          </div>
          <div className="menubox">
            <a className="box" href={READ_NEWS} target="_self" id="menutitle">Thể thao</a>
          </div>
          <div className="menubox">
            <a className="box" href={READ_NEWS} target="_self" id="menutitle">Giải trí</a>
          </div>
          <div className="menubox">
            <a className="box" href={READ_NEWS} target="_self" id="menutitle">Sức khoẻ</a>
          </div>
          <div className="menubox">
            <a className="box" href={VID_NEWS} target="_self" id="menutitle">Video</a>
          </div>
          <div className="menubox">
            <a className="box" href={AUD_NEWS} target="_self" id="menutitle">Audio</a>
          </div>
          <div className="menubox">
            <a className="box" href={READ_NEWS} target="_self" id="menutitle">Giáo dục</a>
          </div>
        </div>
          {/* <>
            
            <Signup dis={dis} setDis={setDis}/> 
          </> */}
        </div>
        );

}

export default Header;