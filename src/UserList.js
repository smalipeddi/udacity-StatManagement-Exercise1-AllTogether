import React from 'react';
import UserInfo from './UserInfo';
import PropTypes from 'prop-types';

const UserList = props => {
  return (
    <div>
      <div className="user">
    	{props.users.map((user, index) => <UserInfo key={index} user={user} />)}
	  </div>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;