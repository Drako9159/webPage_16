<script setup>
import { RouterLink, RouterView } from "vue-router";
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
            <li><RouterLink class="to" to="/">Paquetes</RouterLink></li>
            <li><RouterLink class="to" to="/cobertura">Cobertura</RouterLink></li>
          </div>
        </div>
        <ul>
          <li><img class="logs" src="../src/assets/logs.png" /></li>
          <li><RouterLink v-on:click="close()" class="link" to="/">Paquetes</RouterLink></li>
          <li><RouterLink v-on:click="close()" class="link" to="/cobertura">Cobertura</RouterLink></li>
          <li><a href="" class="link">Comentarios</a></li>
          <li><a href="" class="link">Más</a></li>
          <li><a href="" class="link">¿Quiénes somos?</a></li>
          <li><a href="" class="link"></a></li>
        </ul>
      </nav>
    </header>
    <RouterView/>
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
  animation-name: show;
  animation-duration: 0.5s;
}
.showNone{
  display: none;
}
@keyframes show {
  0%{ opacity: 0;};
  100%{ opacity: 1};
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
nav ul li > RouterLink {
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
  min-width: 240px;
}
nav .mobile .links .to {
  display: block;
  font-size: 20px;
  padding: 10px 10px 10px 45px;
  text-decoration: none;
  color: white;
  z-index: 100;
}
nav .mobile .links .to::before{
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  background-color: red;
}
nav .mobile .links .to:hover::before {
  cursor: pointer;
  transform: scaleX(1);
}
nav .mobile .links .to:hover {
  background-color: red;
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
  methods: {
      close(){
      const close = document.getElementById("links");
      close.classList.toggle("showNone");
    }

  },
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
