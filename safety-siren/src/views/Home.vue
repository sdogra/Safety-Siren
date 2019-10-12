<template>
  <div class="home">
    <HelloWorld msg="Welcome to SafetySiren, a crowd-sourced Safety Alert Web App!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
