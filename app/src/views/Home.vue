<template>
  <div class="supercenter">

    <template v-for="dataUrl in dataUrls" :key="dataUrl">
      <router-link to="/walton">
        <h1>{{dataUrl.title}}</h1>
      </router-link>
      <QrcodeVue :size="qrSize" :value="dataUrl.host"></QrcodeVue>
      
    </template>
  </div>

</template>



<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { ref } from 'vue';



const qrSize = ref(300);
const HOST = "https://namecards.rakantee.dev#"
const dataUrls = ref([
  {title:'Walton ',
  host:`${HOST}/walton`}
])
</script>