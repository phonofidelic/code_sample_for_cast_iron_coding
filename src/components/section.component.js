export default (title, content) => {
  const section = document.createElement('div');
  section.className = 'section';
  // section.innerHTML = `<p>Section</p>`;

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.innerText = title;

  section.appendChild(sectionTitle);
  section.appendChild(content);

  return section;
};
