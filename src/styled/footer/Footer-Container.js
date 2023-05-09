import styled from 'styled-components';

export const Footer = styled.div`
	width: ${(props) => (props.width ? props.width : 'auto')};
	height: ${(props) => (props.height ? props.height : 'auto')};
	display: ${(props) => (props.display ? props.display : 'block')};
	background-color: ${(props) => props.theme.color.background};
`;
