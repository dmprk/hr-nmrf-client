import { Control } from 'react-redux-form/immutable';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const ControlTextArea = styled(Control.textarea)`
  background-color: ${palette('primary', 4)};
  width: 100%;
  border: 1px solid ${palette('light', 1)};;
  min-height: 20em;
  color: ${palette('dark', 0)};
  padding: 0.7em;
  border-radius: 0.5em;
`;

export default ControlTextArea;
