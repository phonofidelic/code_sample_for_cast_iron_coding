import Component from '../lib/Component';
import section from './section.component';

// const strings = {
//   title: 'Hello World!'
// };

// const template = `<p>${strings.title}</p>`;

// const main = new Component({
//   elementName: 'div',
//   className: 'main',
//   content: section
// });

// export default main;

const features = [
  {
    title: 'Feature #1',
    caption: 'This is a short description',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'http://lorempixel.com/200/200/'
  },
  {
    title: 'Feature #2',
    caption: 'This is a short description',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'http://lorempixel.com/200/200/'
  },
  {
    title: 'Feature #3',
    caption: 'This is a short description',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'http://lorempixel.com/200/200/'
  }
];

export default () => {
  const main = document.createElement('main');
  main.className = 'main';
  main.innerHTML = `<p>main</p>`;
  main.appendChild(section(features));
  return main;
};
