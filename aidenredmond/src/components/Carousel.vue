<template>
	<div
		class="flex flex-1 justify-center mt-8 relative md:items-center md:mt-0"
	>
		<div class="relative overflow-hidden mx-auto w-2/3">
			<div
				ref="track"
				class="flex transition-transform duration-500 ease-in-out"
			>
				<img
					v-for="(image, index) in clonedImages"
					:key="index"
					:src="image.src"
					:alt="image.alt"
					class="w-full flex-shrink-0"
				/>
			</div>
		</div>
		<!-- Navigation Controls -->
		<button
			class="absolute top-1/2 left-0 transform -translate-y-1/2 text-black p-2 rounded-full hover:bg-pink transition-all duration-500 ease-in-out"
			@click="handlePrev"
		>
			&#9664;
		</button>
		<button
			class="absolute top-1/2 right-0 transform -translate-y-1/2 text-black p-2 rounded-full hover:bg-pink transition-all duration-500 ease-in-out"
			@click="handleNext"
		>
			&#9654;
		</button>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			currentIndex: 1,
			slideWidth: 0,
			isTransitioning: false,
		};
	},
	computed: {
		// Add clones of the first and last images for seamless looping
		clonedImages() {
			return [
				this.images[this.images.length - 1], // Last image clone
				...this.images, // Original images
				this.images[0], // First image clone
			];
		},
	},
	mounted() {
		this.initializeCarousel();
		window.addEventListener("resize", this.updateSlideWidth);
		window.addEventListener("keydown", this.handleKeydown);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.updateSlideWidth);
		window.removeEventListener("keydown", this.handleKeydown);
	},
	methods: {
		initializeCarousel() {
			this.updateSlideWidth();
			this.moveToSlide(this.currentIndex, false);
		},
		updateSlideWidth() {
			const track = this.$refs.track;
			if (track && track.children.length > 0) {
				this.slideWidth = track.children[0].getBoundingClientRect().width;
				this.moveToSlide(this.currentIndex, false);
			}
		},
		moveToSlide(index, withTransition = true) {
			const track = this.$refs.track;
			if (track) {
				if (!withTransition) {
					track.style.transition = "none";
				} else {
					track.style.transition = "transform 0.5s ease-in-out";
				}
				track.style.transform = `translateX(-${this.slideWidth * index}px)`;
			}
		},
		handleNext() {
			if (this.isTransitioning) return;
			this.isTransitioning = true;

			this.currentIndex++;
			this.moveToSlide(this.currentIndex);

			// Check if we need to loop back to the start
			if (this.currentIndex === this.clonedImages.length - 1) {
				setTimeout(() => {
					this.currentIndex = 1;
					this.moveToSlide(this.currentIndex, false);
					this.isTransitioning = false;
				}, 500);
			} else {
				setTimeout(() => {
					this.isTransitioning = false;
				}, 500);
			}
		},
		handlePrev() {
			if (this.isTransitioning) return;
			this.isTransitioning = true;

			this.currentIndex--;
			this.moveToSlide(this.currentIndex);

			// Check if we need to loop back to the end
			if (this.currentIndex === 0) {
				setTimeout(() => {
					this.currentIndex = this.images.length;
					this.moveToSlide(this.currentIndex, false);
					this.isTransitioning = false;
				}, 500);
			} else {
				setTimeout(() => {
					this.isTransitioning = false;
				}, 500);
			}
		},
		handleKeydown(event) {
			if (event.key === "ArrowLeft") {
				this.handlePrev();
			} else if (event.key === "ArrowRight") {
				this.handleNext();
			}
		},
	},
};
</script>