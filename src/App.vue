<script setup>
import Header from "./components/Header.vue"

async function fetchTown() {
      try {
        const response = await fetch(`http://localhost:5173/data/town.json`)
        const townList = await response.json()
        console.log(townList);
      } catch (err) {
        console.log('===== error =====', err)
      }
    };
    fetchTown();

    async function fetchConcert() {
      try {
        const response = await fetch(`http://localhost:5173/data/concerts.json`)
        const concertList = await response.json()
        console.log(concertList);
      } catch (err) {
        console.log('===== error =====', err)
      }
    };
    fetchConcert();
</script>


<template>
  <div id="app">
    <Header />
    <router-view id="viewPage"></router-view>
  </div>
</template>
