<template>
   <div>
       <div id = "map" style=""></div>
   </div>
</template>

<style>
</style>

<script>
let annarbor = [42.281420, -83.748480];
 export default {
     props: {
     'latitude': {
       type: Number,
       default() {
         return annarbor[0]
       }
     },
     'longitude': {
       type: Number,
       default() {
         return annarbor[1]
       }
     },
     'zoom': {
       type: Number,
       default() {
         return 16
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