import styled from 'styled-components/native';

export const Wrapper = styled.View`
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
`;
