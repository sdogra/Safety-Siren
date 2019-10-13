<template>
   <div class = "row">
       <div class = "col-4 addAlert">
           <Sidebar/>
       </div>
       <div class = "col-8 mapView">
           <div id = "map" style=""></div>
       </div>
   </div>
</template>

<style>

    .addAlert{
        position: absolute;
        margin-left: 50px;
        justify-content: center;
    }
    
    .mapView{
        margin-left: 450px;
        position: relative;
    }
</style>

<script>
import Vue from "vue";
import Sidebar from "./Sidebar";
// let annarbor = [42.281420, -83.748480];

 export default {
     props: {
     'latitude': {
       type: Number,
       default() {
         return EventBus.annarbor[0];
       }
     },
     'longitude': {
       type: Number,
       default() {
         return EventBus.annarbor[1];
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
       this.$markers = [];
     this.$map = new google.maps.Map(document.getElementById('map'), {
       center: new google.maps.LatLng(this.latitude, this.longitude),
       zoom: this.zoom
     });
     Vue.nextTick().then(()=>{
         this.clearMarkers();
     });
   },
   created(){
       EventBus.$on('clear-markers', ()=>{
           this.clearMarkers();
           this.$markers = [];
       });
       EventBus.$on('add-marker', (data)=>{
           let marker = this.makeMarker(data.latitude, data.longitude);
           this.$markers.push(marker);
       });
   },
   data(){
       return {};
   },
   methods: {
       makeMarker(latitude, longitude){
           return new google.maps.Marker({
               position: new google.maps.LatLng(latitude, longitude),
               icon: null,
               map: this.$map,
               title: null,
           });
       },
       clearMarkers(){
           for (let i = 0; i < this.$markers.length; i++){
               this.$markers[i].setMap(null);
           }
       }
   }
 }
 
</script>

<style scoped>
    #map{
        margin-top: 50px;
        margin: 0 auto;
        background: gray;
        width: 750px;
        height: 500px;
    }


</style>