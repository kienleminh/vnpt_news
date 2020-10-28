import React from 'react';
import 'component/css/Display.scss';

function SignupDia(props) {
    const [dis, setDis] = [props.dis, props.setDis];
    return (
    <div className={`${dis ? 'appear' : 'disappear'} dialogbackground`}>
        <div className="dialog">
            <button className="icondialog" onClick={() => setDis(!dis)}>X</button>
            <div className="icondialog" >
                <div >DIGILIFE</div>
            </div>
            <div className="content">
            Mời bạn đăng ký gói
            <br/>
            <span >
            [Tên gói nội dung tương ứng]
            </span>
                <br/>để trải nghiệm nội dung <br/>
            <span >
            <input type="button" value="Bỏ qua" onClick={() => setDis(!dis)}/>
                <div >
                <a href='/signup' >Đăng kí</a>
                </div>
            </span>
                <div >Tham khảo các gói cước khác</div>
            </div>
        </div>
    </div>
    );

}

export default SignupDia;