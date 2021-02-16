import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import style from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes} }) => (
    <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={style.avatar}
                width={200}  
            />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className={style.label}>Followers: </span>
                <span className={style.quantity}>{followers}</span>
            </li>
            <li>
                <span className={style.label}>Views: </span>
                <span className={style.quantity}>{views}</span>
            </li>
            <li>
                <span className={style.label}>Likes: </span>
                <span className={style.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
)

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;