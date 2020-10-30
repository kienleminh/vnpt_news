import React from 'react';
import AccountIcon from 'component/Figure/account.svg';
import 'component/css/Display.scss';

function SignupDia(props) {
    const [dis, setDis] = [props.dis, props.setDis];
    return (
        <>
        <img src={AccountIcon} alt="Account Icon" onClick={() => setDis(!dis)} />
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
    </>
    );

}

class SignupDia1 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
        this.timeOutId = null;
    
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }
    
    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }
    
    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
          this.setState({
            isOpen: false
          });
        });
    }
    
      // Nếu một component con nhận được focus, không được đóng popover.
      onFocusHandler() {
        clearTimeout(this.timeOutId);
      }
    render() {
        return(
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                
                <button onClick={this.onClickHandler} aria-haspopup="true" aria-expanded={this.state.isOpen}>
                    <img src={AccountIcon} alt="Account Icon"/>
                </button>
                {this.state.isOpen && (
                <>
                <div className="dialogbackground">
                    <div className="dialog">
                        {/* <button className="icondialog" onClick={this.onClickHandler()}>X</button> */}
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
                        {/* <input type="button" value="Bỏ qua" onClick={this.onClickHandler}/> */}
                            <div >
                            <a href='/signup' >Đăng kí</a>
                            </div>
                        </span>
                            <div >Tham khảo các gói cước khác</div>
                        </div>
                    </div>
                </div>
                </>
                )}
                
            </div>

        );
    }
}

export default SignupDia;