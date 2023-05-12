import styles from './FriendListItem.module.css'
const FriendListItem =  ({ name, avatar, isOnline, id  }) => { 
    return(
    <li class="item">
    <span  className={isOnline ? styles.online : styles.offline} >{isOnline}  </span>
    <img class="avatar" src={avatar} alt={id} width="48"  />
    <p class="name">{name}</p>
  </li>
  
  )}

  export default FriendListItem;

