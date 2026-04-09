// Sélectionner tous les boutons "Voir plus"
const toggleButtons = document.querySelectorAll('.toggle-desc');

// Ajouter un écouteur d'événement à chaque bouton
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const fulldesc = button.previousElementSibling; // Sélectionner la div .fulldesc associée
        if (fulldesc.style.display === 'block') {
            fulldesc.style.display = 'none';
            button.textContent = 'Voir plus';
        } else {
            fulldesc.style.display = 'block';
            button.textContent = 'Voir moins';
        }
    });
});