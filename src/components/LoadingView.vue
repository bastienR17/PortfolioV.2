<template>
  <div class="home bg-noir text-beige h-screen absolute w-full z-[99]">
    <nav class="flex flex-row items-center">
      <h1 class="w-1/3 uppercase font-caxo text-6xl">chargement</h1>
      <h2  class=" w-1/2 font-changa text-4xl container"></h2>
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
    <main class="w-full">
      <div class="sidebar items-start flex flex-col font-changa w-full mx-auto h-[75vh] justify-around pt-12 text-lg text-left">
        <div id="typewriter">
          <pre id="txt">
              Comunication avec internet établie
              Url du site rentrée
              Démarage de la communication réussie
              Initialisaton des ports effectuée
              Aprentissage de nouvelles compétences complète
              Utilisation de la donnée autorisée
              Codage de la fenêtre
              Partage des résultats établi
              Actualisation du tableau réussie
              Vérification des données effectuée
              Redirection de l'url complète
              Mise en place de l'espace à adapter
              Réorientation du fond établie
              Violation du système
              Erreur de lecture
              Redémarage du processus
              Envoi sur la page principale
              Accès autorisé
          </pre>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'LoadingView',

  mounted() {
    document.addEventListener('DOMContentLoaded', () => {

      const container = document.querySelector('.container');
      const content = document.createElement('p');

      container.appendChild(content);

      const text = '_ Initialisation du Système. . .';
      let i = 0;

      const typeContent = () => {
        if (i < text.length) {
          content.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeContent, 5);
        }
      }

      typeContent();

    });

    let i = 0;

    const txt = document.getElementById("txt").innerText;
    const speed =1;

    document.getElementById("txt").innerHTML = null;

    function topFunction() {
      document.getElementById('typewriter').scrollTop = document.getElementById('txt').offsetHeight;
    }

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("txt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        topFunction();
      }
    }
    setTimeout(typeWriter, 1);
    // typeWriter();

  },
}

</script>
<style>

</style>