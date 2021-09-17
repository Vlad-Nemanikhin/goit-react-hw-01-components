import PropTypes from 'prop-types';
import {Card} from 'components/friends/friendCard/Card'

export const FriendList = ({ friends }) => {
	return (
		<ul style={{ width: 250}}>
			<Card friends={ friends }/>
		</ul>
	)
}


FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
      }
   ))
}