import FriendListIem from '../FriendListItem/FriendListItem'
import friends from '../FriendListItem/friends.json'
function FriendList (friends){
    return(
        <ul>
        {friends.map((friend) => (
            <FriensListItem
              key={friend.id}
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          ))}
       </ul>
    )
}

export default FriendList