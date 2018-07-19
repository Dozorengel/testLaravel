<template>
    <div id="vue" v-heatmap="show"></div>
</template>

<style>
    #vue {
        pointer-events: none;
        height: 1000px;
        background-image: url('/img/screencapture.png');
        background-repeat: no-repeat
    }
</style>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                show: true
            }
        }
    }
</script>
