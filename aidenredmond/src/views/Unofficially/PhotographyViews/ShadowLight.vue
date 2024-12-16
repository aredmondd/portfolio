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
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763914/_MG_7813_h3veed.jpg",
                    alt: "image_1",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763914/_MG_8457_grndwi.jpg",
                    alt: "image_2",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733766365/_MG_8554_fixed_dht2wy.png",
                    alt: "image_3",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763914/_MG_8644_e8spg2.jpg",
                    alt: "image_4",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_8689_xzmcnl.jpg",
                    alt: "image_5",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763914/_MG_8364_m1j8s9.jpg",
                    alt: "image_6",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_9134_qruav5.jpg",
                    alt: "image_7",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_8718_au610y.jpg",
                    alt: "image_8",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763914/_MG_8602_hlu7yy.jpg",
                    alt: "image_9",
                },
                {
                    src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733763915/_MG_8881_jbocjo.jpg",
                    alt: "image_10",
                },
            ],
        };
    },
};
</script>