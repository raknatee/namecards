<template>
  <div class="supercenter">

    

      <router-link to="/walton">
        <img src="/src/assets/qr/walton.png" alt="">
      
      </router-link>
      <router-link to="/codekids">
        <img src="/src/assets/qr/qr-codekids.png" alt="">
      
      </router-link>
      <router-link to="/killswitch">
        <img src="/src/assets/qr/qr-ks.png" alt="">
      
      </router-link>
   
      <router-link to="/walton-namecard">walton-namecard</router-link>
      <router-link to="/personal-namecard">personal-namecard</router-link>
      <p></p>
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