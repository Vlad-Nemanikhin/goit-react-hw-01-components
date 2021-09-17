import css from 'components/profile/Profile.module.css';
import ava from 'components/user.png';
import PropTypes from 'prop-types';

export const Profile = ({name, tag, location, avatar, stats}) => {
	return (
<div className = {css.profile}>
   <div className={css.description}>
   	<img
      	src={avatar??ava}
      	alt="Аватар пользователя"
      	className={css.avatar}
   	/>
   	<p className={css.name}>{name}</p>
   	<p className={css.tag}>@{tag}</p>
   	<p className={css.location}>{location}</p>
   </div>

	<ul className={css.stats}>
   	<li>
      	<span className={css.label}>Followers</span>
      	<span className={css.quantity}>{stats.followers}</span>
   	</li>
   	<li>
      	<span className={css.label}>Views</span>
      	<span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
      	<span className={css.label}>Likes</span>
      	<span className={css.quantity}>{stats.likes}</span>
      </li>
   </ul>
</div>
	);
};

Profile.defaultProps = {
	avatar: 'https://pixabay.com/vectors/user-person-people-profile-account-1633249/'
}

Profile.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      })
}