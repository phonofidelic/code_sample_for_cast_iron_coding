import feature from './feature.component';

export default features => {
  const section = document.createElement('div');
  section.className = 'section';
  section.innerHTML = `<p>Section</p>`;

  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'features-container';

  features.forEach(featureData => {
    console.log(featureData);
    featuresContainer.appendChild(feature(featureData));
  });

  section.appendChild(featuresContainer);

  return section;
};
