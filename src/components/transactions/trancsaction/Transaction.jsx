import { Content } from './css.styled';

export const Transaction = ({ transactions }) => {
	return (
		transactions.map(({id, type, amount, currency})=>(
			<tr key={ id }>
				<Content>{ type }</Content>
				<Content>{ amount }</Content>
				<Content>{ currency }</Content>
   </tr>))
	)
}