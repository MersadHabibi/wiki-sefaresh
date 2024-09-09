/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
  PositiveFloat: { input: number; output: number; }
  PositiveInt: { input: number; output: number; }
  URL: { input: string; output: string; }
};

export type Experience = {
  __typename?: 'Experience';
  Store: Store;
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  orderDate?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  score: Scalars['PositiveFloat']['output'];
  storeId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExperience?: Maybe<Experience>;
  createStore?: Maybe<Store>;
};


export type MutationCreateExperienceArgs = {
  input?: InputMaybe<CreateExperienceInput>;
};


export type MutationCreateStoreArgs = {
  input?: InputMaybe<CreateStoreInput>;
};

export type Query = {
  __typename?: 'Query';
  experience: Experience;
  experiences: Array<Maybe<Experience>>;
  lastExperiences: Array<Maybe<Experience>>;
  lastExperiencesByStore: Array<Maybe<Experience>>;
  popularStores: Array<Maybe<Store>>;
  store: Store;
  stores: Array<Maybe<Store>>;
};


export type QueryExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLastExperiencesByStoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoreArgs = {
  id: Scalars['ID']['input'];
};

export type Store = {
  __typename?: 'Store';
  activityField: Scalars['String']['output'];
  experiences?: Maybe<Array<Maybe<Experience>>>;
  experiencesCount: Scalars['PositiveInt']['output'];
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  telegram?: Maybe<Scalars['String']['output']>;
  view: Scalars['PositiveInt']['output'];
  website?: Maybe<Scalars['URL']['output']>;
};

export type CreateExperienceInput = {
  body: Scalars['String']['input'];
  orderDate?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['PositiveInt']['input'];
  storeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateStoreInput = {
  activityField: Scalars['String']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  telegram?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['URL']['input']>;
};

export type CreateStoreMutationVariables = Exact<{
  input?: InputMaybe<CreateStoreInput>;
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore?: { __typename?: 'Store', id: string } | null };

export type ExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExperiencesQuery = { __typename?: 'Query', experiences: Array<{ __typename?: 'Experience', id: string, title: string, body: string, createdAt: Date, score: number, storeId: string, Store: { __typename?: 'Store', id: string, name: string } } | null> };

export type AllStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStoresQuery = { __typename?: 'Query', stores: Array<{ __typename?: 'Store', id: string, name: string, activityField: string, experiencesCount: number, website?: string | null, score: number } | null> };

export type ExperienceByIdQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type ExperienceByIdQuery = { __typename?: 'Query', experience: { __typename?: 'Experience', id: string, title: string, body: string, createdAt: Date, score: number, storeId: string, product?: string | null, orderDate?: Date | null, Store: { __typename?: 'Store', id: string, name: string } } };

export type LastExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type LastExperiencesQuery = { __typename?: 'Query', lastExperiences: Array<{ __typename?: 'Experience', id: string, title: string, body: string, createdAt: Date, score: number, storeId: string, Store: { __typename?: 'Store', id: string, name: string } } | null> };

export type LastExperiencesByStoreQueryVariables = Exact<{
  storeId: Scalars['ID']['input'];
}>;


export type LastExperiencesByStoreQuery = { __typename?: 'Query', lastExperiencesByStore: Array<{ __typename?: 'Experience', id: string, title: string, body: string, createdAt: Date, score: number, storeId: string, Store: { __typename?: 'Store', id: string, name: string } } | null> };

export type PopularStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularStoresQuery = { __typename?: 'Query', popularStores: Array<{ __typename?: 'Store', id: string, name: string } | null> };

export type StoreByIdQueryVariables = Exact<{
  storeId: Scalars['ID']['input'];
}>;


export type StoreByIdQuery = { __typename?: 'Query', store: { __typename?: 'Store', id: string, website?: string | null, telegram?: string | null, score: number, name: string, instagram?: string | null, experiencesCount: number, activityField: string } };


export const CreateStoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createStore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"createStoreInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateStoreMutation, CreateStoreMutationVariables>;
export const ExperiencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"storeId"}},{"kind":"Field","name":{"kind":"Name","value":"Store"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ExperiencesQuery, ExperiencesQueryVariables>;
export const AllStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"activityField"}},{"kind":"Field","name":{"kind":"Name","value":"experiencesCount"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]} as unknown as DocumentNode<AllStoresQuery, AllStoresQueryVariables>;
export const ExperienceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperienceById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"storeId"}},{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"orderDate"}},{"kind":"Field","name":{"kind":"Name","value":"Store"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceByIdQuery, ExperienceByIdQueryVariables>;
export const LastExperiencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LastExperiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastExperiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"storeId"}},{"kind":"Field","name":{"kind":"Name","value":"Store"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LastExperiencesQuery, LastExperiencesQueryVariables>;
export const LastExperiencesByStoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LastExperiencesByStore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastExperiencesByStore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"storeId"}},{"kind":"Field","name":{"kind":"Name","value":"Store"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LastExperiencesByStoreQuery, LastExperiencesByStoreQueryVariables>;
export const PopularStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PopularStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popularStores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PopularStoresQuery, PopularStoresQueryVariables>;
export const StoreByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoreById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"store"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"experiencesCount"}},{"kind":"Field","name":{"kind":"Name","value":"activityField"}}]}}]}}]} as unknown as DocumentNode<StoreByIdQuery, StoreByIdQueryVariables>;