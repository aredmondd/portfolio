<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col space-y-6 flex-1 justify-center items-center">
        <h1>running</h1>
        <h1>tech</h1>
        <RouterLink to="/more/content" class="hover:text-pink">what i'm up to</RouterLink>
        <h1>update log</h1>
    </main>
</template>