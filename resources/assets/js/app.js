
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import heatmap from 'vue-heatmapjs'
require('./bootstrap');

window.Vue = require('vue');
// import Vue from 'vue'
// import heatmap from 'vue-heatmapjs'
// require('vue-heatmapjs');

Vue.use(heatmap, {
    heatmapPreload: fetch('http://localhost:8000/api/index').then(response => response.json()),
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
