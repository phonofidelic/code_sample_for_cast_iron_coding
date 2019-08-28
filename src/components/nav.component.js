import navButton from './navButton.component';

export default () => {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  // nav.innerHTML = '<p>nav</p>';

  nav.appendChild(navButton({ title: 'About', link: '#about' }));
  nav.appendChild(navButton({ title: 'Projects', link: '#projects' }));
  nav.appendChild(navButton({ title: 'Contact', link: '#contact' }));

  return nav;
};
