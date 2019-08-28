import Component from '../lib/Component';
import section from './section';
import featuresContainer from './featureContainer';
import featureFocusContainer from './featureFocusContainer';
import project1 from '../../assets/project_tapes.png';
import project2 from '../../assets/project_JukeBox.png';
import project3 from '../../assets/project_EDGalaxyMap.png';

const features = [
  {
    id: 'project-1',
    title: 'Tapes',
    caption:
      'An intuitive interface for creating and cataloging audio recordings.',
    description: `Tapes is intended to be an intuitive, low latency interface for creating and cataloging audio recordings using the computer’s default audio input device (mic input or USB capture device). Recordings are saved to user-selected directory in the computer's file system.

    The user can compose metadata for the recordings, making them searchable and sortable through tags and descriptions. The user can also create “Tape” documents - object containing reference to recordings, but have no physical space on the machine themselves. Tape documents point to samples of Recordings by ID and time references. Once a Tape has been created, it can then be exported to a desired audio format to be used in other audio editing software.`,
    image: project1,
    github: 'https://github.com/phonofidelic/Tapes'
  },
  {
    id: 'project-2',
    title: 'Jukebox',
    caption: 'A web-app for uploading and streaming audio files.',
    description: `A web-app for uploading and streaming audio files.

    The application connects to the users Google Drive account, using it to store audio files to be streamed to the Jukebox client. Users can upload files through the client and have the option of letting the app use Discogs to add any missing metadata like cover art, artist/album into etc. This data is saved to a MongoDB database and can be edited by the user through the client interface.`,
    image: project2
  },
  {
    id: 'project-3',
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
      content: [featuresContainer(features), featureFocusContainer(features)]
    })
  );
  return main;
};
