<template>

  <main class="bg-noir w-full h-screen text-white pt-[5vh] relative">
    <div class="mode flex flex-row absolute bottom-[15vh] -left-14 -rotate-90">
      <div class="dark flex flex-row">
        <button class=" flex flex-row items-center"><span class="w-4 h-4 border-2 border-white mr-4 bg-white"></span><p class="uppercase">dark</p></button>
      </div>
      <div class="light flex flex-row ml-8">
        <button class=" flex flex-row items-center"><span class="w-4 h-4 border-2 border-white mr-4"></span><p class="uppercase">light</p></button>
      </div>
    </div>
    <div class="bord flex flex-col border-2 border-white w-11/12 h-[90vh] mx-auto justify-start">
      <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p> -->
      <div class="content w-11/12 mx-auto h-[90%] pt-[3%] justify-start relative">
        <div class="titre flex flex-col justify-start text-left">
          <h1 class="capitalize text-6xl">bastien roc</h1>
          <p class="capitalize text-lg ml-1">developer</p>
        </div>
        <div class="menu flex flex-col text-left mt-[5%]">
        <router-link to="/index"><p class="capitalize text-lg">home</p></router-link>
        <router-link to="/projects"><p class="capitalize text-lg">projects</p></router-link>
        <router-link to="/infos"><p class="capitalize text-lg underline underline-offset-4">infos</p></router-link>
        <router-link to="/contact"><p class="capitalize text-lg">contact</p></router-link>
        </div>
        <div class="bottomD absolute bottom-0 right-0 justify-end flex">
          <p class="w-1/6 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis volutpat odio tempus maximus. Nunc ac nunc ultricies, maximus tellus eget, dipiscing elit.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

  export default {
    name : 'InfosView',
  }

</script>