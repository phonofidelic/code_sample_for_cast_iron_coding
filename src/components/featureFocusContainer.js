import featureFocus from './featureFocus';

export default features => {
  const featureFocusContainer = document.createElement('div');
  featureFocusContainer.className = 'feature-focus-container';

  features.forEach(feature => {
    featureFocusContainer.appendChild(featureFocus(feature));
  });

  return featureFocusContainer;
};
