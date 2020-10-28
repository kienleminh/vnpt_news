import React from 'react';
import 'component/css/Display.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  // var x = (window.screen.height -126)/2;
  // () => {
  //   document.getElementById("body").style.marginTop = x;
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
        </div>
      
      </>
    )
    }

}

export default Signup;