import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {

   state = {
       firstName: '',
       lastName: '',
       userName: '',
       noOfGames: 0,
       userExist: false
   }
  
   handleFirstNameChange = (event) => {
     this.setState({ 'firstName' : event.target.value });
   }
    
   handleLastNameChange = (event) => {
    this.setState({ 'lastName' : event.target.value });
   }
    
   handleUserNameChange = (event) => {
    this.setState({ 'userName' : event.target.value });
   }
  
  
   isDisabled = () => {
      if(this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '') {
        return true;
      } else {
        return false;
      }
   }
    
   addUser = (event) => {
    const userExistAlready = this.userExists(this.state.userName);
    event.preventDefault();
    if(!userExistAlready) {
      this.props.onAddUser({'firstName' : this.state.firstName , 
                          'lastName' : this.state.lastName ,
                          'userName' : this.state.userName,
                          'noOfGames': this.state.noOfGames,
                          'hideUser': this.state.hideUser  
      });
    }
    this.setState({userExist : userExistAlready});
  }
  
   userExists = (newUserName) => {
    
     const users = this.props.users;
     if(users.length < 1) {
       return false; 
     } else {
       for(let i = 0 ; i < users.length; i++) {
         if(users[i].userName === newUserName){
           console.log("user exisit already");
           return true;
         }
       }
       
     }
   }
  
   render() {
     console.log(this.state.firstName);
    return (
      <div className="user-row">
        <form>
           <input
            type="text"
            placeholder="Enter First Name"
            name={this.state.firstName}
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
           />
           <input
            type="text"
            placeholder="Enter Last Name"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
            />
            <input
            type="text"
            placeholder="Enter User Name"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
            />
          <button type="submit" value="Submit" onClick={this.addUser} disabled={this.isDisabled()}> ADD </button>
		</form>
		<div className={this.state.userExist ? "warning" : "hidden"}  > User already exisit. Please enter a new user. </div>
     </div>
    );
  }
}

User.PropTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    noOfGames: PropTypes.number.isRequired}

export default User;

