import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';
import profile from './components/Profile/profile.json';
import  Profile  from './components/Profile/Profile.jsx';
import friends from './components/FriendListItem/friends.json'
import FriendList from './components/FriendList/FriendList';
function App() {
  return (
    <div>
       <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      /> 
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </div>
  );
}

export default App;