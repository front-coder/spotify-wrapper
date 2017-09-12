global.fetch = require('node-fetch');

import { searchAlbuns } from '../src/main';

const albums = searchAlbuns('Aha');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
