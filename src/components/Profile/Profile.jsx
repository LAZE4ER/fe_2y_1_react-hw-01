import { useReducer } from 'react';
import styles from './Profile.module.css';

export default  ({username, tag, location, avatar, stats }) => { 
return (
<div className={styles.profile}>
<div className={styles.description}>
  <img
    src={avatar}
    alt="User avatar"
    className={styles.avatar}
  />
  <p class="name">{username}</p>
  <p class="tag">{tag}</p>
  <p class="location">{location}</p>
</div>

<ul className={styles.stats}>
  <li>
    <span class="label">Followers: </span>
    <span class="quantity">{stats.followers}</span>
  </li>
  <li>
    <span class="label">Views: </span>
    <span class="quantity">{stats.views}</span>
  </li>
  <li>
    <span class="label">Likes:</span>
    <span class="quantity">{stats.likes}</span>
  </li>
</ul>
</div>)}