import styled from 'styled-components/native';

export const ImgDiv = styled.Image`
	width: ${(props) => (props.width ? props.width : 'auto')};
	height: ${(props) => (props.height ? props.height : 'auto')};
	alt: ${(props) => (props.alt ? props.alt : 'none')};
	background-image: url(${(props) => props.src});
	margin: ${(props) => (props.margin ? props.margin : 'none')};
	margin-top: ${(props) => (props.marginTop ? props.marginTop : 'none')};
`;
