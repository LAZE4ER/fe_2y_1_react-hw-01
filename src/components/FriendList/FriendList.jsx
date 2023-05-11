import FriendListItem from '../FriendListItem/FriendListItem'
function FriendList ({friends}){
    return(
        <ul>
        {friends.map((friend) => (
            <FriendListItem
              key={friend.id}
              id={friend.id}
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          ))}
       </ul>
    )
}

export default FriendList