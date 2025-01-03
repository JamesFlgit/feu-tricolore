document.addEventListener('DOMContentLoaded', function() {
    const lights = document.querySelectorAll('.home-game__light');
    const nextColorButton = document.getElementById('next-color');
    const toggleModeButton = document.getElementById('toggle-mode');
    console.log(toggleModeButton);


    let currentLight = 0;
    let intervalId = null;


    function toggleLights() {

        lights.forEach(light => light.classList.remove('active'));

        lights[currentLight].classList.add('active');
    }


    function nextLight() {
        currentLight = (currentLight - 1 + lights.length) % lights.length; // Passe à la lumière suivante
        toggleLights();
    }



    toggleModeButton.addEventListener('click', function()  {
        if (intervalId) {
            // Si l'intervalle est actif, le nettoyer pour arrêter le changement automatique
            clearInterval(intervalId);
            intervalId = null;
            console.log("Mode automatique désactivé");
        } else {
            // Sinon, démarrer le changement automatique
            intervalId = setInterval(nextLight, 2000);
            console.log("Mode automatique activé");
        }

    });



    // Fonction qui gère le passage à la couleur suivante
    nextColorButton.addEventListener('click', function() {
    currentLight = (currentLight - 1 + lights.length) % lights.length; // Passe à la lumière suivante
    toggleLights();
    })
    // Initialisation pour allumer la première lumière
    toggleLights();

    });







