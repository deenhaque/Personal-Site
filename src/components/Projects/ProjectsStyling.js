import styled, { keyframes } from 'styled-components';
import { Text } from '../indexIsABoringName';
import viewports from './../viewports';

const ProjectOnHoverAnimation = keyframes`
	from {
		height: 100px;
		/* TODO: Make the text fade in (currently buggy) */
		p:nth-last-child(1) {
			opacity: 0;
		}
	}
	to {
		height: 100%;
		p:nth-last-child(1) {
			opacity: 100;
		}
	}
`;

const ProjectOffHoverAnimation = keyframes`
	from {
		height: 100%;
	}
	to {
		height: 100px;
	}
`;

const StyledProject = styled.div`
	height: 100px;
	padding: 5px 15px;
	border: 2px solid ${({ theme }) => theme.primary};
	border-radius: 5px;
	-webkit-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.75);

	@media only screen and (${viewports.laptopL}) {
		height: 125px;
	}

	p:nth-last-child(1) {
		visibility: hidden;
	}

	&:hover {
		height: auto;
		animation-name: ${ProjectOnHoverAnimation};
		animation-duration: 0.1s;

		p:nth-last-child(1) {
			visibility: visible;
		}
	}

	&:not(:hover) {
		animation-name: ${ProjectOffHoverAnimation};
		animation-duration: 0.1s;
	}
`;

const ProjectName = styled.p`
	color: ${({ color, theme }) => color || theme.textColor};
	font-family: ${({ theme }) => theme.fonts.lato + ', sans-serif'};
	font-size: 1.2em;
	text-align: center;
	margin: 10px 5px auto;
	${({ link, theme }) =>
		!link ||
		`&:hover {
		cursor: pointer;
		color: ${theme.active};
	}`}
`;

const SkillsDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const Skills = styled.span`
	font-family: ${(props) =>
		(props.font || props.theme.fonts.lato) + ', sans-serif'};
	font-size: 1.1em;
	font-weight: 600;
	color: ${({ theme }) => theme.primary};
	margin: 5px 0px;
	padding: 5px 5px;
	display: inline-block;
	text-align: center;
`;

export const Project = ({
	project,
	name,
	organization,
	tech,
	description,
	link
}) => {
	const redirect = (link) => window.open(link, '_blank', 'noopener,noreferrer');
	return (
		<StyledProject project={project}>
			<ProjectName
				center
				onClick={() => (!!link ? redirect(link) : null)}
				link={link}
			>
				{name}
			</ProjectName>
			<ProjectName center>{organization}</ProjectName>
			<SkillsDiv>
				{tech.map((technology, i) => (
					<Skills key={`${name}-${tech}-${i}`}>{technology}</Skills>
				))}
			</SkillsDiv>
			<Text>{description}</Text>
		</StyledProject>
	);
};

export const StyledProjects = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	row-gap: 1rem;
	column-gap: 1rem;
	@media only screen and (${viewports.laptopL}) {
		/* grid-template-columns: 1fr 1fr; */
		grid-template-columns: 50% 50%;
	}

	@media only screen and (${viewports.mobileXL}) {
		/* grid-template-columns: 1fr; */
		grid-template-columns: 100%;
		/* margin: 0px 40px; */
	}
`;
