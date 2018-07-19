
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import heatmap from 'vue-heatmapjs'
import { Subject } from 'rxjs/Subject';
require('./bootstrap');

window.Vue = require('vue');
// import Vue from 'vue'
// import heatmap from 'vue-heatmapjs'
// require('vue-heatmapjs');
// const stream = new Subject();
export const pauser = new Subject();

Vue.config.productionTip = false;
Vue.use(heatmap, {
   /* stream,
    heatmapPreload: fetch('http://localhost:8000/api/index').then(response => response.json()).then(text => {
        console.log(text);
    })*/
    // heatmapPreload: [{ x: 10, y: 100, value: 100 },{ x: 100, y: 200, value: 100 }],
    heatmapPreload: fetch('http://localhost:8000/api/index').then(response => response.json()),
    pauser,
});
pauser.next(true);
console.log(pauser);
// stream.subscribe(console.log);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    methods: {
        move ($event) {
            $event.stopPropagation();
            console.log($event)
        }
    }
});
