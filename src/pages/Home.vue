<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  selectedTown: Array
});

const emits = defineEmits();


function emitOpenModal() {
  const showModal = true;
  emits('showModalUpdated', showModal); 
}

</script>

<template>
        <div>
                <section class="banner">
                <img src="../assets/bannerGirl.avif" alt="Bannière du site avec une femme dessus">
                </section>

                <section class="selectionHome">
                        <div>
                                <h1>Découvre les meilleures expérience dans <button @click="emitOpenModal">ta ville <font-awesome-icon icon="fa-solid fa-chevron-down" /></button></h1>
                                <h3>Concerts, vie nocturne, culture, événements pop-up et bien plus encore</h3>
                        </div>

                        <div>
                                <h2>Sélection de villes</h2>
                                <div class="townSelection">
                                        <figure v-for="town in selectedTown" :key="town.id">
                                                <a :href="'/concert/'+town.path">
                                                <p>{{ town.title }}</p>
                                                <img :src="town.image" alt= 'Photographie de la ville concernée' />
                                                </a>
                                        </figure>
                                </div>
                                <span class="showAllButton" ><button @click="emitOpenModal">Voir tout</button></span>
                       
                        </div>

                </section>

                <section class="informationsHome">
                        <div>
                                <h3>+10.000</h3>
                                <h4>Expériences disponibles</h4>
                                <p>Nos spécialistes locaux collaborent avec nos experts en données pour faire apparaître les événements les plus demandés sur Fever.</p>
                        </div>
        
                        <div>
                                <h3>12 millions</h3>
                                <h4>Personnes jointes par semaine</h4>
                                <p>Nous disposons d'une communauté locale extrêmement engagée. De la plus haute qualité et orienté par les données, notre contenu touche chaque semaine plus de la moitié de la population de chacune de nos villes.</p>
                        </div>

                        <div>
                                <span>
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                </span>
                                <h4>4,8 sur 5 sur l'App Store</h4>
                                <p>Notre application est parmi les mieux notées et les plus utilisées dans l’industrie du divertissement</p>
                        </div>

                </section>

                <section class="applicationHome">
                        <div class="leftSideAppli">
                                <h3>Tu n'as pas encore l'appli ?</h3>         
                                <p>Découvre les meilleures expériences dans ta ville.</p>
                                <div class="storeButtons">
                                <a href="https://apps.apple.com/us/app/fever-plans-nyc-mad-bcn-vlc/id497702817" target="_blank" rel="noopener noreferrer">
                                        <img src="../assets/app-store-button.png" alt="Logo App Store">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.feverup.fever" target="_blank" rel="noopener noreferrer">
                                        <img src="../assets/google-play-button.png" alt="Logo Play Store">
                                </a>
                                </div>
                        </div>
        
                        <div class="rightSideAppli">
                               <img src="../assets/skaterHome.webp" alt="Téléphone avec un skater à l'écran">
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

/* Partie Bannière (fond rose) */


.banner img{
    aspect-ratio: 856/733;
    height: 70%;
    max-width: 100%;
    object-fit: cover;
}

.banner{
    min-height: 15.875rem;
    background: #fb78a1;
    text-align: center;
    position: relative;
    border-radius: 0% 0% 0% 100% / 10% 0% 0% 79%;
}

.banner::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
         width: 100%;
        height: 75px;
        background: white;
}



/* Partie Selection Ville (fond blanc) */

.selectionHome{
        width: 95%;
        margin: 0 auto;
}

h1{
        color: #eb0052;
        font-size: 50px;
        font-weight: 600;
        width: 70%;
        margin-bottom: 20px
}

h1 button{
        font-size: 50px;
        font-weight: 600;
        border: none;
        background: #fff;
        cursor: pointer;
}

h1 button svg{
        font-size: 35px;
}

.selectionHome h3{
        color: #b6003c;
        width: 70%;
        font-size: 24px;
        font-weight: 400;
}

h2{
        margin: 70px 0 30px 0;
}

.townSelection{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 60px ;
}

figure{
        margin: 0;
        position: relative;
        width: 30%;
        height: 305px;
        transition: all .3s ease-in-out;
}

figure a{
        color: #111;
        text-decoration: none;
}

figure a::after{
        content: "";
        display: block;
        z-index: 2;
        width: 100%;
        height: 305px;
        position: absolute;
        background: #eb0052;
        transition: all .5s ease-in-out;
        border-radius: 30px;
        opacity: 0;
        cursor: pointer;


}

figure a:hover::after{
        opacity: 0.4;
}



figure p{
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        color: white;
        font-size: 28px;
        font-weight: 600;
        margin: 0;
        text-align: center;
}

figure img{
        position: absolute;
        width: 100%;
        height: 305px;
        object-fit: cover;
        border-radius: 30px;
        filter: brightness(65%);
}

.showAllButton{
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 70px 0;
}

.showAllButton button{
        background: #06232c;
        border: none;
        color: white;
        font-size: 18px;
        padding: 10px 20px;
        border-radius: 50px;
        cursor: pointer;
}

/* Partie Informations (fond jaune) */

.informationsHome {
        display: flex;
        align-items: center;
        gap: 20px;

        background: #ffc073;
        border-radius: 50% 50% 0% 0%/10% 10% 0% 0%;
        padding: 70px 20px;
}

.informationsHome div{
        width: 30%;
        text-align: center;
}

.informationsHome h3{
        font-size: 40px;
        font-weight: 500;
}

.informationsHome h4{
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 15px;
}

.informationsHome span{
        display: block;
        font-size: 35px;
        margin-bottom: 20px;
}


/* Partie Applications (fond vert)*/

.applicationHome{
        display: flex;
        justify-content: center;
        position: relative;
        padding: 70px 0;
        background: #24a865;
        overflow: hidden;
}

.applicationHome::before{
        content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: -16%;
    right: -16%;
    width: 132%;
    height: 37%;
    background-color: #fff;
    border-radius: 70% 30% 0 0/20% 30% 0 0;
    z-index: 1;
}

.applicationHome:after{
        content: "";
    position: absolute;
    display: block;
    top: 0;
    left: -16%;
    right: -16%;
    width: 132%;
    height: 3.5rem;
    background-color: #ffc073;
    border-radius: 0 0 70% 30%/0 0 100% 50%;
}

.leftSideAppli{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 50px;
}

.leftSideAppli h3{
        font-size: 30px;
}

.leftSideAppli p {
        font-size: 18px;
        margin-bottom: 30px;
}

.storeButtons{
        display: flex;
        gap: 20px;
}

.rightSideAppli {
        width: 30%;
        margin-top: 50px;
        position: relative;
        height: 532px;
}

.rightSideAppli img{
        position: absolute;
        height: 532px;
        margin: 0 auto;
        z-index: 2;
}


</style>