import {createApp} from 'vue'
import Toast, {POSITION} from 'vue-toastification'
import App from './App.vue'
/* fontawesome */
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faPenToSquare,
  faTrash,
  faMessage,
  faBell,
  faCalendarDay,
  faCircleExclamation,
  faClipboardList,
  faListCheck,
  faClockRotateLeft,
  faUserCheck,
  faUserTie,
  faUserGear,
  faUsers,
  faClock,
  faPersonCircleQuestion,
  faIdCard,
  faTriangleExclamation,
  faCircleInfo,
  faEye,
  faUniversity,
  faPlus,
  faBriefcase,
  faGraduationCap,
  faEarthAmerica,
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import router from './router'
// @ts-ignore
import VueTheMask from 'vue-the-mask'
// Plugins
// import { registerPlugins } from '@/plugins'
import 'animate.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'vue-toastification/dist/index.css'

library.add(
  faUser,
  faPenToSquare,
  faTrash,
  faMessage,
  faBell,
  faCalendarDay,
  faCircleExclamation,
  faClipboardList,
  faListCheck,
  faClockRotateLeft,
  faUserCheck,
  faUserTie,
  faUserGear,
  faUsers,
  faClock,
  faPersonCircleQuestion,
  faIdCard,
  faTriangleExclamation,
  faCircleInfo,
  faEye,
  faUniversity,
  faPlus,
  faBriefcase,
  faGraduationCap,
  faEarthAmerica,
  faCircleInfo,
  faCircleUser
);

const app = createApp(App)
app.use(router)
app.use(Toast, {position: POSITION.BOTTOM_RIGHT})
app.use(VueTheMask)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
