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
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7401_rjchvu.jpg",
                    alt: "image_1",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7416_jrceg9.jpg",
                    alt: "image_2",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7569_d0tp2c.jpg",
                    alt: "image_3",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760193/_MG_7697_wc97tw.jpg",
                    alt: "image_4",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7546_lqvtsu.jpg",
                    alt: "image_5",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760193/_MG_7428_gemnof.jpg",
                    alt: "image_6",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7457_bqtdzz.jpg",
                    alt: "image_7",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733760193/_MG_7872_qaqlef.jpg",
                    alt: "image_8",
                },
            ],
        };
    },
};
</script>