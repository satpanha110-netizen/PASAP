<template>
 
  <Navbar />
  <Banner />
  <Card />
    <router-view />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Card from "./components/Card.vue";

</script>

<style>

</style>