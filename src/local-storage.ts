import { get, set } from 'lockr'

// constants
export const KEYS = 'keys'

// types
export type Keys = {
  [playlistId: number]: string
}

// utils
export const setPlaylistKey = (playlistId: number, key: string) => {
  const keys = get(KEYS, {}) as Keys
  set(KEYS, {
    ...keys,
    [playlistId]: key,
  })
}

export const getPlaylistKey = (playlistId: string) => {
  return (get(KEYS, {}) as Keys)[playlistId]
}
