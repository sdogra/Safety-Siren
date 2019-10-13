<template>
   <div>
       <h1>Add Alert</h1>
       <input type="number" step="0.0001" placeholder = "Latitude" class="form-control" v-model="latitude">
       <input type="number" step="0.0001" placeholder = "Longitude" class="form-control" v-model="longitude">
       <button @click="addMarker" class="btn btn-danger">Add marker</button>
       <button @click="clearMarkers" class="btn btn-default">Clear markers</button>
   </div>
</template>

<style>
    .form-control{
        text-align: center;
        padding: 20px;
        margin: 10px;
    }
    .btn-danger{
        margin: 20px;
    }
</style>

<script>
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
       }
   }
 }
</script>