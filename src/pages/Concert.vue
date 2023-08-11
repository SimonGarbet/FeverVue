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
  <div class="globalContainer">
    <section v-if="concertList.length===0">
        <h1> Pas de concerts programmés</h1>
    </section>
    <section v-else>
      <figure v-for="concert in concertList" :key="concert.id">
        <a :href="'/concert/'+concert.path+'/'+concert.id">
            <img :src="concert.image" alt= 'Vignette du concert' />
          </a>
        </figure>
  </section>
</div>
</template>

<style scoped>

*, *::before, *::after {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.globalContainer{
  background:#06232c;
  border-top: 1px solid #2c4751;
}

</style>