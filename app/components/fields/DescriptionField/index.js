import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

import appMessages from 'containers/App/messages';

import FieldWrap from 'components/fields/FieldWrap';
import Label from 'components/fields/Label';

class DescriptionField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { field } = this.props;
    return (
      <FieldWrap>
        <Label>
          {field.label || this.context.intl.formatMessage(appMessages.attributes.description)}
        </Label>
        <ReactMarkdown source={field.value} />
      </FieldWrap>
    );
  }
}

DescriptionField.propTypes = {
  field: PropTypes.object.isRequired,
};
DescriptionField.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

export default DescriptionField;
