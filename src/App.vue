<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
  <div id="main-container">
    <header>
      <nav>
        <div class="mobile">
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
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: 1.5;
}
/* navbar */
nav {
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: blue;
}
nav ul{
  display: flex;
  list-style: none;

  padding: 0;
  margin: 0;
  
}
nav ul li > a{
  display: block;
  position: relative;
  padding: 20px 15px 10px 15px;
  text-decoration: none;
  color: black;
}
nav ul li .link::before{
  content: '';
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
nav ul li .link:hover::before{
    transform: scaleX(1);
}


@media screen and (max-width: 701px){
  nav{
    width: 100%;
    padding: 0;
  }
}
</style>
