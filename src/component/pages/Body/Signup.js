import React from 'react';
import 'component/css/Display.scss';

function Signup () {
    return (
    <div className="dialogbackground">
        <div className="dialog">
            <input className="icondialog" type="button" value="X" onclick="disappear_account()" />
            <div className="icondialog" >
                <div >DIGILIFE</div>
            </div>
            <div className="content">Mời bạn đăng ký gói <br/><span >[Tên gói nội dung tương ứng]</span> <br/>để trải nghiệm nội dung <br/>
                <span >
            <input type="button" value="Bỏ qua" onclick="disappear_account()" />
              <button >
                <div >Đăng kí</div>
              </button>
          </span>
                <div >Tham khảo các gói cước khác</div>
            </div>
        </div>
    </div>
    );
}

export default Signup;