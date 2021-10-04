import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Base = {
  __typename?: 'Base';
  createdAt: Scalars['ISO8601DateTime'];
  defaultBpm?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  maxPlaybackRate?: Maybe<Scalars['Float']>;
  minPlaybackRate?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  videos: VideoConnection;
};


export type BaseVideosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Base. */
export type BaseConnection = {
  __typename?: 'BaseConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Base>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BaseEdge = {
  __typename?: 'BaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Base>;
};

/** Autogenerated input type of CreatePlaylist */
export type CreatePlaylistInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreatePlaylist */
export type CreatePlaylistPayload = {
  __typename?: 'CreatePlaylistPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Detail;
};

/** Autogenerated input type of CreateVideo */
export type CreateVideoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  playlistId: Scalars['Int'];
  youtubeVideoId: Scalars['String'];
};

/** Autogenerated return type of CreateVideo */
export type CreateVideoPayload = {
  __typename?: 'CreateVideoPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  video: Video;
};

/** Autogenerated input type of CreateVideos */
export type CreateVideosInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  playlistId: Scalars['Int'];
  youtubePlaylistId: Scalars['String'];
};

/** Autogenerated return type of CreateVideos */
export type CreateVideosPayload = {
  __typename?: 'CreateVideosPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  videos: Array<Video>;
};

/** Autogenerated input type of DeleteVideo */
export type DeleteVideoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
};

/** Autogenerated return type of DeleteVideo */
export type DeleteVideoPayload = {
  __typename?: 'DeleteVideoPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Base;
};

export type Detail = {
  __typename?: 'Detail';
  createdAt: Scalars['ISO8601DateTime'];
  defaultBpm?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  maxPlaybackRate?: Maybe<Scalars['Float']>;
  minPlaybackRate?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  videos: VideoConnection;
};


export type DetailVideosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlaylist?: Maybe<CreatePlaylistPayload>;
  createVideo?: Maybe<CreateVideoPayload>;
  createVideos?: Maybe<CreateVideosPayload>;
  deleteVideo?: Maybe<DeleteVideoPayload>;
  updatePlaylist?: Maybe<UpdatePlaylistPayload>;
  updatePlaylistDefaultBpm?: Maybe<UpdatePlaylistDefaultBpmPayload>;
  updatePlaylistMaxPlaybackRate?: Maybe<UpdatePlaylistMaxPlaybackRatePayload>;
  updatePlaylistMinPlaybackRate?: Maybe<UpdatePlaylistMinPlaybackRatePayload>;
  updatePlaylistTitle?: Maybe<UpdatePlaylistTitlePayload>;
  updateVideo?: Maybe<UpdateVideoPayload>;
};


export type MutationCreatePlaylistArgs = {
  input: CreatePlaylistInput;
};


export type MutationCreateVideoArgs = {
  input: CreateVideoInput;
};


export type MutationCreateVideosArgs = {
  input: CreateVideosInput;
};


export type MutationDeleteVideoArgs = {
  input: DeleteVideoInput;
};


export type MutationUpdatePlaylistArgs = {
  input: UpdatePlaylistInput;
};


export type MutationUpdatePlaylistDefaultBpmArgs = {
  input: UpdatePlaylistDefaultBpmInput;
};


export type MutationUpdatePlaylistMaxPlaybackRateArgs = {
  input: UpdatePlaylistMaxPlaybackRateInput;
};


export type MutationUpdatePlaylistMinPlaybackRateArgs = {
  input: UpdatePlaylistMinPlaybackRateInput;
};


export type MutationUpdatePlaylistTitleArgs = {
  input: UpdatePlaylistTitleInput;
};


export type MutationUpdateVideoArgs = {
  input: UpdateVideoInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PlaylistInput = {
  defaultBpm?: Maybe<Scalars['Int']>;
  maxPlaybackRate?: Maybe<Scalars['Float']>;
  minPlaybackRate?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  playlist: Base;
  playlists: BaseConnection;
};


export type QueryPlaylistArgs = {
  id: Scalars['Int'];
};


export type QueryPlaylistsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  ids?: Maybe<Array<Scalars['Int']>>;
  keyword?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of UpdatePlaylistDefaultBpm */
export type UpdatePlaylistDefaultBpmInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  defaultBpm?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  key: Scalars['String'];
};

/** Autogenerated return type of UpdatePlaylistDefaultBpm */
export type UpdatePlaylistDefaultBpmPayload = {
  __typename?: 'UpdatePlaylistDefaultBpmPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Base;
};

/** Autogenerated input type of UpdatePlaylist */
export type UpdatePlaylistInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  playlistInput: PlaylistInput;
};

