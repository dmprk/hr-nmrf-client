import React, { PropTypes } from 'react';
import { Field } from 'react-redux-form/immutable';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const Option = styled.div`
  padding: 0.25em 0;
`;
const Hint = styled.div`
  font-style: italic;
  font-size: 0.85em;
`;
// see also ScheduleItem
const Label = styled.label`
  font-weight: bold;
  color:  ${(props) => props.highlight ? palette('primary', 0) : palette('dark', 2)};
`;
const LabelInner = styled.span`
  padding-left: 5px;
`;

export class RadioControl extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { model, options, hints } = this.props;
    return (
      <Field model={model}>
        {
          options && options.map((option, i) => (
            <Option key={i}>
              <Label highlight={option.highlight}>
                <input
                  type="radio"
                  name={model}
                  value={option.value}
                  checked={option.checked}
                />
                <LabelInner>{option.label}</LabelInner>
              </Label>
            </Option>
          ))
        }
        { hints && options.length === 0 &&
          <Hint>
            {hints[0]}
          </Hint>
        }
        { hints && options.length === 1 &&
          <Hint>
            {hints[1]}
          </Hint>
        }
      </Field>
    );
  }
}

RadioControl.propTypes = {
  model: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  hints: PropTypes.object,
};
// DateControl.contextTypes = {
//   intl: PropTypes.object.isRequired,
// };

export default RadioControl;
