import './style.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Card from './components/Card';
import { info } from './helper/data-page';
import { api } from './helper/data-api';

document.body.appendChild(Header(info));
const grid = Grid();
document.body.appendChild(grid);
for (let i = 0; i < api.length; i++) {
    const card = api[i];
    grid.appendChild(Card(card));
};