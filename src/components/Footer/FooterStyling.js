import { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import viewports from '../viewports';

const StyledLine = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  position: relative;
  left: 44%;
  bottom: 0%;
  width: 0px;
  ${({ flexGrow }) => (flexGrow ? `flex-grow: ${flexGrow};` : `height: 100%;`)};
  margin-top: ${({ marginTop }) => `${marginTop ? marginTop : '0px'};`};
`;

const EmailDiv = styled.div`
  height: min-content;
  pointer-events: auto;
  width: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailText = styled.p`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-family: ${(props) => props.theme.fonts.lato};
  padding-bottom: 5px;
  color: ${({ hover, theme: { active, primary } }) =>
    hover ? `${active};` : `${primary};`};
  cursor: pointer;
`;

const FlexDiv = styled.div`
  height: 100%;
  width: ${(props) =>
    props.minContent ? 'min-content;' : props.theme.footerIconDimension};
  margin-right: ${({ marginRight }) => `${marginRight};`};
  margin-left: ${({ marginLeft }) => `${marginLeft};`};
  display: flex;
  flex-direction: column;
`;
const IconDivs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 4;
  cursor: pointer;
`;
const StyledFooter = styled.div`
  width: 100%;
  height: 300px;
  position: fixed;
  bottom: 0%;
  pointer-events: none;
  @media only screen and (${viewports.mobileL}) {
    height: 250px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  & > div:first-child {
    @media only screen and (${viewports.desktopL}) {
      margin-left: 80px;
    }
    @media only screen and (${viewports.tablet}) {
      margin-left: 50px;
    }
    @media only screen and (${viewports.mobileXL}) {
      margin-left: 30px;
    }
    @media only screen and (${viewports.mobileL}) {
      margin-left: 10px;
    }
    margin-left: 250px;
  }

  & > div:nth-child(2) {
    @media only screen and (${viewports.desktopL}) {
      margin-right: 80px;
    }
    @media only screen and (${viewports.tablet}) {
      margin-right: 50px;
    }
    @media only screen and (${viewports.mobileXL}) {
      margin-right: 30px;
    }
    @media only screen and (${viewports.mobileL}) {
      margin-right: 10px;
    }
    margin-right: 250px;
  }
`;

const Line = (props) => <StyledLine {...props} />;

export const Email = (props) => {
  const [hover, setHover] = useState(false);
  function hoverOn() {
    setHover(true);
  }
  function hoverOff() {
    setHover(false);
  }
  return (
    <FlexDiv marginLeft='3em' marginRight='0px' minContent>
      <EmailDiv>
        <EmailText
          {...props}
          onClick={() =>
            window.open('mailto:deen.haque@carleton.ca?subject=Hey%20Deen!')
          }
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          hover={hover}
        />
      </EmailDiv>
      <Line marginTop='15px' />
    </FlexDiv>
  );
};
export const Contact = (props) => (
  <FlexDiv {...props} marginRight='5em' marginLeft='0px'>
    <IconDivs>{props.children}</IconDivs>
    <Line flexGrow='5' />
  </FlexDiv>
);
export const FooterDiv = (props) => <StyledFooter {...props} />;
export const Social = withTheme((props) => {
  const [hover, setHover] = useState(false);
  const { theme } = props;
  function hoverOn() {
    setHover(true);
  }
  function hoverOff() {
    setHover(false);
  }
  return (
    <props.contactme
      {...props}
      style={{
        pointerEvents: 'auto',
        width: theme.footer.footerIconDimension,
        height: theme.footer.footerIconDimension
      }}
      onClick={() => window.open(props.src, '_blank', 'noopener,noreferrer')}
      fill={hover ? theme.active : theme.primary}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    />
  );
});
