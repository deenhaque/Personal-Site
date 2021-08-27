import { StyledLink, StyledText } from './TextStyling';

const Text = (props) =>
  props.href ? (
    <StyledLink rel='noopener noreferrer' target='_blank' {...props} />
  ) : (
    <StyledText {...props} />
  );

export default Text;
