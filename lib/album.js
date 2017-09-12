'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

var getAlbum = exports.getAlbum = function getAlbum(id) {
    return fetch(_config.API_URL + '/albums/' + id + '?market=ES', {
        method: 'get',
        headers: {
            'Authorization': 'Bearer BQBjTekr4Vqd3hkyq9gaS6J3Bxvb5uLc-N3tbHtxkHIA2fnls1sbvgPFZjPNqsBtxMV9lwNn6vcfK3sxpQNyKEOV-tDsbzE478d93mIUyCrkx24Qc4GwtW6bpuFf7pxp_wmZnyweMno'
        }
    }).then(function (data) {
        return (0, _utils.toJSON)(data);
    });
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
    return fetch(_config.API_URL + '/albums/?ids=' + ids).then(function (data) {
        return (0, _utils.toJSON)(data);
    });
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
    return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(function (data) {
        return (0, _utils.toJSON)(data);
    });
};