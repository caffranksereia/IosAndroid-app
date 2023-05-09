import styled from 'styled-components';
import { StyledGrid } from './_interfaces/Styled-Container-Interfaces';

export const GridComponents =
	styled.div <
	StyledGrid >
	`
    grid-template-columns: ${(props) =>
			props.templateColumns ? props.templateColumns : 'auto'};
    display: ${(props) => (props.display ? props.display : 'block')};
`;
