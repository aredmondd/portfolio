<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col flex-1">
        <h1 class="text-center text-4xl font-bold mt-12">officially, aiden redmond</h1>
        <div class="flex flex-col items-center justify-start my-48">
            <div class="flex flex-col">
                <p>
                    official. he will <br>
                    show his strengths and experience <br>
                    to earn more of it.
                </p>
            </div>
        </div>

        <h2 class="text-center text-4xl font-bold">check out some of my projects:</h2>
        <p class="text-sm text-center">(click on one to learn more)</p>
        <div class="grid grid-cols-3 place-items-center gap-24 m-24">
            <div class="flex flex-col h-full">
                <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#0A1826] transition-all duration-500 ease-in-out">
                    <img src="../assets/RESERVOIR.PNG">
                </div>
                <p class="text-center mt-6">a social media tracking web app</p>
                <p class="text-center mt-1">senior project - fall 2024</p>
            </div>
            <div class="flex flex-col h-full">
                <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#f1cd9d] transition-all duration-500 ease-in-out">
                    <img src="../assets/NIHONGO.PNG">
                </div>
                <p class="text-center mt-6">a language-learning app focused on Japanese</p>
                <p class="text-center mt-1">software engineering - fall 2024</p>
            </div>
            <div class="flex flex-col h-full">
                <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#ffffff] transition-all duration-500 ease-in-out hover:invert">
                    <img src="../assets/JASIAH.PNG">
                </div>
                <p class="text-center mt-6">an automated inventory management script</p>
                <p class="text-center mt-1">alter ego running - summer 2024</p>
            </div>
        </div>

        <h2 class="text-center text-4xl font-bold my-24">and some more about me...</h2>
    </main>
</template>