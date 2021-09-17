import { Li } from './StatRes.styled';

function getRandom(min, max){
   return Math.ceil(Math.random() * (max - min) + min)
}

export const StatRes = ({ stats }) => {
	return (
		stats.map(({ label, percentage, id }) => (
			<Li key={id} style={{ background: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})` }}>
               <span>{label}</span>
               <span>{percentage}%</span>
            </Li>))
	)
}



