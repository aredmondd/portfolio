<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="flex flex-col flex-1">
        <h1 class="text-center text-4xl font-bold mt-12">unofficially, aiden redmond</h1>
        <div class="flex flex-col items-center justify-start my-48">
            <div class="flex flex-col">
                <p>
                    unofficial. he <br>
                    lays bare which he loves for they <br>
                    are what make him, him.
                </p>
            </div>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">photography</h2>
        <h3 class="text-right mb-12">when i'm not working, running, or consuming media - i'm taking photos. <br> here are some of my favorites, but can you check out more <RouterLink to="/photography" class="underline underline-offset-4 hover:text-pink transition-all duration-300 ease-in-out">here &#x2197;</RouterLink></h3>


        <div class="grid grid-cols-4 gap-4 mb-48">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8206_tv3qin.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363767/DSC00374_esme4j.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363314/_MG_9430_lcteaz.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9121_rlj0zf.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733780751/_MG_0884_cropped_fb9zep.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363821/DSC01004_l2iotu.jpg" alt="">
                    
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1734363356/_MG_9558_whoncd.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_8718_au610y.jpg" alt="">
                </div>
            </div>
        </div>

        <h2 class="text-right text-3xl font-bold mt-12 mb-6">what i'm loving</h2>
        <h3 class="mb-12">a huge part of my inspiration comes from media. <br>here's what i'm into right now. you can check out some of my reviews <RouterLink to="/" class="underline underline-offset-4 hover:text-pink transition-all duration-300 ease-in-out">here &#x2197;</RouterLink></h3>
        <ContentScroller :images="images" class="mb-48"/>


        <h2 class="text-3xl font-bold mt-12 mb-6">mft (my favorite things)</h2>
        <h3 class="text-right mb-12">this section is <span class="line-through">inspired by</span> stolen from <a href="https://www.iamrob.in/bookmarks" target="_blank" class="underline underline-offset-4 hover:text-pink transition-all duration-300 ease-in-out">iamrobin's bookmarks &#x2197;</a>. <br> here are some of my favorite websites, tools, articles, apps, and more.</h3>

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