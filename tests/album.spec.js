import chai, { expect } from 'chai';
import {getAlbum, getAlbums, getAlbumTracks} from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
    let stubedFetch;
    let promise;

    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('Smoke tests', () => {

        it('Should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('Should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });

    });

    describe('getAlbum', () => {
        //verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        //verifica se o fetch ocorre com a url desejada
        it('should call fetch with th correct url', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.been.calledWith( 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy?market=ES' );

            const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubedFetch).to.been.calledWith( 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy?market=ES' )
        });

        it('should returns the corretc data from promise', () => {
            //verifica se o dado e recebido pela promise
            promise.resolves({album: 'name'});
            const album  = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

            expect(album.resolveValue).to.be.eql({album: 'name'});
        });
    });

    describe('getAlbums', () => {
        //verifica se o fetch ocorre
        it('should call fetch method', () => {
            const album = getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });

         //verifica se o fetch ocorre com a url desejada
        it('should call fetch with th correct url', () => {
            const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
            expect(stubedFetch).to.been.calledWith( 'https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
        });

        it('should returns the corretc data from promise', () => {
            //verifica se o dado e recebido pela promise
            promise.resolves({album: 'name'});
            const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);

            expect(albums.resolveValue).to.be.eql({album: 'name'});
        });
    });

    describe('getAlbumTracks', () => {
        //verifica se o fetch ocorre
        it('should call fetch method', () => {
            const tracks = getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

         //verifica se o fetch ocorre com a url desejada
        it('should call fetch with th correct url', () => {
            const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.been.calledWith( 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
        });

        it('should returns the corretc data from promise', () => {
            //verifica se o dado e recebido pela promise
            promise.resolves({album: 'name'});
            const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');

            expect(tracks.resolveValue).to.be.eql({album: 'name'});
        });
    });

});
