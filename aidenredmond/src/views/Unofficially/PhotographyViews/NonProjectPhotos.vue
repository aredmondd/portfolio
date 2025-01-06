<template>
    <div class="flex flex-1">
        <div class="flex-1 columns-3 gap-4 space-y-4 my-6 sm:columns-2">
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
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704780/_MG_9582_p71xdd.jpg", alt: "up close christopher" },
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704761/_MG_7205_sfb7h3.jpg", alt: "Alarm clock" }, 
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704768/_MG_7663_posvvp.jpg", alt: "luke + aiden" },
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704783/IMG_7068_euhvzr.jpg", alt: "blurry anthony"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704758/_MG_0624_cksxm9.jpg", alt: "aiden with a camera in GA"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704781/_MG_9638_iulkhr.jpg", alt: "beyblades"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704758/_MG_0091_ejmpwp.jpg", alt: "luke n ellie"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704765/_MG_7479_sbscmg.jpg", alt: "luke screaming"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704768/_MG_7661_ujnfqp.jpg", alt: "sexy aiden"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704762/_MG_7231_ny3sec.jpg", alt: "aiden in foggy mirror"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704763/_MG_7281_a21awj.jpg", alt: "jank blinds"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704775/_MG_9017_xorkdr.jpg", alt: "berries"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704760/_MG_7081_advllc.jpg", alt: "anthony with goggles"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704764/_MG_7409_tvydvn.jpg", alt: "anthony and elijah"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704783/IMG_9596_wsrvst.jpg", alt: "running rachel"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704767/_MG_7558_tq6ioh.jpg", alt: "tyler and trevor"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704765/_MG_7494_sdibpk.jpg", alt: "on shoes"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704762/_MG_7238_edeneq.jpg", alt: "bookshelf"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704784/IMG_9731_l0xga8.jpg", alt: "sunny grass"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704771/_MG_8200_dairjl.jpg", alt: "dangling feet"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704781/_MG_9606_wuy2oj.jpg", alt: "asap"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704773/_MG_8530_ibfvbq.jpg", alt: "lake mirror sculpture"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704770/_MG_8199_js4kqj.jpg", alt: "abandoned bus"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704778/_MG_9203_p5okun.jpg", alt: "anthony flexing"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8412_uwdla1.jpg", alt: "hung shoes"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9105_gpqzon.jpg", alt: "rusty shadows"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8206_tv3qin.jpg", alt: "anthony getting creative"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704782/_MG_9863_ualbbo.jpg", alt: "oil & water"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704761/_MG_7183_ggfeut.jpg", alt: "smash"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704763/_MG_7265_xf07oo.jpg", alt: "fridge magnets"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704767/_MG_7549_oycbqs.jpg", alt: "grass"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704778/_MG_9206_azuxyd.jpg", alt: "i came early"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704777/_MG_9201_juy5of.jpg", alt: "anthony threatens kim"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704770/_MG_8096_nofjr0.jpg", alt: "laughing anthony"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704773/_MG_8930_i8p2hk.jpg", alt: "security camera"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704769/_MG_8028_lggctz.jpg", alt: "aligator"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704759/_MG_0805_mcw94v.jpg", alt: "chrus cole gilla"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704779/_MG_9227_iieumv.jpg", alt: "CS balls"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704759/_MG_0895_myuiep.jpg", alt: "elijah"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9121_rlj0zf.jpg", alt: "rachel"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704774/_MG_8987_x1tsmg.jpg", alt: "shiny bike"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704764/_MG_7311_zcguav.jpg", alt: "tortilla anthony"},
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704779/_MG_9220_rz6v7k.jpg", alt: "aiden and anthony"}, 
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704760/_MG_0967_kzktks.jpg", alt: "aiden locked in"}, 
                { src: "https://res.cloudinary.com/dkznczrj0/image/upload/v1733704766/_MG_7515_ers8aj.jpg", alt: "tapped in will"},   
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
