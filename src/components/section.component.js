export default content => {
  const section = document.createElement('div');
  section.className = 'section';
  section.innerHTML = `<p>Section</p>`;

  section.appendChild(content);

  return section;
};
