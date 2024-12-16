<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col flex-1">
        <h1 class="text-center text-4xl font-bold mt-12">unofficially, aiden redmond</h1>
        <div class="flex flex-col items-center justify-start my-36">
            <div class="flex flex-col">
                <p>
                    unofficial. he <br>
                    lays bare which he loves for they <br>
                    are what make him, him.
                </p>
            </div>
        </div>
        <h2 class="text-3xl font-bold my-12">what i'm watching/reading/playing/consuming/loving</h2>
        <ContentScroller :images="images"/>

        <h2 class="text-right text-3xl font-bold my-12">photography</h2>

        <h2 class="text-3xl font-bold my-12">mft (my favorite things)</h2>
    </main>
</template>

<script>
import ContentScroller from "@/components/ContentScroller.vue";

export default {
	components: {
		ContentScroller,
	},
    data() {
        return {
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
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/ballionaire_kg3zec.avif",
                    link: "https://store.steampowered.com/app/2667120/Ballionaire/",
                    alt: "image_3",
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
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/nine-sols_uxho56.avif",
                    link: "https://store.steampowered.com/app/1809540/Nine_Sols/",
                    alt: "image_6",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/ror2_jwpqbf.webp",
                    link: "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
                    alt: "image_7",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734103815/tca_xu5cwg.jpg",
                    link: "https://sites.prh.com/thecreativeact",
                    alt: "image_8",
                },
            ],
        };
    },
};
</script>