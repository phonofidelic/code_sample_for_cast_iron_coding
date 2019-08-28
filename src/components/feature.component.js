export default data => {
  const feature = document.createElement('div');
  feature.className = 'feature';
  feature.style.backgroundImage = `url('${data.image}')`;
  feature.addEventListener('click', e => console.log('click!', data));

  const featureTitle = document.createElement('h3');
  featureTitle.className = 'feature-title';
  featureTitle.innerText = data.title;
  feature.appendChild(featureTitle);

  // const featureThumbnail = document.createElement('img');
  // featureThumbnail.setAttribute('src', data.image);
  // featureThumbnail.setAttribute('width', '100%');
  // feature.appendChild(featureThumbnail);

  const featureCaption = document.createElement('p');
  featureCaption.className = 'feature-caption';
  featureCaption.innerText = data.caption;
  feature.appendChild(featureCaption);

  return feature;
};
