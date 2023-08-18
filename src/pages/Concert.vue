<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const concertTarget = ref([]);
  const isLoading = ref(true);
  const tiketQuantity = ref(1);
  const globalPrice = ref(0);
  const isActiveDate = ref(null);
  const isActiveHour = ref(null);
  const errorFetch = ref(false);

  async function fetchConcert() {
      try {
        isLoading.value = true;
        const response = await fetch(`http://localhost:5173/data/concerts.json`);
       concertTarget.value = await response.json();
       concertTarget.value = concertTarget.value.filter((concert) => concert.path === route.params.town)
        concertTarget.value = concertTarget.value.filter((concert) =>  concert.id === route.params.id);
        console.log(concertTarget.value[0])
        if (concertTarget.value[0] === undefined){
          errorFetch.value = true
          isLoading.value = false;
        } else {
        concertTarget.value = concertTarget.value[0];
        globalPrice.value = concertTarget.value.price;
        isActiveDate.value = concertTarget.value.date[0].id;
        isActiveHour.value = concertTarget.value.date[0].hour[0];
        isLoading.value = false;
        }
      } catch (err) {
        console.log('===== error =====', err)

      }
      console.log(errorFetch.value)
    };


    onMounted(fetchConcert);

    function plusQuantity (){
      tiketQuantity.value += 1
      globalPrice.value = concertTarget.value.price*tiketQuantity.value
    }

    function minusQuantity() {
  if (tiketQuantity.value > 1) {
    tiketQuantity.value -= 1
    globalPrice.value = concertTarget.value.price*tiketQuantity.value
  }
}


  function activeDate(date) {
  isActiveDate.value = date.id;
  isActiveHour.value = date.hour[0];
  tiketQuantity.value = 1
  globalPrice.value = concertTarget.value.price
}

function activeHour(hour) {
  isActiveHour.value = hour;
  tiketQuantity.value = 1
  globalPrice.value = concertTarget.value.price
}


</script>

<template>
  <div class="containerGlobal">
    <section class="noConcert" v-if="(errorFetch === true) && (isLoading === false)">
        <h1>Concert supprimé de notre plateforme</h1>
    </section>
    <section class="concertGlobalView" v-if="(errorFetch === false) && (isLoading === false)" >
      <div class="leftSideConcert">

          <div class="enTeteConcert">
            <img :src="concertTarget.image" alt= 'Vignette du concert' />
            <h1>{{ concertTarget.title }}</h1>
          </div>

          <p class="summaryConcert"><font-awesome-icon icon="fa-solid fa-star" style="color:#F0DB4F" /> {{ concertTarget.summary }}</p>

          <div class="informationsConcert">
            <h2>Informations</h2>
            <p><font-awesome-icon icon="fa-solid fa-location-dot" style="color:#ff5925"/>{{ concertTarget.information[0].place }}</p>
            <p><font-awesome-icon icon="fa-solid fa-hourglass-end" style="color:#F0DB4F"/>{{ concertTarget.information[0].duration }}</p>
            <p><font-awesome-icon icon="fa-solid fa-child" style="color:#90c53f"/>{{ concertTarget.information[0].age }}</p>
            <p><font-awesome-icon icon="fa-solid fa-wheelchair" style="color:#15D7F7"/>{{ concertTarget.information[0].accessibility }}</p>
        </div>

        <div class="descriptionConcert">
            <h2>Description</h2>
            <p>{{ concertTarget.description }}</p>
          </div>
        </div>

      <div class="rightSideConcert">

        <h2><font-awesome-icon icon="fa-solid fa-calendar-day" style="color: #ffffff;" />Choisis ta date et une session</h2>

        <div class="dynamicChoiceConcert">
          <div class="dateConcert">
          <div @click="activeDate(date)" 
          v-for="date in concertTarget.date" 
          :key="date.id"
          :class="{ active: isActiveDate === date.id }">
            <button>{{ date.day }}</button>
            <font-awesome-icon icon="fa-solid fa-check" style="color: #ffffff;"/>
          </div>
        </div>
 
            <div v-for="date in concertTarget.date" 
            :key="date.id"
            class="heureConcert"
            :style="{ display: isActiveDate === date.id ? 'flex' : 'none' }" 
           >
              <div @click="activeHour(hour)"
              v-for="hour in date.hour" :key="hour"
              :class="{ active: isActiveHour === hour }">
                <button>{{ hour }}</button>
                <font-awesome-icon icon="fa-solid fa-check" style="color: #ffffff;"/>
              </div>
            </div>

          <div class="quantitySelector">
            <p class="nameTiket">Place Standard</p>
            <button @click="minusQuantity"> <font-awesome-icon icon="fa-solid fa-circle-minus" style="color : #0079ca"/> </button>
            <p>{{ tiketQuantity }}</p>
            <button @click="plusQuantity"> <font-awesome-icon icon="fa-solid fa-circle-plus" style="color : #0079ca"/> </button>
          </div>

         <button class="globalPrice"> {{ globalPrice.toFixed(2) }} € - Acheter </button>

      </div>

        

        
       

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


