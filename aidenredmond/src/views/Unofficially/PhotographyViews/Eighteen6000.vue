<template>
    <div class="flex flex-1">
        <div class="flex-1 columns-6 space-y-4">
            <img 
                v-for="(image, index) in images" 
                :key="index" 
                :src="image.src" 
                :alt="image.alt" 
                @click="openModal(image.src)"
            >
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            isModalOpen: false,
            modalImage: '',
            images: [
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734435568/DSC00303_cn8muh.jpg", alt: "day 1"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734435567/DSC00317_wepyid.jpg", alt: "day 2"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734435568/DSC00374_fwmhye.jpg", alt: "day 3"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734435568/DSC01004_wdlquh.jpg", alt: "day 4"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734435516/DSC01229_j2ztq0.jpg", alt: "day 5"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1734460587/DSC01268_p3zcqs.jpg", alt: "day 6"},
            ]
        };
    },
    methods: {
        openModal(imageSrc) {
            this.modalImage = imageSrc;
            this.isModalOpen = true;
        },
        closeModal(event) {
            if (event.target === event.currentTarget) {
                this.isModalOpen = false;
            }
        }
    }
};
</script>
