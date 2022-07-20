<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
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
    <section id="banner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
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
  <!--
 <RouterView /> -->
</template>
<style>
@import "../src/assets/styles/app.css";
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
