import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.scss';

const FriendList = ({ friends }) => (
    <ul className={style.friendList}>
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};

export default FriendList;
