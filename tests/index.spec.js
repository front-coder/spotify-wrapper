import chai, { expect } from 'chai';
import sinonStubPromise from 'sinon-stub-promise';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import SpotifyWrapper from '../src/index';

sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper library', () => {
  it('Should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('Should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'api',
    });

    expect(spotify.apiURL).to.be.equal('api');
  });

  it('Should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});

    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('Should receve token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: '123456',
    });

    expect(spotify.token).to.be.equal('123456');
  });

  describe('Request method', () => {
    let stubedFetch;
    let promise;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('Should have request method', () => {
      const spotify = new SpotifyWrapper({});

      expect(spotify.request).to.exist;
    });

    it('Should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('Should call fetch with the right url passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });

    it('Should call fetch with the right headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      const headers = {
        headers: {
          Authorization: 'Bearer foo',
        },
      };

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });
  });
});
