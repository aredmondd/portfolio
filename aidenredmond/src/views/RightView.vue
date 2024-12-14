<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex justify-end flex-1 space-x-64">
        <div class="flex flex-col mt-36">
            <RouterLink to="/photography" class="hover:text-pink">photography</RouterLink>
            <h2>art & graphic design</h2>
        </div>
        <div class="flex flex-col space-y-6">
            <h1 class="text-right font-bold text-5xl mt-12">right</h1>
            <p class="text-right text-white text-opacity-50 mt-4">the center of creativity, <br> imagination, <br> and intuition.</p>
        </div>
    </main>
</template>