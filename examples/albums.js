import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQC01U-c4xhYL1PThkD4emQSXQcqft4IX097TOCJ-cOzOkI7mc7loJkX-wTgujJOE0zbewC9fe78UDMs2W_hThFFr7QdkDs4u_4hA5UeNhT7mJac025Vhs70cw9jgb9V_BZ-JBL6iw',
});


const albums = spotify.search.albums('Aha');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