/** Autogenerated input type of UpdatePlaylistMaxPlaybackRate */
export type UpdatePlaylistMaxPlaybackRateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  maxPlaybackRate?: Maybe<Scalars['Float']>;
};

/** Autogenerated return type of UpdatePlaylistMaxPlaybackRate */
export type UpdatePlaylistMaxPlaybackRatePayload = {
  __typename?: 'UpdatePlaylistMaxPlaybackRatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Base;
};

/** Autogenerated input type of UpdatePlaylistMinPlaybackRate */
export type UpdatePlaylistMinPlaybackRateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  minPlaybackRate?: Maybe<Scalars['Float']>;
};

/** Autogenerated return type of UpdatePlaylistMinPlaybackRate */
export type UpdatePlaylistMinPlaybackRatePayload = {
  __typename?: 'UpdatePlaylistMinPlaybackRatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Base;
};

/** Autogenerated return type of UpdatePlaylist */
export type UpdatePlaylistPayload = {
  __typename?: 'UpdatePlaylistPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Base;
};

/** Autogenerated input type of UpdatePlaylistTitle */
export type UpdatePlaylistTitleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  title: Scalars['String'];
};

/** Autogenerated return type of UpdatePlaylistTitle */
export type UpdatePlaylistTitlePayload = {
  __typename?: 'UpdatePlaylistTitlePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  playlist: Base;
};

/** Autogenerated input type of UpdateVideo */
export type UpdateVideoInput = {
  bpm?: Maybe<Scalars['Int']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
};

/** Autogenerated return type of UpdateVideo */
export type UpdateVideoPayload = {
  __typename?: 'UpdateVideoPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  video: Video;
};

export type Video = {
  __typename?: 'Video';
  bpm?: Maybe<Scalars['Int']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  playlist: Base;
  playlistId: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  youtubeVideoId: Scalars['String'];
  youtubeVideoTitle?: Maybe<Scalars['String']>;
};

/** The connection type for Video. */
export type VideoConnection = {
  __typename?: 'VideoConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VideoEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Video>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoEdge = {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Video>;
};

export type CreatePlaylistMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist?: { __typename?: 'CreatePlaylistPayload', playlist: { __typename?: 'Detail', id: string, key: string } } | null | undefined };

export type UpdatePlaylistMutationVariables = Exact<{
  id: Scalars['Int'];
  playlistInput: PlaylistInput;
  key: Scalars['String'];
}>;


export type UpdatePlaylistMutation = { __typename?: 'Mutation', updatePlaylist?: { __typename?: 'UpdatePlaylistPayload', playlist: { __typename?: 'Base', id: string, title: string, defaultBpm?: number | null | undefined, maxPlaybackRate?: number | null | undefined, minPlaybackRate?: number | null | undefined } } | null | undefined };

export type CreateVideoMutationVariables = Exact<{
  playlistId: Scalars['Int'];
  youtubeVideoId: Scalars['String'];
  key: Scalars['String'];
}>;


export type CreateVideoMutation = { __typename?: 'Mutation', createVideo?: { __typename?: 'CreateVideoPayload', video: { __typename?: 'Video', id: string } } | null | undefined };

export type CreateVideosMutationVariables = Exact<{
  playlistId: Scalars['Int'];
  youtubePlaylistId: Scalars['String'];
  key: Scalars['String'];
}>;


export type CreateVideosMutation = { __typename?: 'Mutation', createVideos?: { __typename?: 'CreateVideosPayload', videos: Array<{ __typename?: 'Video', id: string, youtubeVideoId: string, youtubeVideoTitle?: string | null | undefined, bpm?: number | null | undefined, playlistId: number }> } | null | undefined };

export type UpdateVideoMutationVariables = Exact<{
  id: Scalars['Int'];
  bpm?: Maybe<Scalars['Int']>;
  key: Scalars['String'];
}>;


export type UpdateVideoMutation = { __typename?: 'Mutation', updateVideo?: { __typename?: 'UpdateVideoPayload', video: { __typename?: 'Video', id: string, bpm?: number | null | undefined } } | null | undefined };

export type DeleteVideoMutationVariables = Exact<{
  id: Scalars['Int'];
  key: Scalars['String'];
}>;


export type DeleteVideoMutation = { __typename?: 'Mutation', deleteVideo?: { __typename?: 'DeleteVideoPayload', playlist: { __typename?: 'Base', id: string } } | null | undefined };

