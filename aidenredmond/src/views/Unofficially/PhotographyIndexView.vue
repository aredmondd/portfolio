<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex flex-1 ml-24 mt-24 space-x-32 sm:ml-0 sm:flex-col sm:space-x-0">
        <div class="mb-12">
            <h1 class="font-bold mb-6">digital photography (8/20/24 - 12/8/24)</h1>
            <div class="flex flex-col justify-between">
                <RouterLink to="/photography/aperture-and-shutter-speed" class="hover:text-pink">aperture & shutter speed</RouterLink>
                <RouterLink to="/photography/shadow-and-light" class="hover:text-pink">shadow & light</RouterLink>
                <RouterLink to="/photography/still-life" class="hover:text-pink">still life</RouterLink>
                <RouterLink to="/photography/disconnected" class="hover:text-pink">portraits - disconnected</RouterLink>
                <RouterLink to="/photography/self-portraits" class="hover:text-pink">self portraits</RouterLink>
                <RouterLink to="/photography/non-project-photos" class="hover:text-pink">non-project photos</RouterLink>
            </div>
        </div> 

        <div>
            <h1 class="font-bold mb-6">the final spring (12/12/24 - 5/3/24)</h1>
            <RouterLink to="/photography/186000" class="hover:text-pink">186000</RouterLink>
        </div>
    </div>
</template>