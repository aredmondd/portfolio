<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col flex-1">
        <h1 class="text-center text-4xl font-bold mt-12">Officially, Aiden Redmond</h1>
        <div class="flex flex-col items-center justify-start my-48">
            <div class="flex flex-col">
                <p>
                    Official. He will <br>
                    show his strengths and experience <br>
                    to earn more of it.
                </p>
            </div>
        </div>

        <!-- PROJECTS SECTION -->
        <h2 class="text-center text-5xl font-bold">PROJECTS</h2>
        <p class="text-black text-opacity-50 text-sm text-center mt-3">(click on one to learn more)</p>
        <div class="grid grid-cols-3 place-items-center gap-24 m-24 mb-48">
            <RouterLink to="/Reservoir">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#0A1826] transition-all duration-500 ease-in-out">
                        <img src="../assets/images/RESERVOIR.png">
                    </div>
                    <p class="text-lg text-center mt-6">A social platform for media tracking</p>
                    <p class="text-md text-black text-opacity-50 text-sm text-center mt-1">Senior Project - Fall 2024</p>
                </div>
            </RouterLink>
            <RouterLink to="/nihonGO">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#f1cd9d] transition-all duration-500 ease-in-out">
                        <img src="../assets/images/NIHONGO.png">
                    </div>
                    <p class="text-center mt-6">A language-learning app focused on Japanese</p>
                    <p class="text-black text-opacity-50 text-sm text-center mt-1">Software Engineering - Fall 2024</p>
                </div>
            </RouterLink>
            <RouterLink to="/JASIAH">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#ffffff] transition-all duration-500 ease-in-out hover:invert">
                        <img src="../assets/images/JASIAH.png">
                    </div>
                    <p class="text-center mt-6">An automated inventory management script</p>
                    <p class="text-black text-opacity-50 text-sm text-center mt-1">Alter Ego Running - Summer 2024</p>
                </div>
            </RouterLink>
        </div>

        <!-- PROFILE -->
        <div class="flex justify-between mb-48 mx-24">
            <h2 class="text-5xl font-bold underline underline-offset-8 decoration-[6px]">PROFILE</h2>
            <div class="flex flex-col">
                <div class="flex items-center justify-start">
                    <img src="../assets/images/logo_regular.png" alt="" width="50">
                    <h2 class="text-3xl font-bold text-right ml-2">Aiden Redmond</h2>
                </div>
                <p class="text-sm text-black text-opacity-50 mt-1">web developer, student-athlete, artist</p>
                <div class="text-md text-black text-opacity-75 mt-2">
                    As a student-athlete at Florida Southern College, I excel in balancing multiple <br>
                    pursuits, honing a strong work ethic, and exceptional time management skills. <br><br>

                    My love for both computer science and graphic design allow me to combine my <br>
                    technical skills with creativity to craft impactful digital experiences.
                </div>
            </div>
        </div>


        <!-- EDUCATION -->
        <div class="flex justify-between mb-48 mx-24">
            <h2 class="text-5xl font-bold underline underline-offset-8 decoration-[6px]">EDUCATION</h2>
            <div class="flex flex-col">
                <div class="flex items-start justify-start">
                    <img src="../assets/images/FSC.svg" alt="" width="30">
                    <h2 class="text-3xl font-bold ml-3">Florida Southern College</h2>
                </div>
                <p class="text-sm text-black text-opacity-50">Aug 2021 - May 2025</p>
                <h3 class="text-lg text-black text-opacity-60 mt-2">B.S in Computer Science (Web & Cloud Computing)<br> Minor in Graphic Design</h3>
            </div>
        </div>


        <!-- EXPERIENCE -->
        <div class="flex justify-between mb-48 mx-24">
            <h2 class="text-5xl font-bold underline underline-offset-8 decoration-[6px]">EXPERIENCE</h2>
            <div class="flex flex-col">
                <div class="flex items-center justify-start">
                    <img src="../assets/images/AER_LOGO.png" alt="" width="30">
                    <h2 class="text-3xl font-bold text-right ml-2">Alter Ego Running</h2>
                </div>
                <p class="text-sm text-black text-opacity-50 mt-1">Business Development Analyst - Summer 2023, 2024</p>
                <div class="flex flex-col space-y-3 text-md text-black text-opacity-75 mt-2">
                    <p>• Redesigned the inventory tracking system using JS & Shopify increasing <br> efficiency by over 60%.</p>
                    <p>
                        • Implemented a new helpdesk management system (Gorgias), organized <br>customer service workflows, and trained
                          multiple staff members on <br>software usage for operational efficiency.
                    </p>
                    <p>• Designed a system to optimize product flow, label & identify items, and <br>streamline the process of receiving and updating new inventory.</p>
                </div>
            </div>
        </div>


        <!-- SKILLS -->
        <div class="flex justify-between mb-48 mx-24">
            <h2 class="text-5xl font-bold underline underline-offset-8 decoration-[6px]">SKILLS</h2>
            <div class="flex flex-col absolute left-1/2 space-y-6 mt-2">
                <div class="flex">
                    <h2 class="text-3xl font-bold mr-6">Proficient:</h2>
                    <div class="flex space-x-4">
                        <img src="../assets/images/laravel.png" alt="" class="h-10">
                        <img src="../assets/images/tailwind.png" alt="" class="h-10">
                        <img src="../assets/images/github.png" alt="" class="h-10">
                        <img src="../assets/images/html.png" alt="" class="h-10">
                        <img src="../assets/images/css.png" alt="" class="h-10">
                        <img src="../assets/images/js.png" alt="" class="h-10">
                        <img src="../assets/images/php.png" alt="" class="h-10">
                    </div>
                </div>
                <div class="flex">
                    <h2 class="text-3xl font-bold mr-6">Familiar:</h2>
                    <div class="flex space-x-4">
                        <img src="../assets/images/vue.png" alt="" class="h-10">
                        <img src="../assets/images/python.png" alt="" class="h-10">
                        <img src="../assets/images/firebase.png" alt="" class="h-10">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>