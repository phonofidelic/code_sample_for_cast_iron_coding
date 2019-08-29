export default ({ title, link, target }) => {
  const navLink = document.createElement('a');
  navLink.className = 'nav-link';
  navLink.setAttribute('href', link);
  if (target) navLink.setAttribute('target', target);

  const navButton = document.createElement('div');
  navButton.className = 'nav-button';
  navButton.setAttribute('role', 'button');
  navButton.innerText = title;

  navLink.appendChild(navButton);

  return navLink;
};
