import React from 'react';
import HomeIcon from './Figure/HomeIcon.png';
import AccountIcon from './Figure/account.svg';
import SearchingIcon from './Figure/SearchIcon.svg';
import LikeIcon from './Figure/LikeIcon.svg';
import './css/Display.scss';

function Header(){
    return (
          <div className="header">
            <div className="searching">
              <a className="icon" href="Home.html" target="_parent"><img src={HomeIcon} alt="Hình ảnh không tồn tại" /></a>
              <div style={{float: 'right', height: '36px', width: '36px'}}><input type="image" src={AccountIcon} alt="Account Icon" onclick="appear_account()" /></div>
              <div className="searchingbox">
                <div>
                  <form action="#" method="post" name="searching" style={{padding: '0px'}}>
                    <input type="search" name="search" style={{border: '1px solid #F0F2FD', marginLeft: '22px', marginTop: '10px'}} />
                  </form>
                </div>
                <a className="searchingicon" href="http://google.com.vn" target="_self"><img src={SearchingIcon} alt="Searching Icon" /></a>
              </div>
            </div>
            <div className="menu">
              <span><a href="Videos.html" target="_self" style={{marginTop: '5px'}}><img src={LikeIcon} alt="Like Icon" /></a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Xã hội</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Văn hoá</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Thể thao</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Giải trí</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Sức khoẻ</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Video</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Audio</a></span>
              <span className="menubox"><a className="box" href="Videos.html" target="_self" id="menutitle">Giáo dục</a></span>
            </div>
          </div>
);
}

export default Header;