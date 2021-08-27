import React from 'react';
import TextLoop from 'react-text-loop';
import {
  CityName,
  Flow,
  LocationText,
  SpanStyle,
  StyledHeader
} from './AboutStyling';
import { Text } from '../indexIsABoringName';

const coordinates = (x, y) => ({ x: x, y: y });

const LocationLabel = ({ country, city, home }) => (
  <LocationText center home={home}>
    {country}
    <br />
    <CityName>{city}</CityName>
  </LocationText>
);

const locations = [
  {
    id: '1',
    data: {
      label: <LocationLabel home country='Saudi Arabia' city='Jeddah' />
    },
    position: coordinates(15, 125),
    sourcePosition: 'right',
    targetPosition: 'right'
  },
  {
    id: '2',
    data: {
      label: <LocationLabel home country='Qatar' city='Doha' />
    },
    position: coordinates(165, 125),
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: '3',
    data: {
      label: <LocationLabel home country='Bangladesh' city='Dhaka' />
    },
    position: coordinates(315, 125),
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: '4',
    data: {
      label: <LocationLabel home country='Canada' city='Ottawa' />
    },
    position: coordinates(465, 125),
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: '5',
    data: {
      label: <LocationLabel country='Thailand' city='Bangkok' />
    },
    position: coordinates(385, 25),
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    className: 'visit'
  },
  {
    id: '6',
    data: {
      label: <LocationLabel country='England' city='London' />
    },
    position: coordinates(385, 225),
    sourcePosition: 'top',
    targetPosition: 'top',
    className: 'visit'
  },
  {
    id: '7',
    data: {
      label: <LocationLabel country='US' city='New York' />
    },
    position: coordinates(535, 225),
    sourcePosition: 'top',
    targetPosition: 'top',
    className: 'visit'
  },
  {
    id: '8',
    data: {
      label: <LocationLabel country='Canada' city='Toronto' />
    },
    position: coordinates(535, 25),
    sourcePosition: 'bottom',
    targetPosition: 'bottom',
    className: 'visit'
  },
  { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep' },
  { id: 'e3-4', source: '3', target: '4', animated: true, type: 'smoothstep' },
  { id: 'e3-5', source: '3', target: '5', animated: true, type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '6', animated: true, type: 'smoothstep' },
  { id: 'e4-7', source: '4', target: '7', animated: true, type: 'smoothstep' },
  { id: 'e4-8', source: '4', target: '8', animated: true, type: 'smoothstep' }
];

const About = () => {
  const greetings = [
    <SpanStyle key='👋'>Hello There! 👋</SpanStyle>,
    <SpanStyle key='😤'>Welcome! 😤</SpanStyle>,
    <SpanStyle key='🖖'>Live Long and Prosper! 🖖</SpanStyle>,
    <SpanStyle key='🤠'>Howdy! 🤠</SpanStyle>,
    <SpanStyle key='🎅'>Ho Ho Ho! 🎅</SpanStyle>
  ];

  return (
    <>
      <br />
      <TextLoop children={greetings} />
      <Text>
        Check out my site! Tell me what's good, and what could be better!
      </Text>
      <br />
      <br />
      <StyledHeader>Where I've Been</StyledHeader>
      <Text>
        I've kind of moved around, I guess. <br />
        <br />
        I've considered each of the theme coloured places my home at some point,
        whereas I've simply visited the places in yellow, and think they're
        cool.
      </Text>
      <Flow locations={locations} />
      <br />
      <br />
      <StyledHeader>Education</StyledHeader>
      <Text>
        I'm working on getting my Bachelors in Computer Science w/ Honours, a
        "specialization" in Software Engineering and a Math minor from Carleton
        University. (Graduating in 2023 🤞🤞)
      </Text>
      <br />
      <br />
      <StyledHeader>Fun Stuff</StyledHeader>
      <Text>
        In my free time, I like to play
        <Text href='https://gfycat.com/comfortablefavorableeyas'>
          {' '}
          volleyball{' '}
        </Text>
        (very) recreationally, work out, try random food places, or just vibe.
      </Text>
      <br />
      <br />
      <StyledHeader>Dev Stuff</StyledHeader>
      <Text>
        I like web stuff; I love and have worked mostly with React, but I'm
        looking for any excuse to break into anything new I haven't
        learnt/worked with yet.
        <br />
        <br />
        My contact information is around, and you can check out the other pages
        on my site. 🤠
      </Text>
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
