import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeftView from '../views/LeftView.vue'
import RightView from '../views/RightView.vue'
import MoreView from '../views/MoreView.vue'
import PhotographyIndexView from '../views/PhotographyIndexView.vue'
import ApertureShutterSpeed from '@/views/PhotographyViews/ApertureShutterSpeed.vue'
import ShadowLight from '@/views/PhotographyViews/ShadowLight.vue'
import StillLife from '@/views/PhotographyViews/StillLife.vue'
import PortraitsDiconnected from '@/views/PhotographyViews/PortraitsDiconnected.vue'
import SelfPortraits from '@/views/PhotographyViews/SelfPortraits.vue'
import NonProjectPhotos from '@/views/PhotographyViews/NonProjectPhotos.vue'
import ArtAndGraphicDesignView from '@/views/ArtAndGraphicDesignView.vue'
import Content from '@/views/Content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/left',
        name: 'left',
        component: LeftView,
    },
    {
        path: '/right',
        name: 'right',
        component: RightView,
    },
    {
        path: '/more',
        name: 'more',
        component: MoreView,
    },
    {
        path: '/photography',
        name: 'photography',
        component: PhotographyIndexView,
    },
    {
        path: '/photography/aperture-and-shutter-speed',
        name: 'apertureshutterspeed',
        component: ApertureShutterSpeed,
    },
    {
        path: '/photography/shadow-and-light',
        name: 'shadowandlight',
        component: ShadowLight,
    },
    {
        path: '/photography/still-life',
        name: 'stilllife',
        component: StillLife,
    },
    {
        path: '/photography/disconnected',
        name: 'disconnected',
        component: PortraitsDiconnected,
    },
    {
        path: '/photography/self-portraits',
        name: 'selfportraits',
        component: SelfPortraits,
    },
    {
        path: '/photography/non-project-photos',
        name: 'nonprojectphotos',
        component: NonProjectPhotos,
    },
    {
        path: '/art',
        name: 'art',
        component: ArtAndGraphicDesignView,
    },
    {
        path: '/more/content',
        name: 'content',
        component: Content,
    },
  ],
})

export default router
