import React from 'react';
import 'component/css/Display.scss';
import {UserService} from 'services/UserService';

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
    });
  }
  
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
      
      </>
    )
    }

}

export default Signup;