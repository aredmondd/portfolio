import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import OfficiallyView from '../views/OfficiallyView.vue'
import MoreView from '../views/Unofficially/MoreView.vue'
import PhotographyIndexView from '../views/Unofficially/PhotographyIndexView.vue'
import ApertureShutterSpeed from '@/views/Unofficially/PhotographyViews/ApertureShutterSpeed.vue'
import ShadowLight from '@/views/Unofficially/PhotographyViews/ShadowLight.vue'
import StillLife from '@/views/Unofficially/PhotographyViews/StillLife.vue'
import PortraitsDiconnected from '@/views/Unofficially/PhotographyViews/PortraitsDiconnected.vue'
import SelfPortraits from '@/views/Unofficially/PhotographyViews/SelfPortraits.vue'
import NonProjectPhotos from '@/views/Unofficially/PhotographyViews/NonProjectPhotos.vue'
import Content from '@/views/Unofficially/Content.vue'
import UnofficiallyView from '@/views/UnofficiallyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: IndexView,
    },
    {
        path: '/unofficially',
        name: 'unofficially',
        component: UnofficiallyView,
    },
    {
        path: '/officially',
        name: 'officially',
        component: OfficiallyView,
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
        path: '/more/content',
        name: 'content',
        component: Content,
    },
  ],
})

export default router
