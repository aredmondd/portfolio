<template>
    <div class="flex-grow flex items-center">
        <div class="w-full inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,white,black,transparent_100%)] group">
            <ul class="flex animate-loop-scroll">
                <div v-for="(image, index) in images" class="w-64 sm:w-32 mr-8 sm:mr-4 h-full" :key="index">
                    <a v-bind:href="image.link" target="_blank">
                        <img
                            :key="index"
                            :src="image.src"
                            :alt="image.alt"
                            class="border border-transparent rounded-md w-full h-full object-cover"
                        />
                    </a>
                </div>
            </ul>
            <ul class="flex animate-loop-scroll" aria-hidden="true">
                <div v-for="(image, index) in images" class="w-64 sm:w-32 mr-8 sm:mr-4 h-full" :key="index">
                    <a v-bind:href="image.link" target="_blank">
                        <img
                            :key="index"
                            :src="image.src"
                            :alt="image.alt"
                            class="border border-transparent rounded-md w-full h-full object-cover"
                        />
                    </a>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		},
	}
}
</script>