import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import { name, tag, location, avatar, stats } from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

const App = () => {
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />
      <FriendList
        friends={friends}
      />
    </div>
  )
};

export default App;