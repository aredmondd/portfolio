<template>
	<Carousel :images="images" />
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
	components: {
		Carousel,
	},
    data() {
        return {
            images: [
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781542/9430-FIXED_xfemyl.png",
                    alt: "image_1",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781538/Artboard5_r2ew64.png",
                    alt: "image_2",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781534/9824-FIXED_kw4sfc.png",
                    alt: "image_3",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781536/Artboard4_e3jgvd.png",
                    alt: "image_4",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781541/_MG_1481_dfjvll.jpg",
                    alt: "image_5",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781533/9558-FIXED_ll2mbm.png",
                    alt: "image_6",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781540/_MG_1287_uvzh7x.jpg",
                    alt: "image_7",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733781537/Artboard5_2_r7hank.png",
                    alt: "image_8",
                },
            ],
        };
    },

};
</script>