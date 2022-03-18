import { createApp } from 'vue';

import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import BaseCard from '@/components/Base/BaseCard.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-card', BaseCard);

app.mount('#app');
