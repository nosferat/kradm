import Vue from 'vue'
import VueRouter from 'vue-router'

import ImportTour from '../components/view/ImportTour.vue'
import PanoContent from '../components/view/PanoContent.vue'
import SceneEditor from '../components/view/SceneEditor.vue'
import XmlEditor from '../components/view/XmlEditor.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/import', component: ImportTour},
  {path: '/pano', component: PanoContent},
  {path: '/scene', component: SceneEditor},
  {path: '/xml', component: XmlEditor},
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default router
