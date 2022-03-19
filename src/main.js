import { createApp } from 'vue';

import 'reset-css/reset.css';
import '@fancyapps/ui/dist/fancybox.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import BaseCard from '@/components/Base/BaseCard.vue';
import TheLoader from '@/components/UI/TheLoader.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('the-loader', TheLoader);

app.mount('#app');
