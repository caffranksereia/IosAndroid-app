import styled from 'styled-components';

export const Header = styled.div`
	width: ${(props) => (props.width ? props.width : 'auto')};
	height: ${(props) => (props.height ? props.height : 'auto')};
	background-color: ${(props) => props.theme.color.background};
	display: flex;
`;
