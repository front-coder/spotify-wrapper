/* eslint-env browser */
import {API_URL} from './config';
import { toJSON } from './utils';

export const search = (query, type) => {
    return fetch(`${API_URL}/search?q=${query}&type=${type}`,
        {
        method: 'get',
        headers: {
          'Authorization': 'Bearer BQBjTekr4Vqd3hkyq9gaS6J3Bxvb5uLc-N3tbHtxkHIA2fnls1sbvgPFZjPNqsBtxMV9lwNn6vcfK3sxpQNyKEOV-tDsbzE478d93mIUyCrkx24Qc4GwtW6bpuFf7pxp_wmZnyweMno'
        }
    }).then((data) => toJSON(data))
}

export const searchArtists = (query) => {
    search(query, 'artist');
};

export const searchAlbuns = (query) => {
    return search(query, 'album');
};
export const searchTracks = (query) => {
    return search(query, 'track');
};
export const searchPlaylists = (query) => {
    return search(query, 'playlist');
};
