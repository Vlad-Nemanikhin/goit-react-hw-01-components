import { Profile } from "components/profile/Profile";
import { StatsForm } from "components/stats/StatsForm";
import { FriendList } from "components/friends/FriendList";
import { TransactionHistory } from "components/transactions/TransactionHistory";
import { Container } from './app.styled';
import user from '../../data/user.json';
import stats from "../../data/statisticalInfo.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transaction.json";

export const App = () => {
	return <div>
		<Container>
		<Profile
			key={user.name}
			tag={user.tag}
			name={user.name}
			location={user.location}
			avatar={user.avatar}
			stats={user.stats}
		/>
		</Container>

		<Container>
		<StatsForm
			title ={'Upload stats'}
			stats={ stats }
		/>
		</Container>

		<Container>
		<FriendList friends={friends} />
		</Container>

		<Container>
		<TransactionHistory items={transactions} />
		</Container>
	</div>;
};
