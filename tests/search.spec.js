import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
    search,
    searchAlbuns,
    searchArtists,
    searchTracks,
    searchPlaylists
} from '../src/search';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Search', () => {
    describe('smoke tests', () => {
        /* search(generico) = + de um tipo */
        /* searchAlbums */
        /* searchArtitsts */
        /* searchTracks */
        /* searchPlaylists */

        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchAlbuns method', () => {
            expect(searchAlbuns).to.exist;
        });

        it('should exist the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the searchTracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => fetchedStub.restore());

        it('Should call fecth function', () => {
            const artists = search();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should receive the correct url to fetch', () => {

            context('passing one type', () => {
                const artists = search('Incubus', 'artist');

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const albums = search('Incubus', 'album');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

            context('passing more than one type', () => {
                const artistsAndAlbums = search('Incubus', ['artist', 'album']);

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
        });

        it('should return the JSON Data from the Promise', () => {
            promise.resolves({ body: 'json' });

            const artists = search('Incubus', 'artist');

            expect(artists.resolveValue).to.be.eql({ body: 'json' });
        });
    });

    describe('searchArtists', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => fetchedStub.restore());

        it('should call fetch function', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct url', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        });
    });

    describe('searchAlbuns', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => fetchedStub.restore());

        it('should call fetch function', () => {
            const albuns = searchAlbuns('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct url', () => {
            const albuns = searchAlbuns('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

            const albuns2 = searchAlbuns('Muse');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');

        });
    });

    describe('searchTracks', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => fetchedStub.restore());

        it('should call fetch function', () => {
            const tracks = searchTracks('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct url', () => {
            const tracks = searchTracks('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

            const tracks2 = searchTracks('Muse');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');

        });
    });

    describe('searchPlaylists', () => {
        let fetchedStub;
        let promise;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
            promise = fetchedStub.returnsPromise();
        });

        afterEach(() => fetchedStub.restore());

        it('should call fetch function', () => {
            const tracks = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct url', () => {
            const playlist = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

            const playlists2 = searchPlaylists('Muse');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');

        });
    });
});
