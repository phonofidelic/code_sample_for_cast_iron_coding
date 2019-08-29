import feature from './feature';

export default features => {
  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'features-container';

  features.forEach(featureData => {
    featuresContainer.appendChild(feature(featureData));
  });

  return featuresContainer;
};
