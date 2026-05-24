<template>
  <Navbar />
  <router-view />
  <MyFoot/>
</template>
<script setup>
import MyFoot from "./components/MyFoot.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style>
</style>