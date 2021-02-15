import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
    </li>
)

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};
    
export default FriendListItem;