// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { } from '@fortawesome/fontawesome-free-solid'

import '~/assets/scss/index.scss'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueFlicking from "@egjs/vue-flicking"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, { router, head, isClient }) {

  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
  Vue.use(VueFlicking);

  config.autoAddCss = false;

  Vue.component('font-awesome', FontAwesomeIcon);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
