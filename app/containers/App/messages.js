/*
 * Global Messages
 *
 * This contains the global text.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  app: {
    title: {
      id: 'app.containers.App.app.title',
      defaultMessage: 'New Zealand\'s National Plan of Action',
    },
    claim: {
      id: 'app.containers.App.app.claim',
      defaultMessage: 'Mahere Rautāki a Motu',
    },
  },
  buttons: {
    cancel: {
      id: 'app.containers.App.buttons.cancel',
      defaultMessage: 'Cancel',
    },
    save: {
      id: 'app.containers.App.buttons.save',
      defaultMessage: 'Save',
    },
    close: {
      id: 'app.containers.App.buttons.close',
      defaultMessage: 'Close',
    },
    add: {
      id: 'app.containers.App.buttons.add',
      defaultMessage: 'Add',
    },
    edit: {
      id: 'app.containers.App.buttons.edit',
      defaultMessage: 'Edit',
    },
    assign: {
      id: 'app.containers.App.buttons.assign',
      defaultMessage: 'Assign',
    },
  },
  forms: {
    fieldRequired: {
      id: 'app.containers.App.forms.fieldRequired',
      defaultMessage: 'This field cannot be empty',
    },
    dateFormatError: {
      id: 'app.containers.App.forms.dateFormatError',
      defaultMessage: 'Please enter the date in the required format: YYYY-MM-DD',
    },
  },
  placeholders: {
    title: {
      id: 'app.containers.App.placeholders.title',
      defaultMessage: 'Enter title',
    },
    short_title: {
      id: 'app.containers.App.placeholders.title',
      defaultMessage: 'Abbr.',
    },
    menu_title: {
      id: 'app.containers.App.placeholders.title',
      defaultMessage: '',
    },
    description: {
      id: 'app.containers.App.placeholders.description',
      defaultMessage: 'Enter content',
    },
    url: {
      id: 'app.containers.App.placeholders.url',
      defaultMessage: 'Enter full URL',
    },
    number: {
      id: 'app.containers.App.placeholders.number',
      defaultMessage: 'ID',
    },
  },
  attributes: {
    draft: {
      id: 'app.containers.App.attributes.draft',
      defaultMessage: 'Status',
    },
    title: {
      id: 'app.containers.App.attributes.title',
      defaultMessage: 'Title',
    },
    description: {
      id: 'app.containers.App.attributes.description',
      defaultMessage: 'Content',
    },
    short_title: {
      id: 'app.containers.App.attributes.short_title',
      defaultMessage: 'Short title',
    },
    menu_title: {
      id: 'app.containers.App.attributes.menu_title',
      defaultMessage: 'Menu title',
    },
    reference: {
      id: 'app.containers.App.attributes.reference',
      defaultMessage: 'Reference',
    },
    id: {
      id: 'app.containers.App.attributes.id',
      defaultMessage: 'No.',
    },
    idOrRef: {
      id: 'app.containers.App.attributes.idOrRef',
      defaultMessage: 'No./Ref.',
    },
    name: {
      id: 'app.containers.App.attributes.name',
      defaultMessage: 'User name',
    },
    email: {
      id: 'app.containers.App.attributes.email',
      defaultMessage: 'Email address',
    },
    status: {
      id: 'app.containers.App.attributes.status',
      defaultMessage: 'Status',
    },
    url: {
      id: 'app.containers.App.attributes.url',
      defaultMessage: 'Website',
    },
    date: {
      id: 'app.containers.App.attributes.date',
      defaultMessage: 'Date',
    },
    target_date: {
      id: 'app.containers.App.attributes.target_date',
      defaultMessage: 'Target date',
    },
    start_date: {
      id: 'app.containers.App.attributes.start_date',
      defaultMessage: 'Date (start date)',
    },
    end_date: {
      id: 'app.containers.App.attributes.end_date',
      defaultMessage: 'End date',
    },
    frequency_months: {
      id: 'app.containers.App.attributes.frequency_months',
      defaultMessage: 'Reporting frequency',
    },
    repeat: {
      id: 'app.containers.App.attributes.repeat',
      defaultMessage: 'Repeat?',
    },
    targetDateEmpty: {
      id: 'app.containers.App.attributes.targetDateEmpty',
      defaultMessage: 'No target date set',
    },
    document_url: {
      id: 'app.containers.App.attributes.document_url',
      defaultMessage: 'Attached document',
    },
    document_upload: {
      id: 'app.containers.App.attributes.document_upload',
      defaultMessage: 'Upload document',
    },
    document_uploading: {
      id: 'app.containers.App.attributes.document_uploading',
      defaultMessage: 'Uploading document',
    },
    document_public: {
      id: 'app.containers.App.attributes.document_public',
      defaultMessage: 'Document status',
    },
    documentEmpty: {
      id: 'app.containers.App.attributes.documentEmpty',
      defaultMessage: 'No document attached yet',
    },
    manager_id: {
      indicators: {
        id: 'app.containers.App.attributes.manager_id.indicators',
        defaultMessage: 'Assigned user',
      },
      categories: {
        id: 'app.containers.App.attributes.manager_id.categories',
        defaultMessage: 'Category manager',
      },
      categoriesEmpty: {
        id: 'app.containers.App.attributes.manager_id.categoriesEmpty',
        defaultMessage: 'No category manager assigned',
      },
      indicatorsEmpty: {
        id: 'app.containers.App.attributes.manager_id.indicatorsEmpty',
        defaultMessage: 'No indicator reporter assigned',
      },
    },
    meta: {
      title: {
        id: 'app.containers.App.attributes.meta.title',
        defaultMessage: 'Meta',
      },
      updated_by: {
        id: 'app.containers.App.attributes.meta.updated_by',
        defaultMessage: 'Updated by',
      },
      updated_at: {
        id: 'app.containers.App.attributes.meta.updated_at',
        defaultMessage: 'Last updated',
      },
    },
  },
  entities: {
    showAll: {
      id: 'app.containers.App.entities.showAll',
      defaultMessage: 'Show all',
    },
    showLess: {
      id: 'app.containers.App.entities.showLess',
      defaultMessage: 'Show less',
    },
    recommendations: {
      single: {
        id: 'app.containers.App.entities.recommendations.single',
        defaultMessage: 'Recommendation',
      },
      plural: {
        id: 'app.containers.App.entities.recommendations.plural',
        defaultMessage: 'Recommendations',
      },
      singleLong: {
        id: 'app.containers.App.entities.recommendations.singleLong',
        defaultMessage: 'HR body recommendation',
      },
      pluralLong: {
        id: 'app.containers.App.entities.recommendations.pluralLong',
        defaultMessage: 'HR body recommendations',
      },
      empty: {
        id: 'app.containers.App.entities.recommendations.empty',
        defaultMessage: 'No recommendations yet',
      },
    },
    measures: {
      single: {
        id: 'app.containers.App.entities.measures.single',
        defaultMessage: 'Action',
      },
      plural: {
        id: 'app.containers.App.entities.measures.plural',
        defaultMessage: 'Actions',
      },
      singleLong: {
        id: 'app.containers.App.entities.measures.singleLong',
        defaultMessage: 'Government action',
      },
      pluralLong: {
        id: 'app.containers.App.entities.measures.pluralLong',
        defaultMessage: 'Government actions',
      },
      empty: {
        id: 'app.containers.App.entities.measures.empty',
        defaultMessage: 'No actions yet',
      },
    },
    sdgtargets: {
      single: {
        id: 'app.containers.App.entities.sdgtargets.single',
        defaultMessage: 'SDG target',
      },
      plural: {
        id: 'app.containers.App.entities.sdgtargets.plural',
        defaultMessage: 'SDG targets',
      },
      empty: {
        id: 'app.containers.App.entities.sdgtargets.empty',
        defaultMessage: 'No SDG targets yet',
      },
    },
    indicators: {
      single: {
        id: 'app.containers.App.entities.indicators.single',
        defaultMessage: 'Indicator',
      },
      plural: {
        id: 'app.containers.App.entities.indicators.plural',
        defaultMessage: 'Indicators',
      },
      empty: {
        id: 'app.containers.App.entities.indicators.empty',
        defaultMessage: 'No indicators yet',
      },
    },
    pages: {
      single: {
        id: 'app.containers.App.entities.pages.single',
        defaultMessage: 'Page',
      },
      plural: {
        id: 'app.containers.App.entities.pages.plural',
        defaultMessage: 'Pages',
      },
    },
    users: {
      single: {
        id: 'app.containers.App.entities.users.single',
        defaultMessage: 'User',
      },
      plural: {
        id: 'app.containers.App.entities.users.plural',
        defaultMessage: 'Users',
      },
    },
    progress_reports: {
      single: {
        id: 'app.containers.App.entities.progress_reports.single',
        defaultMessage: 'Progress report',
      },
      plural: {
        id: 'app.containers.App.entities.progress_reports.plural',
        defaultMessage: 'Progress reports',
      },
      empty: {
        id: 'app.containers.App.entities.progress_reports.empty',
        defaultMessage: 'No reports yet',
      },
      unscheduled: {
        id: 'app.containers.App.entities.progress_reports.unscheduled',
        defaultMessage: 'Extraordinary (no due date assigned)',
      },
      unscheduled_short: {
        id: 'app.containers.App.entities.progress_reports.unscheduled',
        defaultMessage: 'Extraordinary',
      },
      showAll: {
        id: 'app.containers.App.entities.progress_reports.showAll',
        defaultMessage: 'Show all reports',
      },
      showLess: {
        id: 'app.containers.App.entities.progress_reports.showLess',
        defaultMessage: 'Show less reports',
      },
    },
    connections: {
      single: {
        id: 'app.containers.App.entities.connections.single',
        defaultMessage: 'Connection',
      },
      plural: {
        id: 'app.containers.App.entities.connections.plural',
        defaultMessage: 'Connections',
      },
    },
    taxonomies: {
      single: {
        id: 'app.containers.App.entities.taxonomies.single',
        defaultMessage: 'Category',
      },
      plural: {
        id: 'app.containers.App.entities.taxonomies.plural',
        defaultMessage: 'Categories',
      },
      1: {
        single: {
          id: 'app.containers.App.entities.taxonomies.1.single',
          defaultMessage: 'Human rights body',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.1.plural',
          defaultMessage: 'Human rights bodies',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.1.empty',
          defaultMessage: 'No human rights body assigned yet',
        },
      },
      2: {
        single: {
          id: 'app.containers.App.entities.taxonomies.2.single',
          defaultMessage: 'Cycle',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.2.plural',
          defaultMessage: 'Cycles',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.2.empty',
          defaultMessage: 'No cycle assigned yet',
        },
      },
      3: {
        single: {
          id: 'app.containers.App.entities.taxonomies.3.single',
          defaultMessage: 'SDG',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.3.plural',
          defaultMessage: 'SDGs',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.3.empty',
          defaultMessage: 'No SDG assigned yet',
        },
      },
      4: {
        single: {
          id: 'app.containers.App.entities.taxonomies.4.single',
          defaultMessage: 'Recommending state',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.4.plural',
          defaultMessage: 'Recommending states',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.4.empty',
          defaultMessage: 'No recommending state assigned/not applicable',
        },
      },
      5: {
        single: {
          id: 'app.containers.App.entities.taxonomies.5.single',
          defaultMessage: 'Issue',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.5.plural',
          defaultMessage: 'Issues',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.5.empty',
          defaultMessage: 'No issue assigned yet',
        },
      },
      6: {
        single: {
          id: 'app.containers.App.entities.taxonomies.6.single',
          defaultMessage: 'Population group',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.6.plural',
          defaultMessage: 'Population groups',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.6.empty',
          defaultMessage: 'No population group assigned yet',
        },
      },
      7: {
        single: {
          id: 'app.containers.App.entities.taxonomies.7.single',
          defaultMessage: 'SMART criterion',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.7.plural',
          defaultMessage: 'SMART criteria',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.7.empty',
          defaultMessage: 'No SMART criterion assigned yet',
        },
      },
      8: {
        single: {
          id: 'app.containers.App.entities.taxonomies.8.single',
          defaultMessage: 'Government agency',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.8.plural',
          defaultMessage: 'Government agencies',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.8.empty',
          defaultMessage: 'No Government agency assigned yet',
        },
      },
    },
    due_dates: {
      single: {
        id: 'app.containers.App.entities.due_dates.single',
        defaultMessage: 'Due date',
      },
      plural: {
        id: 'app.containers.App.entities.due_dates.plural',
        defaultMessage: 'Due dates',
      },
      empty: {
        id: 'app.containers.App.entities.due_dates.empty',
        defaultMessage: 'No report scheduled',
      },
      overdue: {
        id: 'app.containers.App.entities.due_dates.overdue',
        defaultMessage: 'Report overdue',
      },
      due: {
        id: 'app.containers.App.entities.due_dates.due',
        defaultMessage: 'Report due',
      },
      scheduled: {
        id: 'app.containers.App.entities.due_dates.due',
        defaultMessage: 'Report scheduled',
      },
      showAll: {
        id: 'app.containers.App.entities.due_dates.showAll',
        defaultMessage: 'Show all dates',
      },
      showLess: {
        id: 'app.containers.App.entities.due_dates.showLess',
        defaultMessage: 'Show less dates',
      },
      schedule: {
        id: 'app.containers.App.entities.due_dates.schedule',
        defaultMessage: 'Progress report schedule',
      },
    },
    categories: {
      single: {
        id: 'app.containers.App.entities.categories.single',
        defaultMessage: 'Category',
      },
      plural: {
        id: 'app.containers.App.entities.categories.plural',
        defaultMessage: 'Categories',
      },
    },
    roles: {
      single: {
        id: 'app.containers.App.entities.roles.single',
        defaultMessage: 'User role',
      },
      plural: {
        id: 'app.containers.App.entities.roles.plural',
        defaultMessage: 'User roles',
      },
      defaultRole: {
        id: 'app.containers.App.entities.user_roles.defaultRole',
        defaultMessage: 'No role assigned',
      },
    },
  },
});
