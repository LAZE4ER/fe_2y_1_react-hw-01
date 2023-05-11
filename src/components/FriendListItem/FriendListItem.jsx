const FriendList =  ({ friends  }) => { 
    return(<ul class="friend-list">
    <li class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={id} width="48" />
    <p class="name">{name}</p>
  </li>
  </ul>)}

  export default FriendList;