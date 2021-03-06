import React, { PropTypes } from 'react';
import Field from 'components/fields/Field';

import ConnectionsField from 'components/fields/ConnectionsField';
import DateField from 'components/fields/DateField';
import DescriptionField from 'components/fields/DescriptionField';
import DownloadField from 'components/fields/DownloadField';
import EmailField from 'components/fields/EmailField';
import LinkField from 'components/fields/LinkField';
import ListField from 'components/fields/ListField';
import ManagerField from 'components/fields/ManagerField';
import MetaField from 'components/fields/MetaField';
import ReferenceField from 'components/fields/ReferenceField';
import ReferenceRoleCombo from 'components/fields/ReferenceRoleCombo';
import ReferenceStatusCombo from 'components/fields/ReferenceStatusCombo';
import ReportsField from 'components/fields/ReportsField';
import RoleField from 'components/fields/RoleField';
import ScheduleField from 'components/fields/ScheduleField';
import StatusField from 'components/fields/StatusField';
import TextField from 'components/fields/TextField';
import TitleField from 'components/fields/TitleField';
import TitleTextField from 'components/fields/TitleTextField';
import TitleShortField from 'components/fields/TitleShortField';

class FieldFactory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderField = (field) => {
    if (field.value
      || (field.values && field.values.length)
      || (field.fields && field.fields.length)
      || field.showEmpty
    ) {
      switch (field.type) {
        case 'title':
          return (<TitleField field={field} />);
        case 'titleText':
          return (<TitleTextField field={field} />);
        case 'short_title':
          return (<TitleShortField field={field} />);
        case 'meta':
          return (<MetaField field={field} />);
        case 'reference':
          return (<ReferenceField field={field} />);
        case 'referenceStatus':
          return (<ReferenceStatusCombo field={field} />);
        case 'referenceRole':
          return (<ReferenceRoleCombo field={field} />);
        case 'status':
          return (<StatusField field={field} />);
        case 'role':
          return (<RoleField field={field} />);
        case 'link':
          return (<LinkField field={field} />);
        case 'email':
          return (<EmailField field={field} />);
        case 'date':
          return (<DateField field={field} />);
        case 'manager':
          return (<ManagerField field={field} />);
        case 'description':
          return (<DescriptionField field={field} />);
        case 'list':
          return (<ListField field={field} />);
        case 'schedule':
          return (<ScheduleField field={field} />);
        case 'download':
          return (<DownloadField field={field} />);
        case 'connections':
          return (<ConnectionsField field={field} />);
        case 'reports':
          return (<ReportsField field={field} />);
        case 'text':
        default:
          return (<TextField field={field} />);
      }
    }
    return null;
  };
  render() {
    const { field, nested } = this.props;
    return (
      <Field nested={nested}>
        {this.renderField(field)}
      </Field>
    );
  }
}
FieldFactory.propTypes = {
  field: PropTypes.object.isRequired,
  nested: PropTypes.bool,
};

export default FieldFactory;
