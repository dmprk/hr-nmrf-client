import React, { PropTypes } from 'react';

import Icon from 'components/Icon';

import FieldFactory from 'components/fields/FieldFactory';
import FieldGroupWrapper from 'components/fields/FieldGroupWrapper';
import FieldGroupLabel from 'components/fields/FieldGroupLabel';
import GroupIcon from 'components/fields/GroupIcon';
import Label from 'components/fields/Label';

class FieldGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { group } = this.props;
    return (
      <FieldGroupWrapper type={group.type}>
        { group.label &&
          <FieldGroupLabel>
            { group.icon &&
              <GroupIcon>
                <Icon name={group.icon} />
              </GroupIcon>
            }
            <Label>
              {group.label}
            </Label>
          </FieldGroupLabel>
        }
        {
          group.fields.map((field, i) => field
            ? (<FieldFactory key={i} field={field} />)
            : null
          )
        }
      </FieldGroupWrapper>
    );
  }
}
FieldGroup.propTypes = {
  group: PropTypes.object.isRequired,
};

export default FieldGroup;
