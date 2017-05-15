/*
 *
 * UserView
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { loadEntitiesIfNeeded, updatePath } from 'containers/App/actions';

import { CONTENT_SINGLE } from 'containers/App/constants';

import Loading from 'components/Loading';
import Content from 'components/Content';
import ContentHeader from 'components/ContentHeader';
import EntityView from 'components/EntityView';

import {
  getUser,
  getEntities,
  isReady,
  isUserManager,
  getSessionUserId,
} from 'containers/App/selectors';

import messages from './messages';

export class UserView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadEntitiesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    // reload entities if not ready or no longer ready (eg invalidated)
    if (!nextProps.dataReady) {
      this.props.loadEntitiesIfNeeded();
    }
  }

  // only show the highest rated role (lower role ids means higher)
  getUserRole = (roles) => {
    const highestRole = Object.values(roles).reduce((currentHighestRole, role) =>
      !currentHighestRole || role.role.id < currentHighestRole.id
      ? role.role
      : currentHighestRole
    , null);
    return highestRole.attributes.friendly_name;
  }

  getButtons = () => {
    const userId = this.props.user.id || this.props.user.attributes.id;
    const edit = {
      type: 'edit',
      onClick: () => this.props.handleEdit(userId),
    };
    const close = {
      type: 'close',
      onClick: this.props.handleClose,
    };
    if (userId === this.props.sessionUserId) {
      return [
        {
          type: 'edit',
          title: this.context.intl.formatMessage(messages.editPassword),
          onClick: () => this.props.handleEditPassword(userId),
        },
        edit,
        close,
      ];
    }
    return [edit, close];
  };

  mapCategoryOptions = (categories) => categories
    ? Object.values(categories).map((cat) => ({
      label: cat.attributes.title,
      linkTo: `/category/${cat.id}`,
    }))
    : []

  renderTaxonomyLists = (taxonomies) =>
    Object.values(taxonomies).map((taxonomy) => ({
      id: taxonomy.id,
      heading: taxonomy.attributes.title,
      type: 'list',
      values: this.mapCategoryOptions(taxonomy.categories),
    }))

  render() {
    const { user, dataReady, isManager } = this.props;
    const reference = user && user.id;
    // dataReady && console.log(this.props.taxonomies)
    return (
      <div>
        <Helmet
          title={this.context.intl.formatMessage(messages.pageTitle)}
          meta={[
            { name: 'description', content: this.context.intl.formatMessage(messages.metaDescription) },
          ]}
        />
        <Content>
          <ContentHeader
            title={this.context.intl.formatMessage(messages.pageTitle)}
            type={CONTENT_SINGLE}
            icon="users"
            buttons={user && this.getButtons()}
          />
          { !user && !dataReady &&
            <Loading />
          }
          { !user && dataReady &&
            <div>
              <FormattedMessage {...messages.notFound} />
            </div>
          }
          { user && dataReady &&
            <EntityView
              fields={{
                header: {
                  main: [
                    {
                      id: 'name',
                      heading: 'Name',
                      value: user.attributes.name,
                    },
                  ],
                  aside: isManager
                  ? [
                    {
                      id: 'role',
                      heading: 'Role',
                      value: user.roles ? this.getUserRole(user.roles) : 'User',
                    },
                    {
                      id: 'number',
                      heading: 'Number',
                      value: reference,
                    },
                    {
                      id: 'updated',
                      heading: 'Updated At',
                      value: user.attributes.updated_at,
                    },
                    {
                      id: 'updated_by',
                      heading: 'Updated By',
                      value: user.user && user.user.attributes.name,
                    },
                  ]
                  : [],
                },
                body: {
                  main: [
                    {
                      id: 'email',
                      heading: 'Email',
                      value: user.attributes.email,
                    },
                  ],
                  aside: isManager ? this.renderTaxonomyLists(this.props.taxonomies) : [],
                },
              }}
            />
          }
        </Content>
      </div>
    );
  }
}

UserView.propTypes = {
  loadEntitiesIfNeeded: PropTypes.func,
  handleEdit: PropTypes.func,
  handleEditPassword: PropTypes.func,
  handleClose: PropTypes.func,
  user: PropTypes.object,
  taxonomies: PropTypes.object,
  dataReady: PropTypes.bool,
  isManager: PropTypes.bool,
  sessionUserId: PropTypes.string,
};

UserView.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  isManager: isUserManager(state),
  dataReady: isReady(state, { path: [
    'users',
    'roles',
    'categories',
    'taxonomies',
    'user_categories',
  ] }),
  sessionUserId: getSessionUserId(state),
  user: getUser(
    state,
    {
      id: props.params.id,
      out: 'js',
      extend: [
        {
          type: 'single',
          path: 'users',
          key: 'last_modified_user_id',
          as: 'user',
        },
        {
          path: 'user_roles',
          key: 'user_id',
          as: 'roles',
          reverse: true,
          extend: {
            type: 'single',
            path: 'roles',
            key: 'role_id',
            as: 'role',
          },
        },
      ],
    },
  ),
  // all connected categories for all user-taggable taxonomies
  taxonomies: getEntities(
    state,
    {
      path: 'taxonomies',
      where: {
        tags_users: true,
      },
      extend: {
        path: 'categories',
        key: 'taxonomy_id',
        reverse: true,
        connected: {
          path: 'user_categories',
          key: 'category_id',
          where: {
            user_id: props.params.id,
          },
        },
      },
      out: 'js',
    },
  ),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEntitiesIfNeeded: () => {
      dispatch(loadEntitiesIfNeeded('users'));
      dispatch(loadEntitiesIfNeeded('user_roles'));
      dispatch(loadEntitiesIfNeeded('roles'));
      dispatch(loadEntitiesIfNeeded('taxonomies'));
      dispatch(loadEntitiesIfNeeded('categories'));
      dispatch(loadEntitiesIfNeeded('user_categories'));
    },
    handleEdit: (userId) => {
      dispatch(updatePath(`/users/edit/${userId}`));
    },
    handleEditPassword: (userId) => {
      dispatch(updatePath(`/users/password/${userId}`));
    },
    handleClose: () => {
      dispatch(updatePath('/'));
      // TODO should be "go back" if history present or to categories list when not
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
