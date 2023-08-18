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
  townList: Array,
  selectedTown:Array
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
          <h4>Notre sélection de villes</h4>
          <figure v-for="town in selectedTown" :key="town.id">
            <a :href="'/concert/'+town.path">
            <p>{{ town.title }}</p>
            <img :src="town.image" alt= 'Photographie de la ville concernée' />
            </a>
          </figure>
          <h4>Toutes les villes</h4>
          <figure v-for="town in townList" :key="town.id">
            <a :href="'/concert/'+town.path">
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
  z-index: 9;
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
  z-index: 10;

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

h4{
  font-weight: 500;
  margin: 30px 25px;
}

figure{
  position: relative;
  height: 100px;
  margin: 20px 20px;
}

figure img{
  position: absolute;
  z-index: 11;
  height: 100px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  filter: brightness(65%);
}

figure a::after{
  
        content: "";
        display: block;
        z-index: 12;
        width: 100%;
        height: 100px;
        position: absolute;
        background: #eb0052;
        transition: all .3s ease-in-out;
        opacity: 0;
        cursor: pointer;
    border-radius: 30px ;

}

figure a:hover::after{
        opacity: 0.5;
}


figure p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  z-index: 13;
  margin: 0;
}

@media (max-width: 750px) {
  .modalHeader{
  width: 350px;
}

h2{
  text-align: center;
  font-size: 20px;
}

h4{
  margin: 10px 25px;
}


figure{
  height: 70px;
}

figure p{
  font-size: 20px;
}

figure img{
  height: 70px;
  filter: brightness(45%);
}

figure a::after{
    display: none;
}

}


</style>