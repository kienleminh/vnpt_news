import React from 'react';
import HomeIcon from 'component/Figure/HomeIcon.png';
import AccountIcon from 'component/Figure/account.svg';
import SearchingIcon from 'component/Figure/SearchIcon.svg';
import LikeIcon from 'component/Figure/LikeIcon.svg';
import 'component/css/Display.scss';
import {VID_NEWS} from '../../routes';

function Header(){
    return (
          <div className="header">
            <div className="searching">
              <a className="icon" href="/" target="_parent"><img src={HomeIcon} alt="Home Icon" /></a>
              <div style={{float: 'right', height: '36px', width: '36px'}}>
              <input type="image" src={AccountIcon} alt="Account Icon" onclick="appear_account()" />
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
              <span><a href={VID_NEWS} target="_self" style={{marginTop: '5px'}}><img src={LikeIcon} alt="Like Icon" /></a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Xã hội</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Văn hoá</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Thể thao</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Giải trí</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Sức khoẻ</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Video</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Audio</a></span>
              <span className="menubox"><a className="box" href={VID_NEWS} target="_self" id="menutitle">Giáo dục</a></span>
            </div>
          </div>
);
}

export default Header;