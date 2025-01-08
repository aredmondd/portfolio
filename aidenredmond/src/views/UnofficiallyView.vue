<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col flex-1">
        <h1 class="text-center text-4xl font-bold mt-12 sm:px-6">unofficially, aiden redmond</h1>
        <div class="flex flex-col items-center justify-start my-48">
            <div class="flex flex-col">
                <p>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[0ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>"unofficial. </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>he</span> <br>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[750ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>lays </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1000ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>bare </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>which </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>he </span>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[1750ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>loves </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[2250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>for </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[2500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>they </span> <br>
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[2750ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>are </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[3000ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>what </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[3250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>make </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[3500ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>him, </span> 
                    <span class="opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[4250ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>him."</span>
                </p>
            </div>
            <a href="/unofficially" class="underline mt-12 text-black text-opacity-25 opacity-0 duration-700 transform opacity-0 transition-all translate-y-12 ease-in-out delay-[5000ms]" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100"}'>replay ↺</a>
        </div>

        <h2 class="text-3xl font-bold mt-6 mb-6 sm:text-center">photography  📸</h2>
        <h3 class="text-right mb-12 sm:text-sm sm:text-center">when i'm not working or running - i'm taking photos. <br> here are my favorites, but can you check out more <RouterLink to="/photography" class="underline underline-offset-4 hover:text-pink transition-all duration-300 ease-in-out">here &#x2197;</RouterLink></h3>


        <div class="grid grid-cols-4 gap-4 mb-48 sm:grid-cols-2">
            <div class="grid gap-4 photo-col">
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8206_tv3qin.jpg" alt="" @click="openModal($event.target.src)">
                </div>
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363767/DSC00374_esme4j.jpg" alt="" @click="openModal($event.target.src)">
                </div>
            </div>
            <div class="grid gap-4 photo-col">
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363314/_MG_9430_lcteaz.jpg" alt="" @click="openModal($event.target.src)">
                </div>
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9121_rlj0zf.jpg" alt="" @click="openModal($event.target.src)">
                </div>
            </div>
            <div class="grid gap-4 photo-col">
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_8718_au610y.jpg" alt="" @click="openModal($event.target.src)">
                </div>
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363821/DSC01004_l2iotu.jpg" alt="" @click="openModal($event.target.src)">
                </div>
            </div>
            <div class="grid gap-4 photo-col">
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1735177793/DSC01568_ud8fer.jpg" alt="" @click="openModal($event.target.src)">
                </div>
                <div >
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733780751/_MG_0884_cropped_fb9zep.jpg" alt="" @click="openModal($event.target.src)">
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div 
            v-if="isModalOpen" 
            id="imageModal" 
            class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
            @click="closeModal"
        >
            <div class="relative">
                <img 
                    id="modalImage" 
                    :src="modalImage" 
                    class="max-w-full max-h-screen my-12"
                >
            </div>
        </div>

        <h2 class="text-right text-3xl font-bold mt-12 mb-6 sm:text-center">what i'm loving 💚</h2>
        <h3 class="mb-12 sm:text-sm sm:text-center">a huge part of my inspiration comes from media. <br>here's what i'm into right now.</h3>
        <ContentScroller :images="images" class="mb-48"/>

        <h2 class="text-left text-3xl font-bold mt-12 mb-6 sm:text-center">year in review 📆</h2>
        <h3 class="text-right mb-12 sm:text-sm sm:text-center">i love tracking what i'm into.<br> what i'm consuming, making, doing, & more. it'll live here.</h3>

        <div class="grid grid-cols-4 gap-6 mb-48 sm:grid-cols-2">
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black hover:bg-blue transition-all duration-500 ease-in-out">january</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">february</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">march</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">april</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">may</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">june</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">july</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">august</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">september</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">october</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">november</div>
            <div class="month-item border border-2 rounded-lg py-24 sm:py-12 text-center border-black text-black text-opacity-25 border-opacity-25">december</div>
        </div>

        <h2 class="text-right text-3xl font-bold mt-12 mb-6 sm:text-center">the vault 🏛️</h2>
        <h3 class="mb-12 mb-12 sm:text-sm sm:text-center">this section is <span class="line-through">stolen from</span> inspired by <br class="hidden sm:block"> <a href="https://www.iamrob.in/bookmarks" target="_blank" class="underline underline-offset-4 hover:text-pink transition-all duration-300 ease-in-out">iamrobin's bookmarks &#x2197;</a>. <br> here are some of my favorite websites, tools, & more.</h3>
        <MFT class="mb-12"/>
    </main>
</template>

<script>
import ContentScroller from "@/components/ContentScroller.vue";
import MFT from "@/components/MFT.vue";

export default {
	components: {
		ContentScroller,
        MFT,
	},
    data() {
        return {
            isModalOpen: false,
            modalImage: '',
            images: [
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/hxh_lzqwpq.jpg",
                    link: "https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter",
                    alt: "image_1",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/ddd_aselnr.webp",
                    link: "https://en.wikipedia.org/wiki/Dandadan",
                    alt: "image_2",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1735680633/library_600x900_2x_r0ngjw.jpg",
                    link: "https://store.steampowered.com/app/620/Portal_2/",
                    alt: "image_3",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1735680751/9f1dd83ac3b7bcbf034240fad7ff7d4d_luvjcx.jpg",
                    link: "https://en.wikipedia.org/wiki/Mega_Man_2",
                    alt: "image_8",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/csm_mjjaun.jpg",
                    link: "https://en.wikipedia.org/wiki/Chainsaw_Man",
                    alt: "image_4",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/gachiakuta_euaois.webp",
                    link: "https://en.wikipedia.org/wiki/Gachiakuta",
                    alt: "image_5",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/tca_xu5cwg.jpg",
                    link: "https://sites.prh.com/thecreativeact",
                    alt: "image_8",
                },
            ],
        };
    },
    mounted() {
        this.addScrollAnimations();
    },
    methods: {
        openModal(imageSrc) {
            this.modalImage = imageSrc;
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden'; // Disable scrolling
        },
        closeModal(event) {
            if (event.target === event.currentTarget) {
                this.isModalOpen = false;
                document.body.style.overflow = ''; // Restore scrolling
            }
        },
        addScrollAnimations() {
            const months = document.querySelectorAll('.month-item');
            const photos = document.querySelectorAll('img.h-auto');

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

            months.forEach((month) => {
                month.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500', 'ease-out'); // Initial state
                observer.observe(month);
            });

            photos.forEach((photo) => {
                photo.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500', 'ease-out'); // Initial state
                observer.observe(photo);
            });
        },
    }
};
</script>