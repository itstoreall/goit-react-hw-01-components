import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
    <ul>
        {friends.map((friend) =>
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        )};
    </ul>
);

export default FriendList;
