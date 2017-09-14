import { expect } from 'chai';
import SpotifyWrapper from '../src/index';

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
});
