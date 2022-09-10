<template>
    <div class="bg supercenter">
        <CardVue>
            <template #front>
                <div class="card-size front">
                    <h1>WALT<span>&#9679;</span>N DEVEL<span>&#9679;</span>PMENT</h1>

                    <div class="logo"></div>


                </div>
            </template>
            <template #back>
                <div class="card-size back">
                    <div class="logoback"></div>
                    <p>Walton Development is Sand Producer at Nakhon Pathom province. Later on, we had decided to expand
                        the business to Teah Company. Our interested domain are containerization technology and
                        technical consultant.</p>
                    <div class="contract-me">
                        <h1>Raknatee Chokluechai</h1>
                        <h2>Computer Engineer</h2>
                        <h2>raknatee@raknatee.dev</h2>
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

.card-size {
    border-radius: inherit;
    width: 100%;
    height: 100%;
}

.front {
    color: white;
    background-color: #005dff;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    @media (max-width: 1045px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 3fr;

        h1 {
            font-size: 1rem;

            span {
                font-size: 1.5rem;
            }
        }

    }

    overflow: hidden;

    span {
        font-size: 3.2rem;
        color: #ffc136;
    }

    .logo {
        height: 100%;
        width: 100%;
        background-image: url('/src/assets/walton/mini_logo.png');
        background-size: cover;
        background-position: left;
    }

}

.back {
    background-color: #005dff;
    display: grid;
    place-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 25vh 25vh;
    grid-template-areas: "logo text text text" "contract contract contract contract";
    color: white;
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

    .logoback {
        grid-area: logo;
        width: 80%;
        height: 80%;
        
        @media (max-width:$bp) {
            height: 30vh;
        }


        background-image: url("/src/assets/walton/full_logo.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    p {
        grid-area: text;
        padding: 0 1rem;
    }

    .contract-me{
        grid-area: contract;
    }



}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import CardVue from '../../components/Card.vue';
import iconUrl from "../../assets/walton/mini_logo.png"

document.title = "Walton Development"


onMounted(() => {
let link = document.getElementById("favicon") as HTMLLinkElement
link.href = iconUrl
})
</script>