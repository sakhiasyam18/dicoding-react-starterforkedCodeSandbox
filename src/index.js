import React from 'react';
import { createRoot } from 'react-dom/client';

const heading = React.createElement('h1', null, 'Biodata Asyam SM hehe');

const listItem1 = React.createElement('li', null, 'Nama : Uwuwuwuu Dicoding nih');
const listItem2 = React.createElement('li', null, 'Bidang : Informatika garis keras');
const listItem3 = React.createElement('li', null, 'Tagline : WEB 3 BTC Bossss');

const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

const container = React.createElement('div', null, [heading, unorderedList]);

const root = createRoot(document.getElementById('root'));
root.render(container);
