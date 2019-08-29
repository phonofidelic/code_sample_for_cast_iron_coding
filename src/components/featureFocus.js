import navButton from './navButton';

export default ({ id, title, description, image, github, demo }) => {
  const container = document.createElement('div');
  container.id = id;
  container.className = 'feature-focus-modal';
  container.addEventListener('click', e => {
    container.style.opacity = '0';
    container.style.display = 'none';
  });

  const featureFocus = document.createElement('div');
  featureFocus.className = 'feature-focus';
  featureFocus.addEventListener('click', e => e.stopPropagation());

  const topBar = document.createElement('div');
  topBar.className = 'feature-focus-action-bar';

  const closeButton = document.createElement('div');
  closeButton.className = 'feature-focus-button';
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', e => {
    container.style.opacity = '0';
    container.style.display = 'none';
  });
  topBar.appendChild(closeButton);

  featureFocus.appendChild(topBar);

  const featureFocusTitle = document.createElement('h1');
  featureFocusTitle.className = 'feature-focus-title';
  featureFocusTitle.innerText = title;
  featureFocus.appendChild(featureFocusTitle);

  const featureFocusImage = document.createElement('img');
  featureFocusImage.className = 'feature-focus-image';
  featureFocusImage.setAttribute('src', image);
  featureFocusImage.setAttribute('width', '100%');
  featureFocus.appendChild(featureFocusImage);

  const featureDescription = document.createElement('p');
  featureDescription.className = 'feature-focus-description';
  featureDescription.innerText = description;
  featureFocus.appendChild(featureDescription);

  const bottomBar = document.createElement('div');
  bottomBar.className = 'feature-focus-action-bar';
  bottomBar.appendChild(
    navButton({ title: 'GitHub', link: github, target: 'blank' })
  );
  if (demo) {
    bottomBar.appendChild(
      navButton({ title: 'Demo', link: demo, target: 'blank' })
    );
  }
  featureFocus.appendChild(bottomBar);

  container.appendChild(featureFocus);

  return container;
};
