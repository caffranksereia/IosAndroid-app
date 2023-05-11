import styled from 'styled-components/native';

export const GridComponents = styled.FlatList`
	grid-template-columns: ${(props) =>
		props.templateColumns ? props.templateColumns : 'auto'};
	display: ${(props) => (props.display ? props.display : 'block')};
`;
