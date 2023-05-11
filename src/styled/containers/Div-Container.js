import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	width: ${(props) => (props.width ? props.width : 'auto')};
	height: ${(props) => (props.height ? props.height : 'auto')};
	background-color: ${(props) => props.theme.color.background};
	max-width: 100%;
	display: ${(props) => (props.display ? props.display : 'flex')};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'center'};
	margin-top: ${(props) => (props.marginTop ? props.marginTop : '5px')};
`;
