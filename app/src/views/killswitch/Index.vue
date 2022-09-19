<template>
    <div class="bg supercenter">
        <CardVue>
            <template #front>
                <div class="card-size front">
                    

                    <div class="logo"></div>


                </div>
            </template>
            <template #back>
                <div class="card-size back">
                    <div class="logoback"></div>
                    <p>Users are free to unstake, withdraw Liquidity Position from their funds, sell their high-risk coins instantly in one click. In addition, and allow users to limit their losses or set profiting targets without monitoring.</p>
                    <div class="contract-me">
                        <h1>Raknatee Chokluechai</h1>
                        <h2>Junior Cryptographer</h2>
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
    display: grid;
    height: 100%;
    overflow: hidden;
    place-items: center;
    background-image: url('/src/assets/killswitch/bg.png');
    background-size: cover;
    background-position: center;

    


    .logo {
        height: inherit;
        width: 80%;
        background-image: url('/src/assets/killswitch/ks.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

}

.back {
    // background-image: url('/src/assets/killswitch/bg.png');
    // background-size: cover;
    // background-position: center;
    background-color: #243769;
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
        height: 5rem;
        background-image: url('/src/assets/killswitch/ks.svg');
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
// import iconUrl from "../../assets/walton/mini_logo.png"

document.title = "Walton Development"


// onMounted(() => {
// let link = document.getElementById("favicon") as HTMLLinkElement
// link.href = iconUrl
// })
</script>