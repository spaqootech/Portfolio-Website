<script setup>
import Menu from '../../public/assets/Menu.vue';
</script>
<template lang="">
    <nav class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">SpaqooT</h1>
        <ul class="md:flex space-x-10 hidden">
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        <div class="md:hidden"><Menu/></div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>