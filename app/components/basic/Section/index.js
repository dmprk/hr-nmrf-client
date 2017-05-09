import styled from 'styled-components';
import { palette } from 'styled-theme';

const Section = styled.div`
  min-height: 100px;
  background-color: ${(props) => props.dark ? palette('primary', 2) : palette('greyscaleLight', 0)};
  color: ${(props) => props.dark ? palette('greyscaleLight', 2) : 'inherit'};
`;

export default Section;
