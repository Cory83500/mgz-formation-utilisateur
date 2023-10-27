// Sélectionnez tous les boutons "Détails"
const detailButtons = document.querySelectorAll('.button1');

// Ajoutez un gestionnaire d'événements pour chaque bouton
detailButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtenez l ID du pop-up associé à ce bouton
        const popupId = button.parentElement.parentElement.querySelector('.button').getAttribute('data-popup');

        // Obtenez la div du pop-up associé
        const popup = document.getElementById(popupId);

        // Affichez la div "popup"
        popup.style.display = 'block';
    });
});

// Gérez la fermeture de chaque pop-up de manière indépendante
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const popupId = closeButton.parentElement.id;
        document.getElementById(popupId).style.display = 'none';
    });
});

// Sélectionnez les éléments nécessaires
const searchBox = document.querySelector('.search-box input');
const courseCards = document.querySelectorAll('.course-card');

// Écoutez l'événement de saisie dans la barre de recherche
searchBox.addEventListener('input', function() {
    const searchQuery = searchBox.value.toLowerCase();
    
    // Parcourez toutes les cartes de formation et filtrez-les en fonction de la recherche
    courseCards.forEach(card => {
        const courseTitle = card.querySelector('.button').textContent.toLowerCase();
        
        // Vérifiez si le titre de la formation contient le texte de recherche
        if (courseTitle.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Gérez la fermeture de chaque pop-up en cliquant sur la croix
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        // Obtenez l'ID du pop-up associé à cette croix
        const popupId = closeButton.getAttribute('id').replace('close-popup', '');

        // Trouvez le pop-up associé à cette croix
        const popup = document.getElementById('popup' + popupId);

        // Masquez la div "popup"
        popup.style.display = 'none';
    });
});



