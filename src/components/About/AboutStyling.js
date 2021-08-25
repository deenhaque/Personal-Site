import styled from 'styled-components';
import ReactFlow, { Controls } from 'react-flow-renderer';
import { StyledText } from './../Text/TextStyling';

export const SpanStyle = styled.span`
	color: ${({ color, theme }) => color || theme.textColor};
	font-family: ${({ font, theme }) =>
		(font || theme.fonts.lato) + ', sans-serif'};
	font-size: 1.2em;
`;

export const CityName = styled.span`
	color: grey;
	font-size: 0.9em;
	font-family: ${({ theme }) => theme.textColor};
`;

export const StyledHeader = styled.h1`
	color: ${({ theme }) => theme.textColor};
	font-family: ${({ theme }) => theme.fonts.lato + ', sans-serif'};
`;

export const LocationText = styled(StyledText)`
	color: ${({ theme }) => theme.background};
	margin: 0px;
	padding: 15px 0px;
	border-radius: 10px;
`;

const StyledReactFlow = ({ className, locations }) => (
	<div className={className}>
		<ReactFlow
			elements={locations}
			onConnect={(reactFlowInstance) => reactFlowInstance.fitView()}
			snapToGrid={true}
			snapGrid={[15, 15]}
		>
			<Controls className='control' />
		</ReactFlow>
	</div>
);

export const Flow = styled(StyledReactFlow)`
	.react-flow__node {
		background-color: ${({ theme }) => theme.primary};
		border-radius: 10px;
		width: 100px;
		padding: 0px;
		color: green;
	}

	.react-flow {
		height: 300px;
		width: 75%;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.flowBackground};
	}

	.react-flow__edge-path {
		stroke: ${({ theme }) => theme.active};
		stroke-width: 2px;
	}

	.react-flow__handle {
		visibility: hidden;
	}

	.visit {
		background-color: ${({ theme }) => theme.active};
	}

	.control {
		position: absolute;
		left: calc(100% - 50px);
	}
`;
