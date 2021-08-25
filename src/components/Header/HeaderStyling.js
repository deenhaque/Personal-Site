import styled from 'styled-components';
import viewports from '../viewports';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

const NavDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const StyledDiv = styled.div`
	text-align: center;
	font-size: 20px;
`;

export const HeaderText = styled.h1`
	margin: 5px 0px 0px 0px;
	color: ${(props) => props.theme.primary};
	font-family: ${(props) => props.theme.fonts.sairaCondensed}, Roboto,
		sans-serif;
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
	@media only screen and (${viewports.mobileL}) {
		padding: 10px 10vw 5px 10vw;
	}
	color: ${(props) => props.theme.primary};
	text-decoration: none;
	padding: 0px 2em 5px 30px;
	font-family: 'Bitter';
	text-align: center;
	&:hover {
		color: ${(props) => props.theme.active};
	}
	&.${(props) => props.activeClassName} {
		text-decoration: underline;
	}
`;

export const Navigation = (props) => <NavDiv {...props} />;
export const DeenHaque = (props) => <StyledDiv {...props} />;
