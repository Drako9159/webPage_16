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
            <a href="#">game pass</a>
            <a href="#">game pass</a>
            <a href="#">game pass</a>
            <a href="#">game pass</a>
          </div>
        </div>
        <ul>
          <li><a href="" class="link">Saludos</a></li>
          <li><a href="" class="link">Saludos</a></li>
          <li><a href="" class="link">Saludos</a></li>
          <li><a href="" class="link">Saludos</a></li>
          <li><a href="" class="link">Saludos</a></li>
        </ul>
      </nav>
    </header>
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
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
  background-color: blue;
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
nav .mobile {
  display: none;
  width: 100%;
}
nav .mobile .header {
  display: flex;
  text-align: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: red;
}
nav .mobile .header .logs {
  width: 120px;
}
nav .mobile .header .logs1 {
  padding: 10px 10px 0px 0px;

  width: 40px;
  height: 40px;
}
nav .mobile .header #bmenu {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: grey;
}
nav .mobile .links {
  display: none;
  flex-direction: column;
  position: relative;
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
