import landing from './components/landing.component';
import nav from './components/nav.component';
import main from './components/main.component';
import footer from './components/footer.component';
import 'normalize.css';
import './styles/main.css';

document.getElementById('root').appendChild(landing());
document.getElementById('root').appendChild(nav());
document.getElementById('root').appendChild(main());
document.getElementById('root').appendChild(footer());
