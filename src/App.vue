<script setup>
import Header from "./components/Header.vue";
import Modale from "./components/ModaleTown.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted } from 'vue';

const townList = ref([]);
const selectedTown = ref([]);
const showModal = ref(false);
const isLoading = ref(true);

function updateShowModal(value) {
  showModal.value = value;
}

async function fetchTown() {
      try {
        isLoading.value = true;
        const response = await fetch(`http://localhost:5173/data/town.json`);
        townList.value = await response.json();
        selectedTown.value = [townList.value[0], townList.value[1], townList.value[2], townList.value[3], townList.value[4], townList.value[5]];
        townList.value.sort((a,b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' }));
        isLoading.value = false;
      } catch (err) {
        console.log('===== error =====', err)
      }
    };

    onMounted(fetchTown);

</script>


<template>
  <div id="app" v-if = 'isLoading === false' >
    <Modale 
    :showModal="showModal" 
    :selectedTown="selectedTown"
    :townList="townList" 
    @showModalUpdated="updateShowModal" 
    />
    <Header 
    @showModalUpdated="updateShowModal" 
    :townList="townList" 
    />
    <router-view 
    :selectedTown="selectedTown"
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
