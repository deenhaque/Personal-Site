import styled from 'styled-components';
import viewports from '../viewports';

const StyledFocus = styled.div`
  @media only screen and (${viewports.desktopL}) {
    margin: 0px 200px;
  }
  @media only screen and (${viewports.tablet}) {
    margin: 0px 100px;
  }
  @media only screen and (${viewports.mobileXL}) {
    margin: 0px 75px;
  }
  @media only screen and (${viewports.mobileL}) {
    margin: 0px 50px;
  }
  margin: 0px 275px;
`;

export const Focus = ({ children }) => <StyledFocus>{children}</StyledFocus>;
