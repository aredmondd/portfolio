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
            <RouterLink to="/Reservoir" class="project">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#0A1826] transition-all duration-500 ease-in-out">
                        <img src="@/assets/images/reservoir-png.png">
                    </div>
                    <p class="text-lg text-center mt-6">A social platform for media tracking</p>
                    <p class="text-md text-black text-opacity-50 text-sm text-center mt-1">Senior Project - Fall 2024</p>
                </div>
            </RouterLink>
            <RouterLink to="/nihonGO" class="project">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#f1cd9d] transition-all duration-500 ease-in-out">
                        <img src="@/assets/images/nihongo-png.png">
                    </div>
                    <p class="text-center mt-6">A language-learning app focused on Japanese</p>
                    <p class="text-black text-opacity-50 text-sm text-center mt-1">Software Engineering - Fall 2024</p>
                </div>
            </RouterLink>
            <RouterLink to="/JASIAH" class="project">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center h-full rounded-lg hover:bg-[#ffffff] transition-all duration-500 ease-in-out hover:invert">
                        <img src="@/assets/images/jasiah-png.png">
                    </div>
                    <p class="text-center mt-6">An automated inventory management script</p>
                    <p class="text-black text-opacity-50 text-sm text-center mt-1">Alter Ego Running - Summer 2024</p>
                </div>
            </RouterLink>
        </div>

        <!-- PROFILE -->
        <div class="flex justify-between items-start mb-48 mx-24 sm:mx-1">
            <div class="flex flex-col left-item">
                <!-- desktop -->
                <div class="block sm:hidden">
                    <h2 class="text-left text-5xl font-bold">PROFILE</h2>
                    <p class="text-left text-black text-opacity-50 text-sm mt-3 mb-12">(who... is aiden redmond?)</p>
                </div>
                <!-- mobile -->
                <div class="hidden sm:block">
                    <h2 class="text-center text-5xl font-bold">PROFILE</h2>
                    <p class="text-center text-black text-opacity-50 text-sm mt-3 mb-12">(who... is aiden redmond?)</p>
                </div>
                <div class="flex flex-col">
                    <div class="flex items-center justify-start sm:justify-center">
                        <img src="@/assets/images/logo_regular.png" alt="" width="50">
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
            <img src="@/assets/images/red-profile.jpeg" alt="" class="h-[350px] rounded-lg block sm:hidden right-item">
        </div>


        <!-- EDUCATION -->
        <div class="flex justify-between items-start mb-48 mx-24 sm:mx-6">
            <div class="flex flex-col left-item">
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
                            <img src="@/assets/images/fsc-svg.svg" alt="" width="20" class="mb-2 sm:w-5">
                            <h2 class="text-2xl font-bold ml-3 sm:text-xl">Florida Southern College</h2>
                        </div>
                        <p class="text-sm text-black text-opacity-50">Aug 2021 - May 2025</p>
                        <h3 class="sm:text-md text-black text-opacity-60 mt-2">B.S in Computer Science <br class="hidden sm:block"> (Web & Cloud Computing)<br> Minor in Graphic Design</h3>
                    </div>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled_hhxhcj.png" alt="" class="h-[350px] rounded-lg block sm:hidden right-item">
        </div>


        <!-- EXPERIENCE -->
        <div class="flex justify-between items-start mb-48 mx-24 sm:mx-6">
            <div class="flex flex-col left-item">
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
                            <img src="@/assets/images/aer_logo_png.png" alt="" width="30">
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
                                • Implemented a new helpdesk management system (<a target="_blank" class="underline" href="https://www.gorgias.com/">Gorgias</a>), organized <br>customer service workflows, and trained
                                multiple staff members on <br>software usage for operational efficiency.
                            </p>
                            <p>• Designed a system to optimize product flow, label & identify items, and <br>streamline the process of receiving and updating new inventory.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dkznczrj0/image/upload/v1736189209/Untitled-2_sm6aqm.png" alt="" class="h-[350px] rounded-lg block sm:hidden right-item">
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
                        <a target="_blank" href="https://en.wikipedia.org/wiki/HTML"><img src="@/assets/images/html.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://en.wikipedia.org/wiki/CSS"><img src="@/assets/images/css.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript"><img src="@/assets/images/js.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://laravel.com/"><img src="@/assets/images/laravel.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://tailwindcss.com/"><img src="@/assets/images/tailwind.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://www.php.net/"><img src="@/assets/images/php.png" alt="" class="h-10 tech-stack-item"></a>
                    </div>
                    <h2 class="text-3xl font-bold mr-6">Familiar:</h2>
                    <div class="flex sm:flex-col space-x-4">
                        <a target="_blank" href="https://vuejs.org/"><img src="@/assets/images/vue.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://www.python.org/"><img src="@/assets/images/python.png" alt="" class="h-10 tech-stack-item"></a>
                        <a target="_blank" href="https://firebase.google.com/"><img src="@/assets/images/firebase.png" alt="" class="h-10 tech-stack-item"></a>
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
                    <a target="_blank" href="https://en.wikipedia.org/wiki/HTML"><img src="@/assets/images/html.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://en.wikipedia.org/wiki/CSS"><img src="@/assets/images/css.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript"><img src="@/assets/images/js.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://laravel.com/"><img src="@/assets/images/laravel.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://tailwindcss.com/"><img src="@/assets/images/tailwind.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://www.php.net/"><img src="@/assets/images/php.png" alt="" class="h-10"></a>
                </div>
                <h2 class="text-center text-3xl font-bold mr-6 mb-3">Familiar</h2>
                <div class="grid grid-cols-3 gap-6 mx-12 place-items-center">
                    <a target="_blank" href="https://vuejs.org/"><img src="@/assets/images/vue.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://www.python.org/"><img src="@/assets/images/python.png" alt="" class="h-10"></a>
                    <a target="_blank" href="https://firebase.google.com/"><img src="@/assets/images/firebase.png" alt="" class="h-10"></a>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
export default {
    mounted() {
        this.addScrollAnimations();
    },
    methods: {
        addScrollAnimations() {
            const projects = document.querySelectorAll('.project');
            const left_items = document.querySelectorAll('.left-item');
            const right_items = document.querySelectorAll('.right-item');
            const tech_stack_items = document.querySelectorAll('.tech-stack-item');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                            entry.target.classList.remove('opacity-0', 'translate-y-10');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.5,
                }
            );

            let delay = 0
            projects.forEach((project) => {
                project.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500', 'ease-out', `delay-[${delay}ms]`); // Initial state
                observer.observe(project);
                delay += 250;
            });

            left_items.forEach((item) => {
                item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500', 'ease-out', 'delay-[250ms]');
                observer.observe(item);
            });

            right_items.forEach((item) => {
                item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500', 'ease-out', 'delay-[250ms]');
                observer.observe(item);
            });

            let stack_delay = 100
            const delays = ['delay-100ms', 'delay-200ms', 'delay-300ms', 'delay-400ms', 'delay-500ms', 'delay-600ms', 'delay-700ms', 'delay-800ms', 'delay-900ms'];
            tech_stack_items.forEach((item, index) => {
                item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-100', 'ease-out', delays[index % delays.length]);
                observer.observe(item);
                stack_delay += 100;
            });
        },
    }
};
</script>