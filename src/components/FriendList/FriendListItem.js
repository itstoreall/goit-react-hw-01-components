import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import style from './FriendList.module.scss';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li className={style.item} key={id}>
        <span className={isOnline ? style.status : style.isOnline}>{isOnline}</span>
        <img className={style.avatar} src={avatar} alt="" width="48" />
        <p className={style.name}>{name}</p>
    </li>
)

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
};
    
export default FriendListItem;