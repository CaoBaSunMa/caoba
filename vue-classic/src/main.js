import '@/styles/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FeatherIcon from '@/hk-components/Icons/FeatherIcon.vue'
import simplebar from 'simplebar-vue'
import VueApexCharts from "vue3-apexcharts";
import VueSweetalert2 from 'vue-sweetalert2';
// import DateRangePicker from "vue3-daterange-picker";
import HkDateRangePicker from "@/hk-components/@hk-daterangepicker/HkDateRangePicker.vue";
import HkRating from './hk-components/@hk-rating/HkRating.vue';
import { tooltipDirective } from '@/util/tooltip'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2);

app.component('simplebar', simplebar);
app.component("apexchart", VueApexCharts);
app.component('feather-icon', FeatherIcon);
app.component('hk-rating', HkRating);                   
// app.component('DateRangePicker', DateRangePicker);
app.component('DateRangePicker', HkDateRangePicker);

app.directive('tooltip', tooltipDirective)

app.mount('#app')
