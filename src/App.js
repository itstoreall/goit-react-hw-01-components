import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import { name, tag, location, avatar, stats } from './user.json';
// import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => (
  <div>
    <h1>Hi</h1>
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
      <TransactionHistory
        items={transactions}
      />
    </div>
)

export default App;