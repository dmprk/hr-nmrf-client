import { reduce } from 'lodash/collection';

// figure out filter groups for filter panel
export const makeFilterGroups = ({
  filters,
  taxonomies,
  connections,
  connectedTaxonomies,
  activeFilterOption,
}) => {
  const filterGroups = {};

  // taxonomy option group
  if (filters.taxonomies && taxonomies) {
    // first prepare taxonomy options
    filterGroups.taxonomies = {
      id: 'taxonomies', // filterGroupId
      label: filters.taxonomies.label,
      show: true,
      options: reduce(Object.values(taxonomies), (taxOptions, taxonomy) => ({
        ...taxOptions,
        [taxonomy.id]: {
          id: taxonomy.id, // filterOptionId
          label: taxonomy.attributes.title,
          active: !!activeFilterOption && activeFilterOption.optionId === taxonomy.id,
        },
      }), {}),
    };
  }

  // connectedTaxonomies option group
  if (filters.connectedTaxonomies && connectedTaxonomies.taxonomies) {
    // first prepare taxonomy options
    filterGroups.connectedTaxonomies = {
      id: 'connectedTaxonomies', // filterGroupId
      label: filters.connectedTaxonomies.label,
      show: true,
      options: reduce(Object.values(connectedTaxonomies.taxonomies), (taxOptions, taxonomy) => ({
        ...taxOptions,
        [taxonomy.id]: {
          id: taxonomy.id, // filterOptionId
          label: taxonomy.attributes.title,
          active: !!activeFilterOption && activeFilterOption.optionId === taxonomy.id,
        },
      }), {}),
    };
  }

  // connections option group
  if (filters.connections && connections) {
    // first prepare taxonomy options
    filterGroups.connections = {
      id: 'connections', // filterGroupId
      label: filters.connections.label,
      show: true,
      options: reduce(filters.connections.options, (options, option) => ({
        ...options,
        [option.path]: {
          id: option.path, // filterOptionId
          label: option.label,
          active: !!activeFilterOption && activeFilterOption.optionId === option.path,
        },
      }), {}),
    };
  }

  // attributes
  if (filters.attributes) {
    // first prepare taxonomy options
    filterGroups.attributes = {
      id: 'attributes', // filterGroupId
      label: filters.attributes.label,
      show: true,
      options: reduce(filters.attributes.options, (options, option) => ({
        ...options,
        [option.attribute]: {
          id: option.attribute, // filterOptionId
          label: option.label,
          active: !!activeFilterOption && activeFilterOption.optionId === option.attribute,
        },
      }), {}),
    };
  }

  return filterGroups;
};
