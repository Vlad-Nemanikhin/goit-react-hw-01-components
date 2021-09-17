import styled from '@emotion/styled';

const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);

:not(:last-child){
	margin-bottom: 10px;
}


p{
	margin-left: 10px;
	font-size: 20px;
}
`
const Circle = styled.span`
border-radius: 50%;
width: 20px;
height: 20px;
margin-right: 10px;
background-color: ${
	props => {
	if (props.status === true) {
		return 'green';
	} else { return 'red' };
	}
}
`

export { Li, Circle };