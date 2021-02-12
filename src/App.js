import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        alt={user.alt}
        name={user.name}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />
    </div>
  )
};

export default App;