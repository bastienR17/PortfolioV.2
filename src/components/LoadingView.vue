<template>
  <div class="home bg-noir text-beige h-screen">
    <nav class="flex flex-row items-center"> 
      <h1 class="w-1/3 uppercase font-caxo text-6xl">chargement</h1>
      <h2 class=" w-1/2 font-changa text-4xl">_ Initialisation du Système. . .</h2>
      <div class="cercle w-1/6 h-24 flex border-none items-center justify-center">
        <div class="outline animate-spin flex items-center justify-center bg-noir rounded-full w-20 h-20 border-dashed border-brun border-2 outline-none">
          <div class="mid flex items-center justify-center bg-noir rounded-full w-16 h-16 border-dashed border-beige border-2">
            <div class="inner flex items-center justify-center bg-noir rounded-full w-12 h-12 border-dashed border-brun border-2">
              <div class="center w-9 h-9 bg-beige rounded-full items-center"></div>
            </div>
          </div>
        </div>
        <div class="load">
          
        </div>
      </div>
    </nav>
    <main>
      <div class="sidebar items-start flex flex-col font-changa w-11/12 mx-auto h-[75vh] justify-around pt-12 text-lg">
        <p>Comunication avec l’internet</p>
        <p>Url du site rentrée</p>
        <p>Démarage de la communication</p>
        <p>Initialisaton des ports</p>
        <p>Aprentissage de nouvelles compétences</p>
        <p>Utilisation de la donnée</p>
        <p>Codage de la fenêtre</p>
        <p>Partage des résultats</p>
        <p>Actualisation du tableau</p>
        <p>Vérification des données</p>
        <p>Redirection de l'url</p>
        <p>Mise en place de l'espace à adapter</p>
        <p>Réorientation du fond</p>
        <p>Violation du système</p>
        <p>Erreur de lecture</p>
        <p>Redémarage du processus</p>
        <p>Envoi sur la page principale</p>
        <p>Accès autorisé</p>
      </div>
    </main>
  </div>
</template>
<script>
  export default {
    name: 'LoadingView',
    
    mounted() {
      function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
        
        var i = 0;
        var timer = setInterval(function() {
          if (i < text.length) {
            element.append(text.charAt(i));
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);
      }

      var speed = 100;
      var h2 = document.querySelector('h2');

      typeEffect(h2, speed);

    },
  }
  
</script>
<style>
  
</style>