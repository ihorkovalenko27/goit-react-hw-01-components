import Profile from './components/profile/Profile';
import Statistic from './components/statistics/Statistic';
import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import FriendsList from './components/friendslist/FriendsList';
import friends from './components/friendslist/friends.json';
import TransactionsHistory from './components/transactions/TransactionsHistory';
import transactions from './components/transactions/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
}
