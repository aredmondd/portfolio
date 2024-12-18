import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import OfficiallyView from '../views/OfficiallyView.vue'
import PhotographyIndexView from '../views/Unofficially/PhotographyIndexView.vue'
import ApertureShutterSpeed from '@/views/Unofficially/PhotographyViews/ApertureShutterSpeed.vue'
import ShadowLight from '@/views/Unofficially/PhotographyViews/ShadowLight.vue'
import StillLife from '@/views/Unofficially/PhotographyViews/StillLife.vue'
import PortraitsDiconnected from '@/views/Unofficially/PhotographyViews/PortraitsDiconnected.vue'
import SelfPortraits from '@/views/Unofficially/PhotographyViews/SelfPortraits.vue'
import NonProjectPhotos from '@/views/Unofficially/PhotographyViews/NonProjectPhotos.vue'
import UnofficiallyView from '@/views/UnofficiallyView.vue'
import Eighteen6000 from '@/views/Unofficially/PhotographyViews/Eighteen6000.vue'
import NotFound from '@/views/NotFound.vue'

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
        path: '/photography/186000',
        name: '186000',
        component: Eighteen6000
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
  ],
})

export default router