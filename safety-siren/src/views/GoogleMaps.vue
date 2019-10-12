<template>
   <div>
       <div id = "map" style=""></div>
   </div>
</template>

<style>
</style>

<script>
let sanfrancisco = [37.782685, -122.411364];
 export default {
     props: {
     'latitude': {
       type: Number,
       default() {
         return sanfrancisco[0]
       }
     },
     'longitude': {
       type: Number,
       default() {
         return sanfrancisco[1]
       }
     },
     'zoom': {
       type: Number,
       default() {
         return 14
       }
     },
   },
   mounted() {
     this.$map = new google.maps.Map(document.getElementById('map'), {
       center: new google.maps.LatLng(this.latitude, this.longitude),
       zoom: this.zoom
     });
   },
   data(){
       return {};
   }
 }
</script>

<style scoped>
    #map{
        margin: 0 auto;
        background: gray;
        width: 100vw;
        height: 500px;
    }
</style>