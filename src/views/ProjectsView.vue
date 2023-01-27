<template>

  <main class="bg-noir w-full h-screen text-white pt-[5vh] relative ">
    <div class="mode flex flex-row absolute bottom-[15vh] -left-14 -rotate-90">
      <div class="dark flex flex-row">
        <button class=" flex flex-row items-center"><span class="w-4 h-4 border-2 border-white mr-4 bg-white"></span><p class="uppercase">dark</p></button>
      </div>
      <!-- <div class="light flex flex-row ml-8">
        <button class=" flex flex-row items-center"><span class="w-4 h-4 border-2 border-white mr-4"></span><p class="uppercase">light</p></button>
      </div>
      -->
    </div>
    <div class="top-flou w-full bg-noir bg-opacity-50 backdrop-blur-md h-[5vh] absolute top-0 z-50 "></div>
    <div class="bordure w-9/12 h-[5vh] border-b-2 border-white absolute top-0.5 left-72 z-50 "></div>
    <div class="bord flex flex-col border-2 border-white w-11/12 h-[90vh] mx-auto justify-start z-50">
      <div class="content w-11/12 mx-auto h-[90%] pt-[3%] justify-start relative">
        <div class="titre flex flex-col justify-start text-left">
          <h1 class="capitalize text-6xl">bastien roc</h1>
          <p class="capitalize text-lg ml-1">developer</p>
        </div>
        <div class="menu flex flex-col text-left mt-[5%]">
          <router-link to="/index"><p class="capitalize text-lg">home</p></router-link>
          <router-link to="/projects"><p class="capitalize text-lg underline underline-offset-4">projects</p></router-link>
          <router-link to="/infos"><p class="capitalize text-lg">infos</p></router-link>
          <router-link to="/contact"><p class="capitalize text-lg">contact</p></router-link>
        </div>
        <div class="bottomD absolute bottom-0 right-0 justify-end flex w-[60vh]">
          <div class="slider max-h-[85vh] overflow-y-scroll snap snap-y snap-mandatory w-full">
            <Project titre="" date="" lien="" img="/images/fond.png"/>
            <Project titre="Devlab-IIMovies" date=" 10/01/23" lien="https://github.com/bastienR17/Tartiflette" img="images/devlab-home-crop.png"/>
             <Project titre="Pokedex Js" date="16/01/23" lien="https://github.com/bastienR17/Pokedex-Js" img="images/pokedexJs.png"/>
             <Project titre="Three Js" date="27/01/23" lien="https://github.com/bastienR17/Test_Three_Js" img="images/threeJs.png"/>
             <Project titre="Portefolio" date="27/01/23" lien="https://github.com/bastienR17/PortfolioV.2" img="images/portefolio.png"/>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Project from '../components/Project.vue'

export default {
  name: "ProjectsView",

  components: {
    Project
  }
}

</script>

<style scoped>
.bottomD ::-webkit-scrollbar{
  display: none;
}

.first {
  opacity: 0;
}

</style>