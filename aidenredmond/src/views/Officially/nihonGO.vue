<template>
    <div class="flex flex-col flex-1 my-12 p-12 bg-[#f1cd9d] rounded-lg text-[#181113]">

        <!-- mobile version -->
        <div class="hidden sm:flex flex-col">
            <img src="@/assets/images/colored-nihongo-logo.png" alt="" class="w-80 mb-2">
            <div class="flex justify-between items-start pb-4">
                <a href="https://github.com/aredmondd/nihongo" target="_blank" class="underline mb-2">see the code</a>
                <div class="flex space-x-3">
                    <a target="_blank" href="https://www.djangoproject.com/"><img src="@/assets/images/django.svg" alt="" class="w-6"></a>
                    <a target="_blank" href="https://www.python.org/"><img src="@/assets/images/python.png" alt="" class="w-6"></a>
                    <a target="_blank" href="https://tailwindcss.com/"><img src="@/assets/images/tailwind.png" alt="" class="w-6"></a>
                </div>
            </div>
        </div>

        <!-- desktop version -->
        <div class="sm:hidden flex justify-between items-end mb-12">
            <div>
                <img src="@/assets/images/colored-nihongo-logo.png" alt="" class="w-80">
            </div>
            <div class="flex flex-col items-end pb-4">
                <a href="https://github.com/aredmondd/nihongo" target="_blank" class="underline mb-2">see the code</a>
                <div class="flex space-x-3">
                    <a target="_blank" href="https://www.djangoproject.com/"><img src="@/assets/images/django.svg" alt="" class="w-8"></a>
                    <a target="_blank" href="https://www.python.org/"><img src="@/assets/images/python.png" alt="" class="w-8"></a>
                    <a target="_blank" href="https://tailwindcss.com/"><img src="@/assets/images/tailwind.png" alt="" class="w-8"></a>
                </div>
            </div>
        </div>
        <p class="text-left text-lg mb-12 sm:text-sm sm:mt-12">nihonGO is a Django and Python-based web application designed to help English and Japanese speakers communicate more effectively. It features a messaging system, a public forum for cultural exchange, and a flashcard component for language learning, creating an integrated platform for cross-cultural interaction and education.</p>

        <h2 class="font-bold text-2xl mb-2"><span class="underline">Why</span> is nihonGO?</h2>
        <p class="text-md mb-12 sm:text-sm">nihonGO was a collaborative Software Engineering project aimed at building an ambitious web app that bridges the gap between English and Japanese speakers. It provides a platform for cultural exchange, language practice, and fostering mutual understanding, combining innovation with meaningful purpose.</p>

        <h2 class="font-bold text-2xl mb-2">Why is nihonGO important to Aiden Redmond?</h2>
        <p class="text-md mb-24 sm:text-sm">nihonGO was an opportunity to step into a leadership role while collaborating with a talented team. As the most experienced member in web app development and the technologies we used, I guided the project’s technical direction and mentored others along the way. This experience reinforced the importance of clear communication, teamwork, and writing clean, scalable code for real-world applications.</p>

        <div class="grid grid-cols-2 gap-12 sm:grid-cols-1 sm:gap-4">
            <img class="border-2 border-black rounded-lg border-opacity-25" src="@/assets/images/nihongo/nihongo-about.png" alt="">
            <img class="border-2 border-black rounded-lg border-opacity-25" src="@/assets/images/nihongo/nihongo-home.png" alt="">
            <img class="border-2 border-black rounded-lg border-opacity-25" src="@/assets/images/nihongo/nihongo-register.png" alt="">
            <img class="border-2 border-black rounded-lg border-opacity-25" src="@/assets/images/nihongo/nihongo-forum.png" alt="">
            <img class="border-2 border-black rounded-lg border-opacity-25" src="@/assets/images/nihongo/nihongo-study.png" alt="">
            <img class="border-2 border-black rounded-lg border-opacity-25" src="@/assets/images/nihongo/nihongo-messaging.png" alt="">
        </div>
    </div>
</template>