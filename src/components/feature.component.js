export default data => {
  const feature = document.createElement('div');
  feature.className = 'feature';

  const featureTitle = document.createElement('h3');
  featureTitle.className = 'feature-title';
  featureTitle.innerText = data.title;
  feature.appendChild(featureTitle);

  const featureCaption = document.createElement('p');
  featureCaption.className = 'feature-caprion';
  featureCaption.innerText = data.caption;
  feature.appendChild(featureCaption);

  return feature;
};
