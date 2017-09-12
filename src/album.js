/* eslint-env browser */
import API_URL from './config';
import toJSON from './utils';

export const getAlbum = id => fetch(`${API_URL}/albums/${id}?market=ES`, {
  method: 'get',
  headers: {
    Authorization: 'Bearer BQBThlSmJGpSpxh7vM6YFhIJU5bK8bIDN4ibEZGIZDdL0cTQO8OgXGXNnugZbjpUWM8NORjualwj3LtToCwvurj-IcZlyy0X9x0Y81RCxfzl-DyOuotkOfvsW6Kv_vlhwXVEfME7GcI',
  },
})
  .then(data => toJSON(data));

export const getAlbums = ids => fetch(`${API_URL}/albums/?ids=${ids}`)
  .then(data => toJSON(data));


export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`)
  .then(data => toJSON(data));
