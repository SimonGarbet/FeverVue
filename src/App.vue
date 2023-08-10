<script setup>
import Header from "./components/Header.vue";
import Modale from "./components/ModaleTown.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted } from 'vue';

const townList = ref([]);
const concertList = ref([]);
const showModal = ref(false);

function updateShowModal(value) {
  showModal.value = value;
}

async function fetchTown() {
      try {
        const response = await fetch(`http://localhost:5173/data/town.json`);
        townList.value = await response.json();
        console.log(townList.value);
      } catch (err) {
        console.log('===== error =====', err)
      }
    };

    onMounted(fetchTown);

    async function fetchConcert() {
      try {
        const response = await fetch(`http://localhost:5173/data/concerts.json`)
       concertList.value = await response.json()
        console.log(concertList.value);
      } catch (err) {
        console.log('===== error =====', err)
      }
    };


    onMounted(fetchConcert);

</script>


<template>
  <div id="app">
    <Modale 
    :showModal="showModal" 
    :townList="townList" 
    @showModalUpdated="updateShowModal" 
    />
    <Header 
    @showModalUpdated="updateShowModal" 
    />
    <router-view 
    :townList="townList" 
    @showModalUpdated="updateShowModal"  
    id="viewPage">
    </router-view>
    <Footer />
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');


*, *::before, *::after {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
