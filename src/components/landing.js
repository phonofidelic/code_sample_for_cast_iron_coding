export default () => {
  const landingContainer = document.createElement('div');
  landingContainer.className = 'landing-container';

  const landing = document.createElement('div');
  landing.className = 'landing';

  const hello = document.createElement('div');
  hello.className = 'hello';
  const cast = document.createElement('div');
  cast.className = 'cast';
  const iron = document.createElement('div');
  iron.className = 'iron';

  landingContainer.appendChild(landing);
  landingContainer.appendChild(hello);
  landingContainer.appendChild(cast);
  landingContainer.appendChild(iron);

  return landingContainer;
};
