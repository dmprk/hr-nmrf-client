import styled from 'styled-components';
import { palette } from 'styled-theme';

export default styled.a`
  position: absolute;
  top:0;
  left:0;
  text-decoration:none;
  color:${palette('primary', 0)}
  font-family: ${(props) => props.theme.fonts.secondary};

  &:hover {
    color:${palette('primary', 0)}
    opacity: 0.95;
  }
`;
