import React , {Component} from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {
  
  state ={
   toggleState: true 
  }
  
  showUser = (event) => {
    this.setState({toggleState : false});
  }
  
  hideUser = (event) => {
    this.setState({toggleState : true});
  }
  
  
   render() {
     if(this.state.toggleState){
       return (<div><div className="user">{this.props.user.userName}   played  {this.props.user.noOfGames}                                  games <button onClick={this.showUser} >TOGGLE</button></div></div>);
     } else {
       return (<div><div className="user">{this.props.user.userName}   played   *{this.props.user.noOfGames}                                  games <button onClick={this.hideUser} >TOGGLE</button></div></div>);
     }
    }
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;