import feature from './feature';

export default features => {
  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'features-container';

  console.log('features:', features);
  features.forEach(featureData => {
    console.log(featureData);
    featuresContainer.appendChild(feature(featureData));
  });

  return featuresContainer;
};
