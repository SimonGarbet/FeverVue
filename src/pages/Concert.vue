<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const concertList = ref([]);

  async function fetchConcert() {
      try {
        const response = await fetch(`http://localhost:5173/data/concerts.json`)
       concertList.value = await response.json()
        concertList.value = concertList.value.filter((concert) =>  concert.path === route.params.town)
        console.log(concertList.value);
      } catch (err) {
        console.log('===== error =====', err)
      }
    };


    onMounted(fetchConcert);

</script>

<template>
  <h1>Concert List</h1>
</template>

<style scoped>

</style>