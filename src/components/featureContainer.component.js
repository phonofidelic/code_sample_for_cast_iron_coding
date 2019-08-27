import feature from './feature.component';

export default features => {
  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'features-container';

  features.forEach(featureData => {
    console.log(featureData);
    featuresContainer.appendChild(feature(featureData));
  });

  return featuresContainer;
};
