<template>
    <div class="bg supercenter">
        <CardVue>
            <template #front>
                <div class="front">
                    <!-- <div class="logo"></div> -->
                    <img src="/src/assets/codekids/codekids.jpeg" alt="">
                </div>
            </template>
            <template #back>
                <div class="back">
                    <img src="/src/assets/codekids/codekids.jpeg" alt="">
                    <p>CodeKids is all media and service about Coding which is according to our concept.<br>"Learning with Coding"<br>We believe that every learning can be able to code.</p>
                    <div class="contract-me">
                        <h1>Raknatee Chokluechai</h1>
                        <h2>HCI Engineer</h2>
                        <h2>raknatee@codekids.education</h2>
                    </div>
                </div>
            </template>
        </CardVue>
    </div>
</template>

<style lang="scss" scoped>
.bg {
    background-color: #fff;

}



.front {

    overflow: hidden;
    border-radius: inherit;
    height: 100%;
    width: 100%;
    background-color: #F9DF41;
    display: grid;
    place-items: center;
    img{
        border: #fff 1rem solid;
        border-radius: 1.5rem;
        width: 30rem;
        @media (max-width: 1400px){
            width: 20rem;
        }
        @media (max-width: 500px){
            width: 80%;
        }
 
    }


}

.back {
    border-radius: inherit;
    height: 100%;
    background-color: #F9DF41;
    display: grid;
    place-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 25vh 25vh;
    grid-template-areas: "logo text text text" "contract contract contract contract";
    color: rgb(34, 34, 34);
    $bp: 700px;

    @media (max-width:$bp) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;


        h1 {

            font-size: 1rem;
        }

        h2 {
            font-size: 1rem;
        }
    }

    img {
        grid-area: logo;
        width: auto;
        height: 80%;

        @media (max-width:$bp) {
            height: 30vh;
        }

        border: #fff .5rem solid;
        border-radius: 1rem;
        background-image: url();
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    p {
        grid-area: text;
        padding: 0 1rem;
    }

    .contract-me {
        grid-area: contract;
    }



}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import CardVue from '../../components/Card.vue';

document.title = "CodeKids"
</script>