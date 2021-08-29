import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <div className={s.friends}>
      <ul className={s.friendlist}>
        {friends.map(item => (
          <FriendsListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
