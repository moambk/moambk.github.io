const links = document.querySelectorAll('.service-item a');


links.forEach(link => {


    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
});