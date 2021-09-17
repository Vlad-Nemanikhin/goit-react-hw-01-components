import PropTypes from 'prop-types';
import { Transaction } from 'components/transactions/trancsaction/Transaction';
import { Heading, Table } from './transiction.styled';

export const TransactionHistory = ({items}) => {
	return (
		<Table>
  <thead>
    <tr>
      <Heading>Type</Heading>
      <Heading>Amount</Heading>
      <Heading>Currency</Heading>
    </tr>
  </thead>
  <tbody>
				<Transaction transactions={ items }/>
  </tbody>
</Table>
	)}


TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
      PropTypes.exact({
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired
      }
   ))
}