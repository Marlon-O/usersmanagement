import './bootstrap';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import router from './router'
import UsersIndex from './components/users/UsersIndex'

window.Alpine = Alpine;

Alpine.start();

createApp({
    components: {
        UsersIndex,
    }
}).use(router).mount('#app');