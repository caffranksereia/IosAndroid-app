import styled from 'styled-components';
import { SytledInterface } from './_interfaces/Styled-Container-Interfaces';

export const Wrapper =
	styled.div <
	SytledInterface >
	`
    width: ${(props) => (props.width ? props.width : 'auto')};
    height: ${(props) => (props.height ? props.height : 'auto')};
`;
