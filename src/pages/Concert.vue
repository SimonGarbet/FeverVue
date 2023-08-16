<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const concertTarget = ref([]);
  const isLoading = ref(true);

  async function fetchConcert() {
      try {
        isLoading.value = true
        const response = await fetch(`http://localhost:5173/data/concerts.json`)
       concertTarget.value = await response.json()
        concertTarget.value = concertTarget.value.filter((concert) =>  concert.id === route.params.id)
        concertTarget.value = concertTarget.value[0];
        isLoading.value = false
      } catch (err) {
        console.log('===== error =====', err)
      }

    };


    onMounted(fetchConcert);

</script>

<template>
  <div>
    <section v-if="(concertTarget === undefined)  && (isLoading === false)">
        <h1>Concert supprimé de notre plateforme</h1>
    </section>
    <section v-if="(concertTarget !==null) && (isLoading === false)" >
      <div>
        <img :src="concertTarget.image" alt= 'Vignette du concert' />
        <h1>{{ concertTarget.title }}</h1>
        <p> {{ concertTarget.summary }}</p>
        <h2>Informations</h2>
        <p>{{ concertTarget.information[0].place }}</p>
        <p>{{ concertTarget.information[0].duration }}</p>
        <p>{{ concertTarget.information[0].age }}</p>
        <p>{{ concertTarget.information[0].accessibility }}</p>
        <h2>Description</h2>
        <p>{{ concertTarget.description }}</p>
      </div>

      <div>



      </div>
  </section>
</div>
</template>

<style scoped>

</style>