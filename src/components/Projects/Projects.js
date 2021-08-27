import React, { useState } from 'react';
import {
  Project,
  StyledProjects,
  Skills,
  SkillSection
} from './ProjectsStyling';
import { extraCurriculars, projects, workExperience } from './projectData';
import Text from '../Text/Text';
import { useEffect } from 'react';

const skills = [
  {
    name: 'ReactJS',
    description:
      'I LOVE ReactJS. The React dynamic when making web apps really speaks to me and makes React dev fun lol'
  },
  {
    name: 'React Native',
    description:
      'React Native mobile development is really cool! I love that I can make mobile apps kind of the same way as I make websites'
  },
  {
    name: 'TypeScript',
    description:
      "I've started using TypeScript because the type checking is really cool!"
  },
  {
    name: 'JavaScript',
    description:
      "THE web development language. I've used JS to build client-facing apps and servers"
  },
  {
    name: 'Python',
    description:
      "I've used Python almost exclusively for school projects and stuff, I think Python is a really cool language"
  },
  {
    name: 'C',
    description:
      "I worked with C for various school projects and for one of my internships. It's a really cool low level language, that it feels like one can do almost anything with"
  },
  {
    name: 'C++',
    description:
      "I've used C++ mainly for school projects. I like how slick it feels, along with how low level it can be."
  },
  {
    name: 'Java',
    description:
      'Java is my first language. I learnt the basic OOP principles with Java while also making a 2D game about Shaq chasing basketballs on the moon'
  }
];

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
        These are some of the languages/frameworks I know stuff about:
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
    </>
  );
};

export default Projects;
