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
					src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733767024/9558-FIXED_kcjqdd.png",
					alt: "image_1",
				},
				{
					src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733767021/_MG_9441_ilsayl.jpg",
					alt: "image_2",
				},
				{
					src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733767025/9824-FIXED_vgjskl.png",
					alt: "image_3",
				},
				{
					src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733767022/_MG_9494_rodpi3.jpg",
					alt: "image_4",
				},
				{
					src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733767021/_MG_9470_whmadd.jpg",
					alt: "image_5",
				},
                {
					src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733767023/9430-FIXED_ld3pdg.png",
					alt: "image_6",
				},
			],
		};
	},
};
</script>