.containerGlobal{
  position: relative;
  border-top: 1px solid #2c4751;
}


.containerGlobal::after{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 350px;
  background: #051b23;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0% 0% 40% 40%/0% 0% 5% 5%;
 }

 .noConcert{
  height: 70vh;
  background: #051b23;
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .noConcert h1{
  color: #fff;
  font-size: 60px;
  position: relative;
  z-index: 5;
  text-align: center;
 }

 .concertGlobalView{
  display: flex;
  align-items: center;
  gap: 50px;
  width: 95%;
  margin: 0 auto;
 }



 .leftSideConcert{
  position: relative;
  z-index: 3;
  width: 55%;
 }

 .leftSideConcert p {
  font-size: 19px;
  text-align: justify;
 }

.enTeteConcert{
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 23px;
  color: #fff;
  margin-top: 50px;
}


  .enTeteConcert img{

    border-radius: 20px;
    height: 320px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .summaryConcert{
    margin: 50px 0;
  }

  .informationsConcert svg{
    text-align: left;
    width: 30px;
  }

  .informationsConcert h2{
    margin-bottom: 20px;
  }

  .informationsConcert p{
    margin-bottom: 10px;
  }

  .descriptionConcert {
    margin: 50px 0;
  }

  .descriptionConcert h2{
    margin-bottom: 20px;
  }


  .rightSideConcert{
    width: 45%;
    position: relative;
    z-index: 3;
    background: #fff;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .rightSideConcert h2{
    color: #fff;
    background: #06232c;
    padding: 30px;
    margin: 0;
    border-radius: 16px 16px 0 0;
    font-weight: 500;
  }

  .rightSideConcert h2 svg{
    margin-right: 20px;
  }


  .dynamicChoiceConcert{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    border-radius: 20px;
    width: 90%;
    margin: 0 auto;
  }

  .dateConcert{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    border-bottom: solid 1px lightgrey;
    padding: 20px 0;
  }


  .dateConcert div{
    display: flex;
    align-items: center;
    height: 85px;
    width: 150px;
  }

  .dateConcert button {
    background: none;
    font-size: 14px;
    border: solid 1px lightgrey;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    height: 80px;
  }

  .dateConcert .active button {
  background-color: #0079ca;
  color: white;
  border: none;
  border-radius: 20px 0 0 20px;
  height: 80px;
  }

  .dateConcert .active svg{
    background-color: #0079ca;
    border: none;
    border-radius: 0 20px 20px 0;
    padding: 32px 12px 32px 0;
  }


  .heureConcert{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    width: 100%;
    border-bottom: solid 1px lightgrey;
    padding-bottom: 30px;
  }

  .heureConcert div{
    display: flex;
  }

  .heureConcert .active button {
  background-color: #0079ca;
  color: white;
  border: none;
  border-radius: 20px 0 0 20px;
  padding-right: 10px;
  }

  .heureConcert button {
    background: none;
    font-size: 14px;
    border: solid 1px lightgrey;
    border-radius: 20px;
    padding: 10px 30px;
    cursor: pointer;
  }

  .heureConcert .active svg {
  background-color: #0079ca;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 12px;
  }
  

  .quantitySelector {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: dashed 1px lightgrey;
    font-size: 20px;
  }

  .quantitySelector svg{
    cursor: pointer;
  }

.nameTiket {
  width: 65%;
}

  .quantitySelector button{
    border: none;
    background: none;
    font-size: 24px;
  }

  .globalPrice{
    color: #fff;
    background: #0079ca;
    font-size: 25px;
    border: none;
    padding: 10px 50px;
    border-radius: 50px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  @media (max-width: 750px) {




 .noConcert h1{
  font-size: 30px;
 }

 .concertGlobalView{
  flex-direction: column;
  gap: 0;
 }


 .containerGlobal::after{
  height: 520px;
  background: #051b23;
  border-radius: 0 0 10px 10px;
 }


 .leftSideConcert{
  width: 100%;
 }

 .leftSideConcert p {
  font-size: 14px;
 }

.enTeteConcert{
 flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 17px;
}


  .enTeteConcert img{

    border-radius: 20px;
    height: 320px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .summaryConcert{
    margin: 100px 0 50px 0;
  }


  .rightSideConcert{
    width: 100%;
    margin-bottom: 50px ;
  }

  .rightSideConcert h2{
   font-size: 18px;
  }

  .dateConcert div {
    height: 40px;
  }
  .dateConcert button {
    height: 40px;
  }

  .dateConcert .active button {
  height: 40px;
  }

  .dateConcert .active svg{
    padding: 12px 12px 12px 0;
  }


  .heureConcert{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    width: 100%;
    border-bottom: solid 1px lightgrey;
    padding-bottom: 30px;
  }
  

  .quantitySelector {
    font-size: 18px;
  }

  .quantitySelector button{
    font-size: 22px;
  }

  .globalPrice{
    font-size: 20px;
  }
  }



</style>