<template>
  <div class="supercenter">

    <!-- <template v-for="dataUrl in dataUrls" :key="dataUrl"> -->
      <router-link to="/walton">
        <img src="/src/assets/qr/walton.png" alt="">
      
      </router-link>
      <router-link to="/codekids">
        <img src="/src/assets/qr/qr-codekids.png" alt="">
      
      </router-link>
      <router-link to="/killswitch">
        <img src="/src/assets/qr/qr-ks.png" alt="">
      
      </router-link>
    <!-- </template> -->
  </div>

</template>


<style lang="scss">
  img{
    width: 95vw;
  }
</style>
<script setup lang="ts">


// QRCode from https://www.qrcode-monkey.com/

// import QrcodeVue from 'qrcode.vue'
import { ref } from 'vue';



// const qrSize = ref(300);
// const HOST = "https://namecards.rakantee.dev#"
// const dataUrls = ref([
//   {title:'Walton ',
//   host:`${HOST}/walton`}
// ])
</script>