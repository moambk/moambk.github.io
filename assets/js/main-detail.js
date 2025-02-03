const links = document.querySelectorAll('.services-list a');

const serviceData = {
  'uber-projects': {
    title: 'Uber Project',
    description: 'Un projet en matière de transport, offrant des solutions plus efficaces et écologiques pour les utilisateurs.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (5)',
    check_3: 'Laravel, php, postgres, SQL, javaScript, BootStrap.',
    text_1: 'Uber est un projet Universitaire constitué de 5 membres, c\'est donc un travail d\'équipe qui m\'as permis d\'apprendre a gérer une équipe et développer mon travail en équipe et ma communication.',
    text_2: 'Ce project demandais de recrée le site web Uber, UberEats, UberVélo depuis Laravel controlé par des sprints nous devions donc gerer notre temps et nos missions individuels et misions partagés. Cela concerne le payment du panier de UberEats, la réservation de course Uber ect.. . Une durée de 4 mois nous a été permise, donc 5 semaines de développement. Le reste du temps permettait de conceptualisé le projet à l\'aide de Diagramme de Classe, Diagramme de UseCase etc., une gestion de base de données, grâce à un MDC, MDL et un temps pour gérer la partie des protections des données par rapport au Cookies et autres.',
    img_lien : 'https://github.com/moambk/Uber' ,
    img_project : '../../assets/img/UberProject.PNG' ,
    img_project_2 : '../../assets/img/DortanProject.PNG' ,
    img_github : '../../assets/img/Uber-github.PNG' ,
  },
  'last-night': {
    title: 'Last Night',
    description: 'Une mission palpitante à travers un temps apocalyptique, les zombies seront votre obstacle .',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)', 
    check_3: 'WPF, XAML, C#, Visual Studio',
    text_1: 'Last Night est un projet de jeu universitaire WPF utilisant donc XAML, C#. Nous devions donc à 3 conceptualisée le code réel et gérer mouvement, collison, micro-IA, pathfinding ect.. .',
    text_2: 'Ce projet demandais de crée un jeu sans réel conditions. Il fallait seulement donnée cour à notre liberté dans un temps restraint de 2 semaine. ',
    img_lien : 'https://github.com/moambk/Last-Night' ,
    img_project : '../../assets/img/LastNightProject-1.PNG' ,
    img_project_2 : '../../assets/img/LastNightProject-2.PNG' ,
    img_github : '../../assets/img/LastNight-github.PNG' ,
  },
  'labyrinth': {
    title: 'Labyrinth Of Horror',
    description: 'Un parcours terrifiant à travers un labyrinthe mystérieux, où chaque coin cache une nouvelle horreur.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)',
    check_3: 'Unity, C#, assets library',
    text_1: 'Labyrinth Of Horror est un projet universitaire codé grâce au moteur de jeu Unity et des scripts C#, avec une librairie d\'assets pour avoir des personnages beacoup plus réaliste.',
    text_2: 'Ce projet demandais de crée un jeu avec un thème choisi à l\'avance, un thème horreur avait été choisi pour notre groupe. J\'ai été chargé du pathfinding, la gestion de l\'animation du monstre du \'labyrinth\', la gestion de la map a été généré grâce à un scirpt et la gesttion de lumière pour effrayer ont été à ma charge.',
    img_lien : 'https://github.com/moambk/Labyrinth-Of-Horror' ,
    img_project : '../../assets/img/labyrinthProject.PNG' ,
    img_project_2 : '../../assets/img/labyrinthProject_2.PNG' ,
    img_github : '../../assets/img/LabyrinthOfHorror-github.PNG' ,
  },
  'dortan': {
    title: 'Dortan',
    description: 'Plongez dans l’univers de Dortan, geré les missions de la ville en tant que mairie.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail individuel',
    check_3: 'WPF, XAML, C#, postgres, SQL',
    text_1: 'Dortan est un pojet universitaire qui nous represente en tant que mairie de Dortan, nous devons donc gérer les missions de la ville comme ramasser les déchets, l\objectif était de crée une application pour visualiser et gérer ses fonctionnalitées.',
    text_2: 'Ce projet d\'appliaction WPF demandé de lié une base de donnée postgres SQL pour permttre de visualiser depuis un compte admin les différentes missions disponible pour permettre de les assigner à des employés ou alors de visualisé celle déjà en cours ou réservé. Codé avec des scipt C# j\'ai donc trvaillé seul pour un travail normalement assigné à 3 personnes, par manque de personnes j\'ai su m\'adapter pour ne pas être pénaliser pour une durée de 3 semaines.',
    img_lien : 'https://github.com/moambk/Dortan' ,
    img_project : '../../assets/img/DortanProject.PNG' ,
    img_project_2 : '../../assets/img/DortanProject_2.PNG' ,
    img_github : '../../assets/img/Dortan-github.PNG' ,
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

    
  });
});