import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function friendStatus(value) {
  if (value) {
    return '#21db21';
  } else {
    return '#d40606';
  }
}

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s.status} style={{ color: friendStatus(isOnline) }}>
        {isOnline} ●
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propType = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendsListItem;
