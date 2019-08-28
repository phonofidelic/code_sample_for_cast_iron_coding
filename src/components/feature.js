import featureFocus from './featureFocus';

export default data => {
  const feature = document.createElement('div');
  feature.className = 'feature';
  feature.style.backgroundImage = `url('${data.image}')`;
  feature.addEventListener('click', e => {
    console.log('click!', data);
    const focusElement = document.getElementById(data.id);
    focusElement.style.display = 'block';
    focusElement.style.opacity = '1';
  });

  const featureTitle = document.createElement('h3');
  featureTitle.className = 'feature-title';
  featureTitle.innerText = data.title;
  feature.appendChild(featureTitle);

  const featureCaption = document.createElement('p');
  featureCaption.className = 'feature-caption';
  featureCaption.innerText = data.caption;
  feature.appendChild(featureCaption);

  return feature;
};
