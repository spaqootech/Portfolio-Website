<script setup>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Client from './components/Client.vue';
import Experience from './components/Experience.vue';
import LetsTalk from './components/LetsTalk.vue';
import Footer from './components/Footer.vue';
</script>
<template lang="">
  <div class="p-5 md:p-10 md:px-20 flex flex-col gap-5">

    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Client/>
    <Experience/>
    <LetsTalk/>
    <Footer/>
  
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>