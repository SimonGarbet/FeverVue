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
  <div >
    <section class="notFound">
        <h1>Erreur 404</h1>
        <router-link to="/">Revenir à la page d'accueil</router-link>
        <p>Ou sélectionnez une nouvelle <button @click="emitOpenModal">ville <font-awesome-icon icon="fa-solid fa-chevron-down" /></button></p>
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

.notFound{
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
    height: 70vh;
    background: #06232c;
    color: #fff;
}

.notFound h1{
    font-size: 144px;
    text-align: center;
}

.notFound a{
    font-size: 30px;
    text-decoration: none;
    color: #ae92ed;
}

.notFound p{
  font-size: 30px;
}

.notFound button, .notFound span {
  font-size: 30px;
  color:#ae92ed;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 750px) {

.notFound h1{
    font-size: 70px;
    text-align: center;
}

.notFound a{
    font-size: 26px;
}

.notFound p{
  font-size: 26px;
}

.notFound button, .notFound span {
  font-size: 26px;
}
}


</style>