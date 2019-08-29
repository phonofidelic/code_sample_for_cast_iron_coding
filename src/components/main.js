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
    github: 'https://github.com/phonofidelic/Tapes',
    demo: 'https://tapes.phonofidelic.now.sh'
  },
  {
    id: 'project-2',
    title: 'Jukebox',
    caption: 'A web-app for uploading and streaming audio files.',
    description: `A web-app for uploading and streaming audio files.

    The application connects to the users Google Drive account, using it to store audio files to be streamed to the Jukebox client. Users can upload files through the client and have the option of letting the app use Discogs to add any missing metadata like cover art, artist/album into etc. This data is saved to a MongoDB database and can be edited by the user through the client interface.`,
    image: project2,
    github: 'https://github.com/phonofidelic/JukeBox'
  },
  {
    id: 'project-3',
    title: 'EDGalaxy Map',
    caption: 'A web app for viewing the Elite Dangerous Galaxy Map in VR.',
    description: `This is a longer description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: project3,
    github: 'https://github.com/phonofidelic/EDGalaxyMap',
    demo: 'https://ed-galaxy-map.phonofidelic.now.sh'
  }

  /**
   * Additional featured projects can be added to this array.
   */

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

const aboutText = document.createElement('p');
aboutText.className = 'intro-text';
aboutText.innerText = `This project is intended as a code sample for an application to Cast Iron Coding. I would like to demonstrate the creation of a static web site, from design and wireframing to the final code implementation, using plain Javascript, HTML, and CSS. Most of the projects on my GitHub use React as a front-end framework, so I am hoping that this project can show that I have a grasp on working with DOM manipulation without the use of such libraries and frameworks.`;

const projectsText = document.createElement('p');
projectsText.classList.add('intro-text', 'centered');
projectsText.innerText = 'Here are some projects I am currently working on.';

const contactText = document.createElement('p');
contactText.classList.add('intro-text', 'centered');
contactText.innerText =
  'I would love to hear from you with anny comments or feedback you may have!';

const socialIcons = [
  {
    className: 'fa-github',
    link: 'https://github.com/phonofidelic'
  },
  {
    className: 'fa-linkedin',
    link: 'https://www.linkedin.com/in/christopher-clemons-89182aba'
  }
];
const socialLinks = document.createElement('div');
socialLinks.className = 'social-links';
socialIcons.forEach(icon => {
  const iconElement = document.createElement('i');
  iconElement.classList.add('fab');
  iconElement.classList.add(icon.className);

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', icon.link);
  linkElement.setAttribute('target', 'blank');
  linkElement.appendChild(iconElement);

  socialLinks.appendChild(linkElement);
});
// socialLinks.innerHTML = '<i class="fab fa-github"></i>';

export default () => {
  const main = document.createElement('main');
  main.className = 'main';
  // main.innerHTML = `<p>main</p>`;
  main.appendChild(
    section({ id: 'about', title: 'About', content: [aboutText] })
  );

  main.appendChild(
    section({
      id: 'projects',
      title: 'Projects',
      content: [
        projectsText,
        featuresContainer(features),
        featureFocusContainer(features)
      ]
    })
  );

  main.appendChild(
    section({
      id: 'contact',
      title: 'Contact',
      content: [contactText, socialLinks]
    })
  );
  return main;
};
