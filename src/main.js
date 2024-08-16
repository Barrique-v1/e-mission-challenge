import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Import the FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the icons to the library
library.add(faBars);

// Create the Vue app
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');
