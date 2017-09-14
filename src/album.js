/* eslint-env browser */
import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const getAlbum = id => fetch(`${API_URL}/albums/${id}?market=ES`, HEADERS)
  .then(data => toJSON(data));

export const getAlbums = ids => fetch(`${API_URL}/albums/?ids=${ids}`)
  .then(data => toJSON(data));


export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`)
  .then(data => toJSON(data));
