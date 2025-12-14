// Sélection des liens à gauche
const links = document.querySelectorAll('.services-list a');

// Données des projets
const serviceData = {
  'uber-projects': {
    title: 'Uber Project',
    description: 'Un projet en matière de transport, offrant des solutions plus efficaces et écologiques pour les utilisateurs.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (5)',
    check_3: 'Laravel, PHP, PostgreSQL, SQL, JavaScript, Bootstrap.',
    text_1: 'Uber est un projet universitaire constitué de 5 membres. Ce travail d’équipe m’a permis de développer mes compétences en communication, organisation et gestion de projet.',
    text_2: 'Le projet consistait à recréer les services Uber, UberEats et UberVélo avec Laravel, en suivant une méthodologie agile. La conception s’est appuyée sur des diagrammes UML, une base de données relationnelle et une gestion des données conforme aux bonnes pratiques.',
    img_lien: 'https://github.com/moambk/Uber',
    img_project: '../../assets/img/UberProject.png',
    img_project_2: '../../assets/img/UberEatProject.png',
    img_github: '../../assets/img/Uber-github.png',
    bouton_magique: 'https://github.com/moambk/Uber'
  },

  'last-night': {
    title: 'Last Night',
    description: 'Un jeu d’action en vue 2D se déroulant dans un univers post-apocalyptique.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)',
    check_3: 'WPF, XAML, C#, Visual Studio',
    text_1: 'Last Night est un jeu développé en WPF utilisant XAML et C#. Il intègre des mécaniques de déplacement, collisions, micro-IA et pathfinding.',
    text_2: 'Le projet a été réalisé en deux semaines, laissant une grande liberté créative. Il m’a permis de renforcer mes compétences en logique de jeu et en développement logiciel.',
    img_lien: 'https://github.com/moambk/Last-Night',
    img_project: '../../assets/img/LastNightProject-1.png',
    img_project_2: '../../assets/img/LastNightProject-2.png',
    img_github: '../../assets/img/LastNight-github.png',
    bouton_magique: 'https://github.com/moambk/Last-Night'
  },

  'labyrinth': {
    title: 'Labyrinth Of Horror',
    description: 'Un jeu d’horreur immersif dans un labyrinthe généré dynamiquement.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)',
    check_3: 'Unity, C#, Assets',
    text_1: 'Ce projet utilise Unity et des scripts C# pour créer une expérience immersive avec gestion des lumières, IA et animations.',
    text_2: 'J’ai travaillé sur le pathfinding, les animations du monstre et la génération de la map, afin de renforcer la tension et l’immersion du joueur.',
    img_lien: 'https://github.com/moambk/Labyrinth-Of-Horror',
    img_project: '../../assets/img/labyrinthProject.png',
    img_project_2: '../../assets/img/labyrinthProject_2.png',
    img_github: '../../assets/img/LabyrinthOfHorror-github.png',
    bouton_magique: 'https://github.com/moambk/Labyrinth-Of-Horror'
  },

  'dortan': {
    title: 'Dortan',
    description: 'Application de gestion municipale simulant le rôle d’une mairie.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail individuel',
    check_3: 'WPF, XAML, C#, PostgreSQL, SQL',
    text_1: 'Dortan est une application WPF permettant de gérer les missions municipales (déchets, affectations, suivi).',
    text_2: 'Réalisé en autonomie, ce projet m’a permis de démontrer ma capacité d’adaptation et ma maîtrise du développement logiciel complet.',
    img_lien: 'https://github.com/moambk/Dortan',
    img_project: '../../assets/img/DortanProject.png',
    img_project_2: '../../assets/img/DortanProject_2.png',
    img_github: '../../assets/img/Dortan-github.png',
    bouton_magique: 'https://github.com/moambk/Dortan'
  }
};

// Fonction pour charger un projet
function loadProject(serviceId) {
  const data = serviceData[serviceId];
  if (!data) return;

  document.getElementById('service-title').textContent = data.title;
  document.getElementById('service-description').textContent = data.description;
  document.getElementById('check_1').textContent = data.check_1;
  document.getElementById('check_2').textContent = data.check_2;
  document.getElementById('check_3').textContent = data.check_3;
  document.getElementById('text_1').textContent = data.text_1;
  document.getElementById('text_2').textContent = data.text_2;
  document.getElementById('img_lien').href = data.img_lien;
  document.getElementById('img_github').src = data.img_github;
  document.getElementById('img_project').src = data.img_project;
  document.getElementById('img_project_2').src = data.img_project_2;
  document.getElementById('bouton_magique').href = data.bouton_magique;

  links.forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`[data-service="${serviceId}"]`);
  if (activeLink) activeLink.classList.add('active');
}

// Chargement initial via URL
const params = new URLSearchParams(window.location.search);
const projectFromUrl = params.get('project');

if (projectFromUrl && serviceData[projectFromUrl]) {
  loadProject(projectFromUrl);
} else {
  loadProject('uber-projects');
}

// Gestion du clic manuel
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const serviceId = link.dataset.service;
    loadProject(serviceId);
    history.replaceState(null, '', `?project=${serviceId}`);
  });
});
