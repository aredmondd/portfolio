<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="flex justify-between items-center">
        <RouterLink to="/officially" class="hover:text-pink">aiden (officially)</RouterLink>
        <RouterLink to="/"><img src="/src/assets/images/logo_regular.png" alt="" width="80"></RouterLink>
        <RouterLink to="/unofficially" class="hover:text-pink">aiden (unofficially)</RouterLink>
    </nav>
</template>