export type PlaylistQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PlaylistQuery = { __typename?: 'Query', playlist: { __typename?: 'Base', id: string, title: string, defaultBpm?: number | null | undefined, maxPlaybackRate?: number | null | undefined, minPlaybackRate?: number | null | undefined, videos: { __typename?: 'VideoConnection', edges?: Array<{ __typename?: 'VideoEdge', node?: { __typename?: 'Video', id: string, youtubeVideoId: string, youtubeVideoTitle?: string | null | undefined, bpm?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined } } };

export type PlaylistsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  ids?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type PlaylistsQuery = { __typename?: 'Query', playlists: { __typename?: 'BaseConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null | undefined }, edges?: Array<{ __typename?: 'BaseEdge', cursor: string, node?: { __typename?: 'Base', id: string, title: string, defaultBpm?: number | null | undefined, createdAt: any, videos: { __typename?: 'VideoConnection', edges?: Array<{ __typename?: 'VideoEdge', node?: { __typename?: 'Video', youtubeVideoId: string } | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };


export const CreatePlaylistDocument = gql`
    mutation createPlaylist {
  createPlaylist(input: {}) {
    playlist {
      id
      key
    }
  }
}
    `;
export type CreatePlaylistMutationFn = Apollo.MutationFunction<CreatePlaylistMutation, CreatePlaylistMutationVariables>;

/**
 * __useCreatePlaylistMutation__
 *
 * To run a mutation, you first call `useCreatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaylistMutation, { data, loading, error }] = useCreatePlaylistMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaylistMutation, CreatePlaylistMutationVariables>(CreatePlaylistDocument, options);
      }
export type CreatePlaylistMutationHookResult = ReturnType<typeof useCreatePlaylistMutation>;
export type CreatePlaylistMutationResult = Apollo.MutationResult<CreatePlaylistMutation>;
export type CreatePlaylistMutationOptions = Apollo.BaseMutationOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const UpdatePlaylistDocument = gql`
    mutation updatePlaylist($id: Int!, $playlistInput: PlaylistInput!, $key: String!) {
  updatePlaylist(input: {id: $id, playlistInput: $playlistInput, key: $key}) {
    playlist {
      id
      title
      defaultBpm
      maxPlaybackRate
      minPlaybackRate
    }
  }
}
    `;
export type UpdatePlaylistMutationFn = Apollo.MutationFunction<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;

/**
 * __useUpdatePlaylistMutation__
 *
 * To run a mutation, you first call `useUpdatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaylistMutation, { data, loading, error }] = useUpdatePlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      playlistInput: // value for 'playlistInput'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useUpdatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>(UpdatePlaylistDocument, options);
      }
export type UpdatePlaylistMutationHookResult = ReturnType<typeof useUpdatePlaylistMutation>;
export type UpdatePlaylistMutationResult = Apollo.MutationResult<UpdatePlaylistMutation>;
export type UpdatePlaylistMutationOptions = Apollo.BaseMutationOptions<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;
export const CreateVideoDocument = gql`
    mutation createVideo($playlistId: Int!, $youtubeVideoId: String!, $key: String!) {
  createVideo(
    input: {playlistId: $playlistId, youtubeVideoId: $youtubeVideoId, key: $key}
  ) {
    video {
      id
    }
  }
}
    `;
export type CreateVideoMutationFn = Apollo.MutationFunction<CreateVideoMutation, CreateVideoMutationVariables>;

/**
 * __useCreateVideoMutation__
 *
 * To run a mutation, you first call `useCreateVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoMutation, { data, loading, error }] = useCreateVideoMutation({
 *   variables: {
 *      playlistId: // value for 'playlistId'
 *      youtubeVideoId: // value for 'youtubeVideoId'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useCreateVideoMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideoMutation, CreateVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideoMutation, CreateVideoMutationVariables>(CreateVideoDocument, options);
      }
export type CreateVideoMutationHookResult = ReturnType<typeof useCreateVideoMutation>;
export type CreateVideoMutationResult = Apollo.MutationResult<CreateVideoMutation>;
export type CreateVideoMutationOptions = Apollo.BaseMutationOptions<CreateVideoMutation, CreateVideoMutationVariables>;
export const CreateVideosDocument = gql`
    mutation createVideos($playlistId: Int!, $youtubePlaylistId: String!, $key: String!) {
  createVideos(
    input: {playlistId: $playlistId, youtubePlaylistId: $youtubePlaylistId, key: $key}
  ) {
    videos {
      id
      youtubeVideoId
      youtubeVideoTitle
      bpm
      playlistId
    }
  }
}
    `;
export type CreateVideosMutationFn = Apollo.MutationFunction<CreateVideosMutation, CreateVideosMutationVariables>;

/**
 * __useCreateVideosMutation__
 *
 * To run a mutation, you first call `useCreateVideosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideosMutation, { data, loading, error }] = useCreateVideosMutation({
 *   variables: {
 *      playlistId: // value for 'playlistId'
 *      youtubePlaylistId: // value for 'youtubePlaylistId'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useCreateVideosMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideosMutation, CreateVideosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideosMutation, CreateVideosMutationVariables>(CreateVideosDocument, options);
      }
export type CreateVideosMutationHookResult = ReturnType<typeof useCreateVideosMutation>;
export type CreateVideosMutationResult = Apollo.MutationResult<CreateVideosMutation>;
export type CreateVideosMutationOptions = Apollo.BaseMutationOptions<CreateVideosMutation, CreateVideosMutationVariables>;
export const UpdateVideoDocument = gql`
    mutation updateVideo($id: Int!, $bpm: Int, $key: String!) {
  updateVideo(input: {id: $id, bpm: $bpm, key: $key}) {
    video {
      id
      bpm
    }
  }
}
    `;
export type UpdateVideoMutationFn = Apollo.MutationFunction<UpdateVideoMutation, UpdateVideoMutationVariables>;

/**
 * __useUpdateVideoMutation__
 *
 * To run a mutation, you first call `useUpdateVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoMutation, { data, loading, error }] = useUpdateVideoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      bpm: // value for 'bpm'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useUpdateVideoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVideoMutation, UpdateVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVideoMutation, UpdateVideoMutationVariables>(UpdateVideoDocument, options);
      }
export type UpdateVideoMutationHookResult = ReturnType<typeof useUpdateVideoMutation>;
export type UpdateVideoMutationResult = Apollo.MutationResult<UpdateVideoMutation>;
export type UpdateVideoMutationOptions = Apollo.BaseMutationOptions<UpdateVideoMutation, UpdateVideoMutationVariables>;
export const DeleteVideoDocument = gql`
    mutation deleteVideo($id: Int!, $key: String!) {
  deleteVideo(input: {id: $id, key: $key}) {
    playlist {
      id
    }
  }
}
    `;
export type DeleteVideoMutationFn = Apollo.MutationFunction<DeleteVideoMutation, DeleteVideoMutationVariables>;

/**
 * __useDeleteVideoMutation__
 *
 * To run a mutation, you first call `useDeleteVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVideoMutation, { data, loading, error }] = useDeleteVideoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useDeleteVideoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVideoMutation, DeleteVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVideoMutation, DeleteVideoMutationVariables>(DeleteVideoDocument, options);
      }
export type DeleteVideoMutationHookResult = ReturnType<typeof useDeleteVideoMutation>;
export type DeleteVideoMutationResult = Apollo.MutationResult<DeleteVideoMutation>;
export type DeleteVideoMutationOptions = Apollo.BaseMutationOptions<DeleteVideoMutation, DeleteVideoMutationVariables>;
export const PlaylistDocument = gql`
    query playlist($id: Int!) {
  playlist(id: $id) {
    id
    title
    defaultBpm
    maxPlaybackRate
    minPlaybackRate
    videos {
      edges {
        node {
          id
          youtubeVideoId
          youtubeVideoTitle
          bpm
        }
      }
    }
  }
}
    `;

/**
 * __usePlaylistQuery__
 *
 * To run a query within a React component, call `usePlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlaylistQuery(baseOptions: Apollo.QueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
      }
export function usePlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
        }
export type PlaylistQueryHookResult = ReturnType<typeof usePlaylistQuery>;
export type PlaylistLazyQueryHookResult = ReturnType<typeof usePlaylistLazyQuery>;
export type PlaylistQueryResult = Apollo.QueryResult<PlaylistQuery, PlaylistQueryVariables>;
export const PlaylistsDocument = gql`
    query playlists($after: String, $keyword: String, $first: Int!, $ids: [Int!]) {
  playlists(after: $after, first: $first, keyword: $keyword, ids: $ids) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        defaultBpm
        createdAt
        videos(first: 1) {
          edges {
            node {
              youtubeVideoId
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePlaylistsQuery__
 *
 * To run a query within a React component, call `usePlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      keyword: // value for 'keyword'
 *      first: // value for 'first'
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function usePlaylistsQuery(baseOptions: Apollo.QueryHookOptions<PlaylistsQuery, PlaylistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaylistsQuery, PlaylistsQueryVariables>(PlaylistsDocument, options);
      }
export function usePlaylistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaylistsQuery, PlaylistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaylistsQuery, PlaylistsQueryVariables>(PlaylistsDocument, options);
        }
export type PlaylistsQueryHookResult = ReturnType<typeof usePlaylistsQuery>;
export type PlaylistsLazyQueryHookResult = ReturnType<typeof usePlaylistsLazyQuery>;
export type PlaylistsQueryResult = Apollo.QueryResult<PlaylistsQuery, PlaylistsQueryVariables>;