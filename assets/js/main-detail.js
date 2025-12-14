const links = document.querySelectorAll('.services-list a');

const serviceData = {
  'uber-projects': {
    title: 'Uber Project',
    description: 'Un projet en matière de transport, offrant des solutions plus efficaces et écologiques pour les utilisateurs.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (5)',
    check_3: 'Laravel, php, postgres, SQL, javaScript, BootStrap.',
    text_1: 'Uber est un projet universitaire constitué de 5 membres, c\'est donc un travail d\'équipe qui m\'a permis d\'apprendre à gérer une équipe, de développer mon travail en équipe et ma communication.',
    text_2: 'Ce projet demandait de recréer le site web Uber, UberEats, UberVélo depuis Laravel, contrôlé par des sprints. Nous devions donc gérer notre temps et nos missions individuelles et missions partagées. Cela concerne le payement du panier de UberEats, la réservation de course Uber, etc. Une durée de 4 mois nous a été permise, donc 5 semaines de développement. Le reste du temps permettait de conceptualiser le projet à l\'aide de Diagramme de Classe, Diagramme de UseCase, etc., une gestion de base de données, grâce à un MDC, MDL et un temps pour gérer la partie des protections des données par rapport aux Cookies et autres.',
    img_lien : 'https://github.com/moambk/Uber' ,
    img_project : '../../assets/img/UberProject.png' ,
    img_project_2 : '../../assets/img/UberEatProject.png'  ,
    img_github : '../../assets/img/Uber-github.png' ,
    bouton_magique: 'https://github.com/moambk/Uber',
  },

  'last-night': {
    title: 'Last Night',
    description: 'Une mission palpitante à travers un temps apocalyptique, les zombies seront votre obstacle.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)', 
    check_3: 'WPF, XAML, C#, Visual Studio',
    text_1: 'Last Night est un projet de jeu universitaire WPF utilisant donc XAML, C#. Nous devions donc à 3 conceptualiser le code réel et gérer mouvement, collision, micro-IA, pathfinding etc.',
    text_2: 'Ce projet demandait de créer un jeu sans réelles conditions. Il fallait seulement donner cours à notre liberté dans un temps restreint de 2 semaines. ',
    img_lien : 'https://github.com/moambk/Last-Night' ,
    img_project : '../../assets/img/LastNightProject-1.png' ,
    img_project_2 : '../../assets/img/LastNightProject-2.png' ,
    img_github : '../../assets/img/LastNight-github.png' ,
    bouton_magique: 'https://github.com/moambk/Last-Night',
  },

  


  'labyrinth': {
    title: 'Labyrinth Of Horror',
    description: 'Un parcours terrifiant à travers un labyrinthe mystérieux, où chaque coin cache une nouvelle horreur.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)',
    check_3: 'Unity, C#, assets library',
    text_1: 'Labyrinth Of Horror est un projet universitaire codé grâce au moteur de jeu Unity et des scripts C#, avec une librairie d\'assets pour avoir des personnages beaucoup plus réalistes.',
    text_2: 'Ce projet demandait de créer un jeu avec un thème choisi à l\'avance, un thème horreur avait été choisi pour notre groupe. J\'ai été chargé du pathfinding, la gestion de l\'animation du monstre du \'labyrinth\', la gestion de la map a été générée grâce à un script et la gestion de lumière pour effrayer ont été à ma charge.',
    img_lien : 'https://github.com/moambk/Labyrinth-Of-Horror' ,
    img_project : '../../assets/img/labyrinthProject.png' ,
    img_project_2 : '../../assets/img/labyrinthProject_2.png' ,
    img_github : '../../assets/img/LabyrinthOfHorror-github.png' ,
    bouton_magique: 'https://github.com/moambk/Labyrinth-Of-Horror',
  },
  'dortan': {
    title: 'Dortan',
    description: 'Plongez dans l’univers de Dortan, geré les missions de la ville en tant que mairie.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail individuel',
    check_3: 'WPF, XAML, C#, postgres, SQL',
    text_1: 'Dortan est un projet universitaire qui nous représente en tant que mairie de Dortan, nous devons donc gérer les missions de la ville comme ramasser les déchets. L\'objectif était de créer une application pour visualiser et gérer ses fonctionnalités.',
    text_2: 'Ce projet d\'application WPF demande de lier une base de données PostgreSQL pour permettre de visualiser depuis un compte admin les différentes missions disponibles, pour permettre de les assigner à des employés ou alors de visualiser celles déjà en cours ou réservées. Codé avec des scripts C#, j\'ai donc travaillé seul pour un travail normalement assigné à 3 personnes. Par manque de personnes, j\'ai su m\'adapter pour ne pas être pénalisé pour une durée de 3 semaines.',
    img_lien : 'https://github.com/moambk/Dortan' ,
    img_project : '../../assets/img/DortanProject.png' ,
    img_project_2 : '../../assets/img/DortanProject_2.png' ,
    img_github : '../../assets/img/Dortan-github.png' ,
    bouton_magique : 'https://github.com/moambk/Dortan',
  }
};


links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    links.forEach(l => l.classList.remove('active'));

    this.classList.add('active');

    const serviceId = this.getAttribute('data-service');

    document.getElementById('service-title').textContent = serviceData[serviceId].title;
    document.getElementById('service-description').textContent = serviceData[serviceId].description;
    document.getElementById('check_1').textContent = serviceData[serviceId].check_1;
    document.getElementById('check_2').textContent = serviceData[serviceId].check_2;
    document.getElementById('check_3').textContent = serviceData[serviceId].check_3;
    document.getElementById('text_1').textContent = serviceData[serviceId].text_1;
    document.getElementById('text_2').textContent = serviceData[serviceId].text_2;
    document.getElementById('img_lien').setAttribute('href', serviceData[serviceId].img_lien);
    document.getElementById('img_github').setAttribute('src', serviceData[serviceId].img_github);
    document.getElementById('img_project').setAttribute('src', serviceData[serviceId].img_project);
    document.getElementById('img_project_2').setAttribute('src', serviceData[serviceId].img_project_2);
    document.getElementById('bouton_magique').setAttribute('href', serviceData[serviceId].bouton_magique);
    
  });
});