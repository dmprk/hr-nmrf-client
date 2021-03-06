import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import A from 'components/basic/A';
import ControlTextArea from '../ControlTextArea';
import messages from './messages';

const MarkdownHint = styled.div`
  text-align: right;
  color: ${palette('dark', 4)};
  font-size: 0.85em;
  font-weight: bold;
`;
export class MarkdownControl extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { model } = this.props;
    return (
      <span>
        <ControlTextArea
          model={model}
        />
        <MarkdownHint>
          <A
            href={this.context.intl.formatMessage(messages.url)}
            target="_blank"
          >
            {this.context.intl.formatMessage(messages.anchor)}
          </A>
          {this.context.intl.formatMessage(messages.hint)}
        </MarkdownHint>
      </span>
    );
  }
}

MarkdownControl.propTypes = {
  model: PropTypes.string.isRequired,
};
MarkdownControl.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default MarkdownControl;
