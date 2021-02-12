import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return friends.map((friend) => (
        <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
    ));
};

export default FriendList;
