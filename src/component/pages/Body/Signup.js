import React from 'react';
import 'component/css/Display.scss';
import {UserService} from 'services/UserService';
import {event} from 'jquery';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  handleRegister = () => {
    const data = {
      "id": 56818,
      "cateId": [
          34
      ],
      "contentType": 0,
      "pageSize": 10
    };
    
    UserService.login(data, res => {
      console.log(res);
      console.log(res.resultInfo.message);
      this.setState({username: res.resultInfo.message});
      console.log(this.state.username + 'okie')
    });
  }
  // handleMainnew = () => {
  //   const data = {
  //     "nhomchuongtrinh": 0,
  //     "loaichuongtrinh": 0,
  //     "loaiuudai": 1,
  //     "nhomuudai": 0,
  //     "hanghoivien": 0,
  //     "token": ""
  //   };
  //   UserService.mainnew(data, res => {
  //     console.log(res);
  //   });
  // }

  
  render() {
    return(
      <>
        <div className="body" style={{marginTop:'150px', marginLeft: 'auto'}}>
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
        <button onClick={this.handleRegister}>Dang ky</button>
        </div>
        {/* <div>
        <button onClick={this.handleMainnew}>Dang ky</button>
        </div> */}

        <div>
          {/* {console.log(this.state.username)} */}
        </div>
      
      </>
    )
    }

}

export default Signup;