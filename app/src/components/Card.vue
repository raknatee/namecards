<template>
    <!-- <div class="card" :class="{'flip-ani':isAni}"> -->
    
    <div class="card" :class="{'card-disable':isFront===isBack}">

        <div :class="{'do_show':doFrontShow,'do_hide':doFrontHide}" v-if="isFront">
            <slot name="front"></slot>

        </div>

        <div :class="{'do_show':doBackShow,'do_hide':doBackHide}" v-if="isBack">
            <slot name="back"></slot>
        </div>
    <button @click="flip" :disabled="isFront===isBack"><p>Flip</p></button>

    </div>

</template>


<script lang="ts" setup>import { ref } from 'vue';

const isFront = ref(true)
const isBack = ref(false)

const doFrontShow = ref(false)
const doFrontHide = ref(false)

const doBackShow = ref(false)
const doBackHide = ref(false)


const flip = () => {

    if (isFront.value) {

        isBack.value = true
        doFrontHide.value = true
        doBackShow.value = true
        setTimeout(()=>{
            doFrontHide.value = false
            doBackShow.value = false
            isFront.value = false

        },1000)

    } else {
        isFront.value = true
        doFrontShow.value = true
        doBackHide.value = true
        setTimeout(()=>{
            doFrontShow.value = false
            doBackHide.value =false
            isBack.value = false
        },1000)
        

    }


}
</script>

<style lang="scss" scoped>
.card {
    margin-top: 15vh;
    height: 50vh;
    width: 80vw;
    border-radius: 2rem;
    box-shadow: 0 .5rem 1rem .5rem rgba(0, 0, 0, 0.5);
    // backface-visibility: hidden;
    position: relative;
    transition: all .5s;
    @media (max-width:700px){
        margin-top: 5vh;
        height: 70vh;
    }
    div {
        position: absolute;
        top:0;
        left:0;
        border-radius: inherit;
        width: 100%;
        height: 100%;
    }
    &-disable{
        box-shadow: none;
    }
    button{
        @media (max-width: 600px){
            font-size: .5rem;

        }
        position: absolute;
        left:50%;
        bottom: -5vh;
        padding: 1rem;
        border-radius: 1rem;
        transform: translateX(-50%) translateY(50%);
        font-size: 1rem;
        background-color: red;
        color: #fff;
        border: none;
        opacity: 70%;
        box-shadow: 0 .25rem .5rem .25rem rgba(0, 0, 0, 0.5);

        
    }
}

.do_show {
    backface-visibility: hidden;
    animation: ani_show 1s;
    // z-index: 1;
}

.do_hide {
    backface-visibility: hidden;
    animation: ani_hide 1s;
    // z-index: 0;
}

@keyframes ani_show {
    0% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(0deg);
    }
}

@keyframes ani_hide {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(-180deg);
    }
}
</style>