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
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780752/lk_edited_2_rh49rr.jpg",
                    alt: "image_1",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780857/will_ptyiok.jpg",
                    alt: "image_2",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780751/flu_edited_hmkiv6.jpg",
                    alt: "image_3",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780878/9430-FIXED_cnsmwa.png",
                    alt: "image_4",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780881/Artboard4_baqf6l.png",
                    alt: "image_5",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780880/9824-FIXED_cwlhze.png",
                    alt: "image_6",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780879/9558-FIXED_c3puix.png",
                    alt: "image_7",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733780751/_MG_0884_cropped_fb9zep.jpg",
                    alt: "image_8",
                },
            ],
        };
    },
};
</script>