import React from 'react';
import { Project, StyledProjects } from './ProjectsStyling';
import { extraCurriculars, projects, workExperience } from './projectData';
import Text from '../Text/Text';

const Projects = () => {
	return (
		<>
			<br />
			<Text>These are the places I've worked at:</Text>
			<StyledProjects>
				{workExperience.map((work, i) => (
					<Project key={`${work.name}-${i}`} {...work} />
				))}
			</StyledProjects>
			<Text>Outside of work, these are the guys I develop for:</Text>
			<StyledProjects>
				{extraCurriculars.map((extraCurricular, i) => (
					<Project key={`${extraCurricular.name}-${i}`} {...extraCurricular} />
				))}
			</StyledProjects>
			<Text>This is some cool stuff I've done:</Text>
			<StyledProjects>
				{projects.map((project, i) => (
					<Project project key={`${project.name}-${i}`} {...project} />
				))}
			</StyledProjects>
		</>
	);
};

export default Projects;
