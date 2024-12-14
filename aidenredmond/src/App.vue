<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="flex justify-between items-center">
        <RouterLink to="/"><img src="/src/assets/logo_regular.png" alt="" width="64"></RouterLink>
        <div class="flex space-x-6">
            <RouterLink to="/left">left</RouterLink>
            <RouterLink to="/right">right</RouterLink>
            <RouterLink to="/more">more</RouterLink>
        </div>
    </nav>
    <RouterView />
</template>
