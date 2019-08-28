import landing from './components/landing';
import nav from './components/nav';
import main from './components/main';
import footer from './components/footer';
import 'normalize.css';
import './styles/main.css';

document.getElementById('root').appendChild(landing());
document.getElementById('root').appendChild(nav());
document.getElementById('root').appendChild(main());
document.getElementById('root').appendChild(footer());
