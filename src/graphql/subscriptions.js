/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateList = /* GraphQL */ `
  subscription OnCreateList(
    $filter: ModelSubscriptionListFilterInput
    $owner: String
  ) {
    onCreateList(filter: $filter, owner: $owner) {
      id
      title
      description
      imageKey
      slug
      listItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList(
    $filter: ModelSubscriptionListFilterInput
    $owner: String
  ) {
    onUpdateList(filter: $filter, owner: $owner) {
      id
      title
      description
      imageKey
      slug
      listItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList(
    $filter: ModelSubscriptionListFilterInput
    $owner: String
  ) {
    onDeleteList(filter: $filter, owner: $owner) {
      id
      title
      description
      imageKey
      slug
      listItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem(
    $filter: ModelSubscriptionListItemFilterInput
    $owner: String
  ) {
    onCreateListItem(filter: $filter, owner: $owner) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        imageKey
        slug
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      listListItemsId
      listItemListId
      owner
      __typename
    }
  }
`;
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem(
    $filter: ModelSubscriptionListItemFilterInput
    $owner: String
  ) {
    onUpdateListItem(filter: $filter, owner: $owner) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        imageKey
        slug
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      listListItemsId
      listItemListId
      owner
      __typename
    }
  }
`;
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem(
    $filter: ModelSubscriptionListItemFilterInput
    $owner: String
  ) {
    onDeleteListItem(filter: $filter, owner: $owner) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        imageKey
        slug
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      listListItemsId
      listItemListId
      owner
      __typename
    }
  }
`;
