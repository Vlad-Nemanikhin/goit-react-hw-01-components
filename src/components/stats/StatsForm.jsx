import PropTypes from 'prop-types';
import { StatRes } from 'components/stats/results/StatRes';
import { Title, List } from './StatForm.styled';



export const StatsForm = ({title, stats}) => {
	return (
		<section>
<Title>{title}</Title>
<List>
            <StatRes stats={stats}/>
</List>
</section>
	)
};

StatsForm.defaultProps = {
   title: 'Upload stats'
}

StatsForm.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
      PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
      id: PropTypes.string,
      }
   ))
}
