export default ({ title, link }) => {
  const navLink = document.createElement('a');
  navLink.className = 'nav-link';
  navLink.setAttribute('href', link);

  const navButton = document.createElement('div');
  navButton.className = 'nav-button';
  navButton.setAttribute('role', 'button');
  navButton.setAttribute('role', 'button');
  navButton.innerText = title;

  navLink.appendChild(navButton);

  return navLink;
};
