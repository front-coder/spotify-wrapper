import {
  API_URL,
} from './config';
import {
  toJSON,
} from './utils';

export const getAlbum = id => fetch(`${API_URL}/albums/${id}?market=ES`, {
  method: 'get',
  headers: {
    Authorization: 'Bearer BQBjTekr4Vqd3hkyq9gaS6J3Bxvb5uLc-N3tbHtxkHIA2fnls1sbvgPFZjPNqsBtxMV9lwNn6vcfK3sxpQNyKEOV-tDsbzE478d93mIUyCrkx24Qc4GwtW6bpuFf7pxp_wmZnyweMno',
  },
})
  .then(data => toJSON(data));

export const getAlbums = ids => fetch(`${API_URL}/albums/?ids=${ids}`)
  .then(data => toJSON(data));


export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`)
  .then(data => toJSON(data));
