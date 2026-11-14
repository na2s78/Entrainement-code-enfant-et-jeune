const sortie = document.getElementById('sortie');
const saisie = document.getElementById('saisie');

saisie.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const commande = saisie.value;
        saisie.value = '';

        const ligne = document.createElement('div');
        ligne.textContent = '> ' + commande;
        sortie.appendChild(ligne);
    }
});
