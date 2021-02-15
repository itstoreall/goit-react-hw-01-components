import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import './style.css';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes} }) => (
    <div className="profile">
        <div className="profile-description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                className="profile-avatar"
                width={200}  
            />
            <p className="profile-name">{name}</p>
            <p className="profile-tag">{tag}</p>
            <p className="profile-location">{location}</p>
        </div>

        <ul className="profile-stats">
            <li>
                <span className="profile-label">Followers: </span>
                <span className="profile-quantity">{followers}</span>
            </li>
            <li>
                <span className="profile-label">Views: </span>
                <span className="profile-quantity">{views}</span>
            </li>
            <li>
                <span className="profile-label">Likes: </span>
                <span className="profile-quantity">{likes}</span>
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