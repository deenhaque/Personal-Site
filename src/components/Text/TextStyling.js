import styled from 'styled-components';
export const StyledText = styled.p`
  color: ${({ color, theme }) => color || theme.textColor};
  font-family: ${({ font, theme }) =>
    (font || theme.fonts.lato) + ', sans-serif'};
  font-size: 1.2em;
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'auto')};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.active};
  text-decoration: none;
`;
