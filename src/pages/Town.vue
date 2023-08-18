<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { ref, onMounted, defineEmits } from 'vue';
  import { useRoute } from 'vue-router';


  const emits = defineEmits();


function emitOpenModal() {
  const showModal = true;
  emits('showModalUpdated', showModal); 
}

  const route = useRoute();

  const concertList = ref([]);
  const isLoading = ref(true);
  const hovered = ref(false);

  async function fetchConcert() {
      try {
        isLoading.value = true
        const response = await fetch(`http://localhost:5173/data/concerts.json`)
       concertList.value = await response.json()
        concertList.value = concertList.value.filter((concert) =>  concert.path === route.params.town)
        isLoading.value = false
      } catch (err) {
        console.log('===== error =====', err)
      }
      
    };


    onMounted(fetchConcert);

</script>

<template>
  <div class="globalContainer">
    <section class="noConcerts" v-if="(concertList.length===0) && (isLoading === false)">
        <h1> Pas de concerts programmés</h1>
        <p>Sélectionnez une nouvelle <button @click="emitOpenModal">ville <font-awesome-icon icon="fa-solid fa-chevron-down" /></button></p>
    </section>
    <section v-if="(concertList !==null) && (concertList.length > 0) && (isLoading === false)">
      <h1>Évènements et activités à <span>{{ concertList[0].town }}</span></h1>
      <div class="containerConcerts">
      <figure v-for="concert in concertList" :key="concert.id"
        @mouseover="hovered = true"
        @mouseout="hovered = false"
        :class="{ 'hovered': hovered }">
        <a :href="'/concert/'+concert.path+'/'+concert.id">
            <img :src="concert.image" alt= 'Vignette du concert' />
            <h2>{{ concert.title }}</h2>
            <p>{{ concert.price.toFixed(2) }} € </p>
          </a>
        </figure>
      </div>
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
  min-height: 70vh;
}

h1{
  color: #fff;
  padding: 30px;
  font-size: 40px;
  font-weight: 500;
}

h1 span{
 color:#ae92ed;
}

.noConcerts{
  height: 70vh;
  text-align: center;
  padding: 20%;
  color: #fff;
}

.noConcerts h1{
  font-size: 70px;
}

.noConcerts p{
  font-size: 40px;
}

.noConcerts button {
  font-size: 40px;
  color:#ae92ed;
  background: none;
  border: none;
  cursor: pointer;
}

.noConcerts svg{
  font-size: 30px;
}


.containerConcerts{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  grid-row-gap: 80px;
  padding: 40px 30px;
}

figure{
  position: relative;
  width: 100%;
  transition: all .5s ease-in-out;
}

.hovered{
  opacity: 0.4;
}

figure:hover{
  opacity: 1;
  transform: scale(1.1);
}

figure a {
  color: #fff;
  text-decoration: none;
  width: auto;
}

figure h2{
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
}

figure img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

@media (max-width: 750px) {

h1{
  font-size: 26px;
  text-align: center;
}

.noConcerts h1{
  font-size: 40px;
}

.noConcerts{
  padding: 40% 0;
  
}

.noConcerts p{
  font-size: 20px;
}

.noConcerts button {
  font-size: 20px;
}

.noConcerts svg{
  font-size: 16px;
}


.containerConcerts{
  grid-template-columns: 1fr;
  grid-row-gap: 50px;
}

figure{
  width: 80%;
  margin: auto;
}

figure h2{
  font-size: 16px;
}

figure p {
  font-size: 14px;
}


}



</style>