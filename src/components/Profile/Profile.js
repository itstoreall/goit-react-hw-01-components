import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes} }) => (
    <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                class="avatar"
                width={200}  
            />
            <p class="name">{name}</p>
            <p class="tag">{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers: </span>
                <span class="quantity">{followers}</span>
            </li>
            <li>
                <span class="label">Views: </span>
                <span class="quantity">{views}</span>
            </li>
            <li>
                <span class="label">Likes: </span>
                <span class="quantity">{likes}</span>
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