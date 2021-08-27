import React, { useState } from 'react';
import { Navigation, StyledLink, DeenHaque, HeaderText } from './HeaderStyling';

const Header = () => {
  const [hover, setHover] = useState(false);
  const name = hover ? '[diːn ˈhæk]' : 'Deen Haque';
  function isHover() {
    setHover(true);
  }
  function noHover() {
    setHover(false);
  }
  return (
    <>
      <Navigation>
        <StyledLink exact to='/'>
          About
        </StyledLink>
        <StyledLink exact to='/projects'>
          Cool Stuff
        </StyledLink>
        <StyledLink exact to='/palettes'>
          Colours
        </StyledLink>
      </Navigation>

      <DeenHaque onMouseEnter={isHover} onMouseLeave={noHover}>
        <HeaderText>{name}</HeaderText>
      </DeenHaque>
    </>
  );
};

export default Header;
