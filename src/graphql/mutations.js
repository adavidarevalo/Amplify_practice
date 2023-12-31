/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
export const createListItem = /* GraphQL */ `
  mutation CreateListItem(
    $input: CreateListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    createListItem(input: $input, condition: $condition) {
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
export const updateListItem = /* GraphQL */ `
  mutation UpdateListItem(
    $input: UpdateListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    updateListItem(input: $input, condition: $condition) {
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
export const deleteListItem = /* GraphQL */ `
  mutation DeleteListItem(
    $input: DeleteListItemInput!
    $condition: ModelListItemConditionInput
  ) {
    deleteListItem(input: $input, condition: $condition) {
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
