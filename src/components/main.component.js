import Component from '../lib/Component';
import section from './section.component';
import featuresContainer from './featureContainer.component';
import project1 from '../../assets/project_tapes.png';
import project2 from '../../assets/project_JukeBox.png';
import project3 from '../../assets/project_EDGalaxyMap.png';

const features = [
  {
    title: 'Tapes',
    caption:
      'An intuitive interface for creating and cataloging audio recordings.',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: project1
  },
  {
    title: 'Jukebox',
    caption: 'A web-app for uploading and streaming audio files.',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: project2
  },
  {
    title: 'EDGalaxy Map',
    caption: 'A web app for viewing the Elite Dangerous Galaxy Map in VR.',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: project3
  }
  // {
  //   title: 'Feature #4',
  //   caption: 'This is a short description',
  //   description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   image: 'http://lorempixel.com/300/200/'
  // },
  // {
  //   title: 'Feature #5',
  //   caption: 'This is a short description',
  //   description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  //   image: 'http://lorempixel.com/300/200/'
  // }
];

const introText = document.createElement('p');
introText.className = 'intro-text';
introText.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export default () => {
  const main = document.createElement('main');
  main.className = 'main';
  // main.innerHTML = `<p>main</p>`;
  main.appendChild(
    section({ id: 'about', title: 'About', content: [introText] })
  );
  main.appendChild(
    section({
      id: 'projects',
      title: 'Projects',
      content: [featuresContainer(features)]
    })
  );
  return main;
};
