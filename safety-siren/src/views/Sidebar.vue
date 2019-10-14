<template>
   <div>
       <h1>Add Alert</h1>
       <input type="number" step="0.0001" placeholder = "Latitude" class="form-control" v-model="latitude">
       <input type="number" step="0.0001" placeholder = "Longitude" class="form-control" v-model="longitude">
       <button @click="addMarker" class="btn btn-danger">Add marker</button>
       <!-- <button @click="clearMarkers" class="btn btn-default">Clear markers</button> -->
   </div>
</template>

<style>
    h1{
        margin-top: 15px;
    }
    .form-control{
        text-align: center;
        padding: 15px;
        margin: 20px auto;
        background: #DCDCDC;
    }
    .btn-danger{
        margin: 20px;
    }
    .btn-default{
        background: #DCDCDC;
    }
</style>

<script>
import GoogleMaps from "./GoogleMaps";
 export default {
   data(){
      return {
          latitude: EventBus.annarbor[0],
          longitude: EventBus.annarbor[1]
      };
   },
   methods: {
       addMarker(){
           EventBus.$emit('add-marker', {
               latitude: this.latitude,
               longitude: this.longitude
           });
       },
       clearMarkers(){
           EventBus.$emit('clear-markers');
       },
       created(){
           EventBus.$on('map-clicked', (data)=>{
               console.log(data.latitude);
               this.latitude = data.latitude;
               this.longitude = data.longitude;
       });
       }
       
    
   }
 }
</script>