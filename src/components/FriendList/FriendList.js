import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import './style.css';

const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map((friend) =>
            <FriendListItem
                key={friend.id}
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};

export default FriendList;
