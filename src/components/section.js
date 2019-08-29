export default ({ id, title, content }) => {
  const section = document.createElement('div');
  section.className = 'section';
  section.id = id;
  // section.innerHTML = `<p>Section</p>`;

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.innerText = title;

  section.appendChild(sectionTitle);
  if (content) {
    content.forEach(contentElement => {
      section.appendChild(contentElement);
    });
  }

  return section;
};
