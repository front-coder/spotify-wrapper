'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbuns = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* eslint-env browser */
var search = exports.search = function search(query, type) {
    return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {
        method: 'get',
        headers: {
            'Authorization': 'Bearer BQBjTekr4Vqd3hkyq9gaS6J3Bxvb5uLc-N3tbHtxkHIA2fnls1sbvgPFZjPNqsBtxMV9lwNn6vcfK3sxpQNyKEOV-tDsbzE478d93mIUyCrkx24Qc4GwtW6bpuFf7pxp_wmZnyweMno'
        }
    }).then(function (data) {
        return (0, _utils.toJSON)(data);
    });
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
    search(query, 'artist');
};

var searchAlbuns = exports.searchAlbuns = function searchAlbuns(query) {
    return search(query, 'album');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
    return search(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
    return search(query, 'playlist');
};