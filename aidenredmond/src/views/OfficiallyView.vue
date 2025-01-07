<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col flex-1">
        <h1 class="text-center text-4xl font-bold mt-12">Officially, Aiden Redmond</h1>
        <div class="flex flex-col items-center justify-start my-48">
            <div class="flex flex-col">
                <p>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[0ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>"Official. </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>He</span> <br>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[750ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>will </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1000ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>show </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>his </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>strengths </span>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1750ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>and </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[2000ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>experience </span> <br>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[2500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>to </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[2750ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>earn </span>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[3000ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>more </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[3250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>of </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[3500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>it."</span>
                </p>
            </div>

            <a href="/officially" class="underline mt-12 text-black text-opacity-25 opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[4250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>replay ↺</a>

        </div>

        <!-- PROJECTS SECTION -->
        <h2 class="text-center text-5xl font-bold">PROJECTS</h2>
        <p class="text-black text-opacity-50 text-sm text-center mt-3">(click on one to learn more)</p>
        <div class="grid grid-cols-3 place-items-center gap-24 m-24 mb-64 sm:grid-cols-1 sm:mx-6">
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
        <div class="flex justify-between items-start mb-48 mx-24 sm:mx-1">
            <div class="flex flex-col">
                <div class="block sm:hidden">
                    <h2 class="text-left text-5xl font-bold">PROFILE</h2>
                    <p class="text-left text-black text-opacity-50 text-sm mt-3 mb-12">(who... is aiden redmond?)</p>
                </div>
                <div class="hidden sm:block">
                    <h2 class="text-center text-5xl font-bold">PROFILE</h2>
                    <p class="text-center text-black text-opacity-50 text-sm mt-3 mb-12">(who... is aiden redmond?)</p>
                </div>
                <div class="flex flex-col">
                    <div class="flex items-center justify-start sm:justify-center">
                        <img src="../assets/images/logo_regular.png" alt="" width="50">
                        <h2 class="text-3xl font-bold text-right ml-2">Aiden Redmond</h2>
                    </div>
                    <p class="text-sm text-black text-opacity-50 mt-1 sm:text-center">web developer, student-athlete, artist</p>
                    <div class="text-md text-black text-opacity-75 mt-2 sm:text-center">
                        As a student-athlete at Florida Southern College, I excel in balancing multiple <br>
                        pursuits, honing a strong work ethic, and exceptional time management skills. <br><br>
                        My love for both computer science and graphic design allow me to combine my <br>
                        technical skills with creativity to craft impactful digital experiences.
                    </div>
                </div>
            </div>
            <img src="../assets/images/red.JPG" alt="" class="h-[350px] rounded-lg block sm:hidden">
        </div>


        <!-- EDUCATION -->
        <div class="flex justify-between items-start mb-48 mx-24 sm:mx-6">
            <div class="flex flex-col">
                <div class="block sm:hidden mb-6">
                    <h2 class="text-left text-5xl font-bold sm:text-center">EDUCATION</h2>
                    <p class="text-left text-black text-opacity-50 text-sm mt-3 mb-6 sm:text-center">(what has aiden redmond learned?)</p>
                </div>
                <div class="hidden sm:block mb-6">
                    <h2 class="text-center text-5xl font-bold">EDUCATION</h2>
                    <p class="text-center text-black text-opacity-50 text-sm mt-3 mb-6">(what has aiden redmond learned?)</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <div class="flex items-end justify-start sm:justify-center">
                            <img src="../assets/images/FSC.svg" alt="" width="20" class="mb-2 sm:w-5">
                            <h2 class="text-2xl font-bold ml-3 sm:text-xl">Florida Southern College</h2>
                        </div>
                        <p class="text-sm text-black text-opacity-50">Aug 2021 - May 2025</p>
                        <h3 class="sm:text-md text-black text-opacity-60 mt-2">B.S in Computer Science <br class="hidden sm:block"> (Web & Cloud Computing)<br> Minor in Graphic Design</h3>
                    </div>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled_hhxhcj.png" alt="" class="h-[350px] rounded-lg block sm:hidden">
        </div>


        <!-- EXPERIENCE -->
        <div class="flex justify-between items-start mb-48 mx-24 sm:mx-6">
            <div class="flex flex-col">
                <div class="block sm:hidden mb-6">
                    <h2 class="text-left text-5xl font-bold sm:text-center">EXPERIENCE</h2>
                    <p class="text-black text-opacity-50 text-sm text-left mt-3 mb-6 sm:text-center">(what has aiden redmond done?)</p>
                </div>
                <div class="hidden sm:block mb-6">
                    <h2 class="text-left text-5xl font-bold sm:text-center">EXPERIENCE</h2>
                    <p class="text-black text-opacity-50 text-sm text-left mt-3 mb-6 sm:text-center">(what has aiden redmond done?)</p>
                </div>
                <div class="flex justify-between sm:mx-0">
                    <div class="flex flex-col">
                        <div class="flex items-center justify-start sm:justify-center">
                            <img src="../assets/images/AER_LOGO.png" alt="" width="30">
                            <h2 class="text-3xl font-bold text-right ml-2 sm:text-center sm:text-2xl">Alter Ego Running</h2>
                        </div>
                        <p class="text-sm text-black text-opacity-50 mt-1 sm:text-xs sm:text-center sm:mb-2">Business Development Analyst (and model) - Summer '23, '24</p>

                        <!-- MOBILE -->
                        <div class="hidden sm:flex flex-col space-y-3 text-md text-black text-opacity-75 mt-2">
                            <p>• Redesigned the inventory tracking system using JS & Shopify increasing efficiency by over 60%.</p>
                            <p>
                                • Implemented a new helpdesk management system (Gorgias), organized customer service workflows, and trained
                                multiple staff members on software usage for operational efficiency.
                            </p>
                            <p>• Designed a system to optimize product flow, label & identify items, and streamline the process of receiving and updating new inventory.</p>
                        </div>

                        <!-- DESKTOP -->
                        <div class="sm:hidden flex flex-col space-y-3 text-md text-black text-opacity-75 mt-2">
                            <p>• Redesigned the inventory tracking system using JS & Shopify increasing <br> efficiency by over 60%.</p>
                            <p>
                                • Implemented a new helpdesk management system (Gorgias), organized <br>customer service workflows, and trained
                                multiple staff members on <br>software usage for operational efficiency.
                            </p>
                            <p>• Designed a system to optimize product flow, label & identify items, and <br>streamline the process of receiving and updating new inventory.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled-2_sm6aqm.png" alt="" class="h-[350px] rounded-lg block sm:hidden">
        </div>


        <!-- SKILLS -->
        <div class="sm:hidden flex justify-between">
            <div class="block sm:hidden mx-24 mb-6">
                <h2 class="text-left text-5xl font-bold sm:text-center">SKILLS</h2>
                <p class="text-black text-opacity-50 text-sm text-left mt-3 mb-6 sm:text-center">(what can aiden redmond do?)</p>
            </div>
            <div class="flex justify-between mb-48 mx-24">
                <div class="flex flex-col space-y-6 mt-2">
                    <h2 class="text-3xl font-bold mr-6">Proficient:</h2>
                    <div class="flex space-x-4 sm:flex-col sm:space-y-4">
                        <img src="../assets/images/html.png" alt="" class="h-10">
                        <img src="../assets/images/css.png" alt="" class="h-10">
                        <img src="../assets/images/js.png" alt="" class="h-10">
                        <img src="../assets/images/laravel.png" alt="" class="h-10">
                        <img src="../assets/images/tailwind.png" alt="" class="h-10">
                        <img src="../assets/images/php.png" alt="" class="h-10">
                    </div>
                    <h2 class="text-3xl font-bold mr-6">Familiar:</h2>
                    <div class="flex sm:flex-col space-x-4">
                        <img src="../assets/images/vue.png" alt="" class="h-10">
                        <img src="../assets/images/python.png" alt="" class="h-10">
                        <img src="../assets/images/firebase.png" alt="" class="h-10">
                    </div>
                </div>
            </div>
        </div>

        <!-- mobile version of SKILLS -->
        <div class="hidden sm:flex flex-col justify-between">
            <div class="hidden sm:block mb-6">
                <h2 class="text-left text-5xl font-bold sm:text-center">SKILLS</h2>
                <p class="text-black text-opacity-50 text-sm text-left mt-3 mb-6 sm:text-center">(what can aiden redmond do?)</p>
            </div>
            <div class="flex flex-col mt-2 mb-24">
                <h2 class="text-center text-3xl font-bold mr-6 mb-3">Proficient</h2>
                <div class="grid grid-cols-3 gap-6 mx-12 mb-12 place-items-center">
                    <img src="../assets/images/html.png" alt="" class="h-10">
                    <img src="../assets/images/css.png" alt="" class="h-10">
                    <img src="../assets/images/js.png" alt="" class="h-10">
                    <img src="../assets/images/laravel.png" alt="" class="h-10">
                    <img src="../assets/images/tailwind.png" alt="" class="h-10">
                    <img src="../assets/images/php.png" alt="" class="h-10">
                </div>
                <h2 class="text-center text-3xl font-bold mr-6 mb-3">Familiar</h2>
                <div class="grid grid-cols-3 gap-6 mx-12 place-items-center">
                    <img src="../assets/images/vue.png" alt="" class="h-10">
                    <img src="../assets/images/python.png" alt="" class="h-10">
                    <img src="../assets/images/firebase.png" alt="" class="h-10">
                </div>
            </div>
        </div>

    </main>
</template>