<script setup>
import { RouterLink, RouterView } from "vue-router";

import Paquets from "./components/paquets.vue";
</script>
<template>
  <div id="main-container">
    <header>
      <nav>
        <div class="mobile">
          <div class="header">
            <button id="bmenu">
              <a href="#"><img src="../src/assets/icons8-menú-30.png" /></a>
            </button>
            <img class="logs" src="../src/assets/logs.png" />
            <img class="logs1" src="../src/assets/user.png" />
          </div>
          <div class="links">
            <h3>¡Contata ya!</h3>
            <a href="#">200</a>
            <a href="#">game pass</a>
            <a href="#">game pass</a>
            <a href="#">game pass</a>
          </div>
        </div>
        <ul>
          <li><img class="logs" src="../src/assets/logs.png" /></li>
          <li><a href="" class="link">Paquetes</a></li>
          <li><a href="" class="link">Comentarios</a></li>
          <li><a href="" class="link">Mejoras</a></li>
          <li><a href="" class="link">Saludos</a></li>
          <li><a href="" class="link"></a></li>
        </ul>
      </nav>
    </header>
    <Paquets />
  </div>

  <!-- <header> 
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/table">table</RouterLink>
      </nav>
    </div>
  </header>-->
</template>
<style>
@font-face {
  font-family: monste;
  src: url("../src/assets/montserrat/Montserrat-Medium.otf");
}
body {
  font-family: monste;
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: 1.5;
}
.show {
  display: flex !important;
}
/* navbar */
nav {
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: rgb(250, 250, 250);
}
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav ul li > a {
  display: block;
  position: relative;
  padding: 20px 15px 10px 15px;
  text-decoration: none;
  color: black;
}
nav ul li .link::before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  background-color: red;
}
nav ul li .link:hover::before {
  transform: scaleX(1);
}
nav ul .logs {
  padding: 10px 10px 0px 0px;
  width: 100px;
}
nav .mobile {
  display: none;
  width: 100%;
}
nav .mobile .header {
  min-width: 240px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
}
nav .mobile .header .logs {
  margin: 1vh;
  width: 120px;
}
nav .mobile .header .logs1 {
  margin: 2vh;

  width: 35px;
  height: 35px;
}
nav .mobile .header #bmenu {
  border: none;
  margin: 1vh;
  background-color: transparent;
  cursor: pointer;
  color: grey;
}
nav .mobile .links {
  display: none;
  flex-direction: column;
  position: relative;
  top: -5px;
  z-index: 200;
  background-color: black;
}
nav .mobile .links a {
  font-size: 20px;
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
}
nav .mobile .links a:hover {
  font-size: 20px;
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
}
@media screen and (max-width: 701px) {
  nav .mobile {
    display: block;
  }
  nav {
    width: 100%;
    padding: 0;
  }
  nav ul {
    display: none;
  }
  

}
</style>
<script>
export default {
  data: () => ({}),
  mounted() {
    const bShowMobileLinks = document.querySelector("#bmenu");
    const mobileMenu = document.querySelector(".links");
    bShowMobileLinks.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.toggle("show");
    });
  },
};
</script>
