<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { defineProps, defineEmits} from 'vue';

const emits = defineEmits();

function emitCloseModal() {
  const showModal = false;
  emits('showModalUpdated', showModal); 
}

const props = defineProps({
  showModal: Boolean,
  townList: Array
});


</script>

<template>
    <div class="modalContainerHeader">

      <div @click="emitCloseModal" v-if="showModal" class="overlayHeader"></div>

      <section v-if="showModal" class="modalHeader">
        <div class="modalTitle">
        <span><font-awesome-icon icon="fa-solid fa-xmark" @click="emitCloseModal" /></span>
        <h2>Choisir une ville</h2>
      </div>
        <div class="scrollTown">
          <figure v-for="town in townList" :key="town.id">
            <a :href="town.path">
            <p>{{ town.title }}</p>
            <img :src="town.image" alt= 'Photographie de la ville concernée' />
            </a>
          </figure>
      </div>
      </section>
  </div>
</template>

<style scoped>


.overlayHeader{
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  
  background-color: #06232c;
  opacity: 0.9;
}

.modalHeader{
  position: fixed;
  width: 500px;
  height: 95vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  background-color: white;
  border-radius: 10px;

}

.modalTitle{
  padding: 20px 40px;
  background-color: #eb0052;
  border-radius: 10px 10px 64% 64%/10px 10px 24% 24%;
  color: white;
}

.modalTitle span{
  display: flex;
  justify-content: flex-end;
 cursor: pointer;
}

.scrollTown{
  height: 82vh;
  overflow-y: scroll;
  margin-top: 20px;
}

figure{
  position: relative;
  height: 200px;
}

figure img{
  position: absolute;
  z-index: 4;
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  filter: brightness(65%);
}

figure p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  z-index: 5;
  margin: 0;
}


</style>