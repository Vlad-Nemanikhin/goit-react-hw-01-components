import { Li, Circle } from './card.styled';

export const Card = ({ friends }) => {
	return (friends.map(({ avatar, name, isOnline, id }) => 
		<Li key={id}>
			<Circle status={isOnline}>{ isOnline }</Circle>
			<img src={avatar} alt={name} width="40" />
			<p>{ name }</p>
</Li>
	)
)
}