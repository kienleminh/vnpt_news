import React, { useState} from 'react';
import HomeIcon from 'component/Figure/HomeIcon.png';
import SearchingIcon from 'component/Figure/SearchIcon.svg';
import LikeIcon from 'component/Figure/menu.svg';
import Signup from '../Body/SignupDia';
import 'component/css/Display.scss';
import {READ_NEWS,VID_NEWS,AUD_NEWS, IMG_NEWS, CATE_NEWS} from '../../routes';
import icon_title from 'component/Figure/icon_title.svg';

function Header() {
  const [dis, setDis] = useState(false);
    return (
      <div className="header">
        <div className="searching">
          <a className="icon" href="/" target="_parent"><img src={HomeIcon} alt="Home Icon" /></a>
          <div style={{float: 'right', height: '36px', width: '36px'}}>
          <button style={{border: '0px', backgroundColor: '#FFFFFF'}}>
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
          <div className="dropdown">
            <button className="dropbtn"><img src={LikeIcon} alt="Like Icon" /></button>
            <div className="dropdown-content">
              <div style={{maxWidth:'992px'}}>
                <div className="sub-dropdown">
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=31'>Xã hội</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=34'>Kinh tế</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=40'>Đời sống</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=32'>Thế giới</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=35'>giải trí</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=36'>thể thao</a>
                  </span>
                </div>
                <div className="sub-dropdown">
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=39'>Sức khoẻ</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=37'>Công nghệ</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=41'>Video</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=42'>Tin ảnh</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=3811'>tâm sự</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=31'>địa phương</a>
                  </span>
                </div>
                <div className="sub-dropdown">
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=38'>xe 360</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=33'>giáo dục</a>
                  </span>
                  <span className="sub-menu">
                    <img src={icon_title} alt="" style={{marginRight: '8px'}}></img>
                    <a href='/catenews?cateId=31'>superinfo</a>
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=31' target="_self" id="menutitle">Xã hội</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=34' target="_self" id="menutitle">Kinh tế</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=40' target="_self" id="menutitle">Đời sống</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=32' target="_self" id="menutitle">Thế giới</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=35' target="_self" id="menutitle">Giải trí</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=36' target="_self" id="menutitle">Thể thao</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=37' target="_self" id="menutitle">Công nghệ</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=41' target="_self" id="menutitle">Video</a>
          </div>
          <div className="menubox">
            <a className="box" href='/catenews?cateId=42' target="_self" id="menutitle">Tin ảnh</a>
          </div>
        </div>
        </div>
        );

}

export default Header;