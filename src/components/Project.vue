<template>
  <section class="w-full h-[20vh] snap-start flex flex-row justify-between items-center mb-4">
    <div class="flex flex-col justify-center items-center">
      <p class="uppercase">{{ titre }}</p>
      <p>{{ date }}</p>
    </div>
    <a target="_blank" :href="lien">
      <img class="w-[35vh] h-[20vh]" :src="img" alt="projet">
    </a>
  </section>
</template>

<script>

  export default {
    name : 'ProjectView',

    props: {
      titre: String,
      date: String,
      img : String,
      lien : String
    }
  }

</script>