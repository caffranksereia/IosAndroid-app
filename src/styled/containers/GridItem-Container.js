import styled from 'styled-components/native';

export const GridItemComponents = styled.ScrollView`
	background-color: ${(props) => props.theme.color.background};
	border: ${(props) => (props.border ? props.border : 'auto')};
	padding: ${(props) => (props.padding ? props.padding : 'auto')};
	font-size: ${(props) => (props.fontSize ? props.fontSize : 'auto')};
	text-align: ${(props) => (props.textAlign ? props.textAlign : 'auto')};
	margin: ${(props) => (props.margin ? props.margin : '5px')};
`;
