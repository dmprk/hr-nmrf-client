/*
 *
 * ReportNew
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { fromJS, Map, List } from 'immutable';

import { getCheckedValuesFromOptions } from 'components/forms/MultiSelectControl';

import { PUBLISH_STATUSES } from 'containers/App/constants';
import { loadEntitiesIfNeeded, updatePath } from 'containers/App/actions';
import { getEntity, isReady } from 'containers/App/selectors';

import Page from 'components/Page';
import EntityForm from 'components/forms/EntityForm';

import reportNewSelector from './selectors';
import messages from './messages';
import { save } from './actions';


export class ReportNew extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadEntitiesIfNeeded();
  }
  componentWillReceiveProps(nextProps) {
    // reload entities if invalidated
    if (!nextProps.dataReady) {
      this.props.loadEntitiesIfNeeded();
    }
  }

  mapDateOptions = (entities) => fromJS(entities).toList().map((entity) => Map({
    value: Map({ value: entity.get('id') }),
    label: entity.getIn(['attributes', 'due_date']),
  }));

  // TODO use radio buttons
  renderDateControl = (dates) => ({
    id: 'dates',
    model: '.associatedDate',
    label: 'Scheduled Date',
    controlType: 'multiselect',
    multiple:false,
    options: this.mapDateOptions(dates),
  });

  render() {
    const { dataReady, indicator } = this.props;
    const { saveSending, saveError } = this.props.reportNew.page;
    const indicatorReference = this.props.params.id;
    const required = (val) => val && val.length;

    // TODO allow all past but only first upcoming due date
    const dateOptions = indicator && indicator.dates
      ? this.renderDateControl(indicator.dates)
      : null;

    let pageTitle = this.context.intl.formatMessage(messages.pageTitle);
    pageTitle = `${pageTitle} (Indicator: ${indicatorReference})`;

    return (
      <div>
        <Helmet
          title={this.context.intl.formatMessage(messages.pageTitle)}
          meta={[
            {
              name: 'description',
              content: this.context.intl.formatMessage(messages.metaDescription),
            },
          ]}
        />
        {dataReady &&
          <Page
            title={pageTitle}
            actions={
              [
                {
                  type: 'simple',
                  title: 'Cancel',
                  onClick: () => this.props.handleCancel(indicatorReference),
                },
                {
                  type: 'primary',
                  title: 'Save',
                  onClick: () => this.props.handleSubmit(
                    this.props.reportNew.form.data,
                    indicatorReference
                  ),
                },
              ]
            }
          >
            {saveSending &&
              <p>Saving Report</p>
            }
            {saveError &&
              <p>{saveError}</p>
            }

            <EntityForm
              model="reportNew.form.data"
              handleSubmit={(formData) => this.props.handleSubmit(
                formData,
                indicatorReference
              )}
              handleCancel={() => this.props.handleCancel(indicatorReference)}
              fields={{
                header: {
                  main: [
                    {
                      id: 'title',
                      controlType: 'input',
                      model: '.attributes.title',
                      placeholder: this.context.intl.formatMessage(messages.fields.title.placeholder),
                      validators: {
                        required,
                      },
                      errorMessages: {
                        required: this.context.intl.formatMessage(messages.fieldRequired),
                      },
                    },
                  ],
                  aside: [
                    {
                      id: 'status',
                      controlType: 'select',
                      model: '.attributes.draft',
                      options: PUBLISH_STATUSES,
                    },
                  ],
                },
                body: {
                  main: [
                    dateOptions,
                    {
                      id: 'description',
                      controlType: 'textarea',
                      model: '.attributes.description',
                    },
                    {
                      id: 'document_url',
                      controlType: 'input',
                      model: '.attributes.document_url',
                    },
                    {
                      id: 'document_public',
                      controlType: 'select',
                      model: '.attributes.document_public',
                      options: PUBLISH_STATUSES,
                    },
                  ],
                },
              }}
            />
          </Page>
        }
      </div>
    );
  }
}

ReportNew.propTypes = {
  loadEntitiesIfNeeded: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  dataReady: PropTypes.bool,
  reportNew: PropTypes.object,
  indicator: PropTypes.object,
  params: PropTypes.object,
};

ReportNew.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  reportNew: reportNewSelector(state),
  dataReady: isReady(state, { path: [
    'indicators',
    'due_dates',
    'progress_reports',
  ] }),
  indicator: getEntity(
    state,
    {
      id: props.params.id,
      path: 'indicators',
      out: 'js',
      extend: {
        path: 'due_dates',
        key: 'indicator_id',
        reverse: true,
        as: 'dates',
        without: {
          path: 'progress_reports',
          key: 'due_date_id',
        },
      },
    },
  ),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEntitiesIfNeeded: () => {
      dispatch(loadEntitiesIfNeeded('indicators'));
      dispatch(loadEntitiesIfNeeded('due_dates'));
      dispatch(loadEntitiesIfNeeded('progress_reports'));
    },
    handleSubmit: (formData, indicatorReference) => {
      let saveData = formData;

      saveData = saveData.setIn(['attributes', 'indicator_id'], indicatorReference);

      // TODO: remove once have singleselect instead of multiselect
      const formDateIds = getCheckedValuesFromOptions(formData.get('associatedDate'));
      if (List.isList(formDateIds) && formDateIds.size) {
        saveData = saveData.setIn(['attributes', 'due_date_id'], formDateIds.first());
      }

      dispatch(save(saveData.toJS()));
    },
    handleCancel: (indicatorReference) => {
      // not really a dispatch function here, could be a member function instead
      // however
      // - this could in the future be moved to a saga or reducer
      // - also its nice to be next to handleSubmit
      dispatch(updatePath(`/indicators/${indicatorReference}`));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportNew);
