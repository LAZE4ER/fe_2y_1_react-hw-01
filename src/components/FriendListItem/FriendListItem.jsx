import FriendList from '../FriendList/FriendList'
const FriendListItem =  ({ name, avatar, isOnline, id  }) => { 
    return(
    <li class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={id} width="48"  />
    <p class="name">{name}</p>
  </li>
  )}

  export default FriendListItem;

