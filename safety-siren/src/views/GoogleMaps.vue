<template>
   <div class = "row">
       <div class = "col-4 addAlert rounded">
           <Sidebar/>
       </div>
       <div class = "col-8 mapView">
           <div id = "map" style=""></div>
       </div>
   </div>
</template>

<style>
    .addAlert{
        font-family: 'Francois One', sans-serif;
        position: absolute;
        margin-left: 50px;
        justify-content: center;
        background: white;
    }
    
    .mapView{
        margin-left: 450px;
        position: relative;
    }
</style>

<script>
import Vue from "vue";
import Sidebar from "./Sidebar";
import axios from "../axios-orders";
// let annarbor = [42.281420, -83.748480];

 export default {
     name: "GoogleMaps",
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
   beforeMount() {
       this.getMarkers();
   },
   mounted() {
       this.$markers = [];
     this.$map = new google.maps.Map(document.getElementById('map'), {
       center: new google.maps.LatLng(this.latitude, this.longitude),
       zoom: this.zoom
     });

    this.addPreviousMarkers();
    
    google.maps.event.addListener(this.$map, 'click', function(event) {
        EventBus.$emit('map-clicked', {
               lat: event.latLng.lat(),
               long: event.latLng.lng()
           });
    alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
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
       getMarkers(){
           axios.get('/posts.json')
            .then((response) => {
                const keys = Object.keys(response.data);
                for (const key of keys) {
                    this.addPreviousMarkers(response.data[key].coordinates.latitude, response.data[key].coordinates.longitude);
                }
            });
       },
       addPreviousMarkers(latitude, longitude) {
           return new google.maps.Marker({
               position: new google.maps.LatLng(latitude, longitude),
               icon: null,
               map: this.$map,
               title: null,
           });
       },
       makeMarker(latitude, longitude){
           //const path = 'http://localhost:5000/storeCoordinates';
           axios.post('/posts.json', {
               coordinates: {
                    latitude: latitude,
                    longitude: longitude
               }
           })
           .then(response => {
               console.log('sent coordinates');
           })
           .catch(e => {
               this.errors.push(e)
           })

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
       },
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