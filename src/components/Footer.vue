<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



</script>

<template>

    <footer>

        <section class="firstPartFoot">

        <div class="paraFoot1">
            <img src="../assets/feverLogo.png">
            <p>Améliore ta façon de planifier des activités avec Fever. Tu veux découvrir les derniers événements et expériences dans ta ville ? Tu es au bon endroit ! Fever te propose toute une série d'expériences à vivre dans ta ville selon tes envies. Profite au maximum de ton temps libre avec Fever.</p>
        </div>

        <div class="paraFoot2">
            <h3>Contact</h3>
            <ul>
                <li>Support</li>
                <li>Presse</li>
                <li>Créateurs d'évènements</li>
                <li>Programme d'affiliation</li>
            </ul>
            <h3>Fever</h3>
            <ul>
                <li>Travailler chez Fever</li>
                <li>Fever Zone</li>
            </ul>
        </div>

        <div class="paraFoot3">
            <h3>Legal</h3>
            <ul>
                <li>Questions fréquentes</li>
                <li>Conditions d'utilisation</li>
                <li>Politique de confidentialité</li>
                <li>Politique de cookies</li>
                <li>Gestion de cookies</li>
            </ul>
        </div>

    </section>

    <section class="secondPartFoot">

        <div>
            <a href="https://www.facebook.com/feverup/"> <font-awesome-icon icon="fa-brands fa-square-facebook" /></a>
            <a href="https://twitter.com/fever_US?lang=en"> <font-awesome-icon icon="fa-brands fa-square-twitter" /></a>
            <a href="https://www.instagram.com/fever_us/?hl=en"> <font-awesome-icon icon="fa-brands fa-instagram" /></a>
        </div>

        <p><font-awesome-icon icon="fa-regular fa-copyright" />2023 Fever</p>

    </section>

    
    </footer>

</template>

<style scoped>

*, *::before, *::after {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


footer{
    background: #111;
    color: #fff;
}
.firstPartFoot{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding: 50px 20px;
}

.firstPartFoot li{
    list-style-type: none;
    margin-top: 5px;
    cursor: pointer;
}
.firstPartFoot h3{
    margin-top: 15px;
}

.firstPartFoot img{
    height: 30px;
    margin: 15px 0;
}

.paraFoot1{
    width: 55%;
}

.paraFoot2, .paraFoot3{
    width: 22.5%;
}

.secondPartFoot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    border-top: 1px solid #2c4751;
    padding: 0 10px;
}

.secondPartFoot svg{
    color: #fff;
    padding: 10px;
    font-size: 30px;
}

.secondPartFoot p svg{
    padding: 0;
    padding-right: 5px;
    font-size: 15px;
}

</style>