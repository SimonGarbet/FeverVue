<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { defineEmits } from 'vue';

const emits = defineEmits();


function emitOpenModal() {
  const showModal = true;
  emits('showModalUpdated', showModal); 
}

</script>

<template>
    <header>

      <nav>
        <div>
        <router-link to="/"><img src="../assets/feverLogo.png" alt="Logo du site fever"></router-link>
        <button @click="emitOpenModal">Sélectionnez votre ville <font-awesome-icon icon="fa-solid fa-chevron-down" /></button>
        </div>
        <div class="logosRightHeader">
        <font-awesome-icon icon="fa-regular fa-heart" size="2xl" />
        <font-awesome-icon icon="fa-regular fa-circle-user" size="2xl" />
        </div>
      </nav>

    
    </header>
</template>

<style scoped>

*, *::before, *::after {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header{
  position: relative;
  z-index: 3;
}

nav{
  background: #06232c;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav div{
  display: flex;
  align-items: center;
  gap: 40px;
}

nav button{
  background:#06232c;
  border: none;
  color: white;
  font-size: 18px;
  border-right: solid 2px #fff;
  padding: 10px 30px 10px 0px;
  cursor: pointer;
}

nav button svg{
  margin-left: 10px;
}


nav svg{
  color: white;
  cursor: pointer;
}

nav img{
  margin-left: 30px;
  height: 28px;
}

.logosRightHeader {
  padding: 20px 70px;
}



</style>