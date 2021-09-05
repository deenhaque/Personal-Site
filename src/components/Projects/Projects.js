import React, { useState } from 'react';
import {
  Project,
  StyledProjects,
  Skills,
  SkillSection
} from './ProjectsStyling';
import {
  extraCurriculars,
  projects,
  skills,
  workExperience
} from './projectData';
import Text from '../Text/Text';
import { useEffect } from 'react';

const Projects = () => {
  const [selectedSkills, setSelectedSkills] = useState(
    skills.map(({ name }) => name)
  );
  const [work, setWork] = useState(workExperience);
  const [extra, setExtra] = useState(extraCurriculars);
  const [proj, setProj] = useState(projects);

  useEffect(() => {
    let w = [],
      e = [],
      p = [];
    selectedSkills.forEach((skill) => {
      const filter = (experience, original) =>
        experience.tech.includes(skill) && !original.includes(experience);

      w.push(...workExperience.filter((experience) => filter(experience, w)));
      e.push(...extraCurriculars.filter((experience) => filter(experience, e)));
      p.push(...projects.filter((experience) => filter(experience, p)));
    });

    setWork(w);
    setExtra(e);
    setProj(p);
  }, [selectedSkills]);

  const onSkillClick = ({ target: { innerText } }) => {
    const filteredSkills = selectedSkills.filter(
      (skill) => skill !== innerText
    );
    setSelectedSkills(
      filteredSkills.length === selectedSkills.length
        ? [...selectedSkills, innerText]
        : filteredSkills
    );
  };

  return (
    <>
      <Text>
        These are some of the languages/frameworks I know stuff about.
        Click/hover on them for some extra info!
      </Text>
      <SkillSection>
        {skills.map(({ name, description }) => (
          <Skills
            key={name}
            title={description}
            active={selectedSkills.includes(name)}
            point
            onClick={onSkillClick}
          >
            {name}
          </Skills>
        ))}
      </SkillSection>
      <br />
      <Text>These are the places I've worked at:</Text>
      <StyledProjects>
        {work.map((work, i) => (
          <Project key={`${work.name}-${i}`} {...work} />
        ))}
      </StyledProjects>
      <Text>Outside of work, these are the guys I develop for:</Text>
      <StyledProjects>
        {extra.map((extraCurricular, i) => (
          <Project key={`${extraCurricular.name}-${i}`} {...extraCurricular} />
        ))}
      </StyledProjects>
      <Text>This is some cool stuff I've done:</Text>
      <StyledProjects>
        {proj.map((project, i) => (
          <Project project key={`${project.name}-${i}`} {...project} />
        ))}
      </StyledProjects>
      <br />
      <br />
      <br />
    </>
  );
};

export default Projects;
