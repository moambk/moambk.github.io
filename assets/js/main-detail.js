const links = document.querySelectorAll('.services-list a');

// Ajouter un événement de clic à chaque lien
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Empêcher l'action par défaut (surtout si c'est un lien avec #)
    event.preventDefault();

    // Retirer la classe "active" de tous les liens
    links.forEach(l => l.classList.remove('active'));

    // Ajouter la classe "active" au lien cliqué
    this.classList.add('active');
  });
});





const serviceData = {
  'uber-projects': {
    title: 'Uber Project',
    description: 'Un projet en matière de transport, offrant des solutions plus efficaces et écologiques pour les utilisateurs.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (5)',
    check_3: 'Laravel, php, postgres, SQL, javaScript, BootStrap.',
    text_1: '',
    text_2: '',
    img_github : 'https://github.com/moambk/Uber' ,
  },
  'last-night': {
    title: 'Last Night',
    description: 'Une mission palpitante à travers un temps apocalyptique, les zombies seront votre obstacle .',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)', 
    check_3: 'WPF, XAML, C#, Visual Studio',
    text_1: '',
    text_2: '',
    img_lien : 'https://github.com/moambk/Last-Night' ,
  },
  'labyrinth': {
    title: 'Labyrinth Of Horror',
    description: 'Un parcours terrifiant à travers un labyrinthe mystérieux, où chaque coin cache une nouvelle horreur.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail de groupe (3)',
    check_3: 'Unity, C#, assets library',
    text_1: '',
    text_2: '',
    img_lien : 'https://github.com/moambk/Labyrinth-Of-Horror' ,
  },
  'dortan': {
    title: 'Dortan',
    description: 'Plongez dans l’univers de Dortan, geré les missions de la ville en tant que mairie.',
    check_1: 'Travail Universitaire.',
    check_2: 'Travail individuel',
    check_3: 'WPF, XAML, C#, postgres, SQL',
    text_1: '',
    text_2: '',
    img_lien : 'https://github.com/moambk/Dortan' ,
  }
};

// Fonction pour changer le texte et l'élément actif
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Retirer la classe "active" de tous les liens
    links.forEach(l => l.classList.remove('active'));

    // Ajouter la classe "active" au lien cliqué
    this.classList.add('active');

    // Récupérer l'ID du service à partir de l'attribut data-service
    const serviceId = this.getAttribute('data-service');

    // Modifier le titre et la description en fonction du service sélectionné
    document.getElementById('service-title').textContent = serviceData[serviceId].title;
    document.getElementById('service-description').textContent = serviceData[serviceId].description;
    document.getElementById('check_1').textContent = serviceData[serviceId].check_1;
    document.getElementById('check_2').textContent = serviceData[serviceId].check_2;
    document.getElementById('check_3').textContent = serviceData[serviceId].check_3;
    document.getElementById('text_1').textContent = serviceData[serviceId].text_1;
    document.getElementById('text_2').textContent = serviceData[serviceId].text_2;
    document.getElementById('img_lien').setAttribute('href', serviceData[serviceId].img_lien);
  });
});