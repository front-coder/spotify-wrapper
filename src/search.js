/* eslint-env browser */
import API_URL from './config';
import toJSON from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`,
  {
    method: 'get',
    headers: {
      Authorization: 'Bearer BQBThlSmJGpSpxh7vM6YFhIJU5bK8bIDN4ibEZGIZDdL0cTQO8OgXGXNnugZbjpUWM8NORjualwj3LtToCwvurj-IcZlyy0X9x0Y81RCxfzl-DyOuotkOfvsW6Kv_vlhwXVEfME7GcI',
    },
  }).then(data => toJSON(data));

export const searchArtists = (query) => {
  search(query, 'artist');
};

export const searchAlbuns = query => search(query, 'album');

export const searchTracks = query => search(query, 'track');

export const searchPlaylists = query => search(query, 'playlist');

