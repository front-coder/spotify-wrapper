/* eslint-env browser */
import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
  .then(data => toJSON(data));

export const searchArtists = (query) => {
  search(query, 'artist');
};

export const searchAlbuns = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');

export const searchPlaylists = query => search(query, 'playlist');

