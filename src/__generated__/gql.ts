/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Experiences {\n    experiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n": types.ExperiencesDocument,
    "\n  query AllStores {\n    stores {\n      id\n      name\n      activityField\n      experiencesCount\n      website\n      score\n    }\n  }\n": types.AllStoresDocument,
    "\n  query ExperienceById($experienceId: ID!) {\n    experience(id: $experienceId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      product\n      orderDate\n      Store {\n        id\n        name\n      }\n    }\n  }\n": types.ExperienceByIdDocument,
    "\n  query LastExperiences {\n    lastExperiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n": types.LastExperiencesDocument,
    "\n  query PopularStores {\n    popularStores {\n      id\n      name\n    }\n  }\n": types.PopularStoresDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Experiences {\n    experiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Experiences {\n    experiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllStores {\n    stores {\n      id\n      name\n      activityField\n      experiencesCount\n      website\n      score\n    }\n  }\n"): (typeof documents)["\n  query AllStores {\n    stores {\n      id\n      name\n      activityField\n      experiencesCount\n      website\n      score\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ExperienceById($experienceId: ID!) {\n    experience(id: $experienceId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      product\n      orderDate\n      Store {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ExperienceById($experienceId: ID!) {\n    experience(id: $experienceId) {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      product\n      orderDate\n      Store {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LastExperiences {\n    lastExperiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query LastExperiences {\n    lastExperiences {\n      id\n      title\n      body\n      createdAt\n      score\n      storeId\n      Store {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PopularStores {\n    popularStores {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query PopularStores {\n    popularStores {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;