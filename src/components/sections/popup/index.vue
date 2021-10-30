<template>
    <div class="section-popup">
        <div class="section-popup__content">
            <img :src="`/images/events/event-${activeEvent}.png`" alt="">
            <button v-if="isPopupClosedBtn" class="section-popup__btn" @click="$emit('click')"></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        activeEvent: {
            type: [Number, String],
            default: 1
        },
        isPopupClosedBtn: {
            type: Boolean,
            default: true
        },
    },
}
</script>

<style scoped lang="scss">
.section-popup {
    background-image: url('/images/bg-popup.svg');
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(32, 12, 113, 0.6);
    //&:before {
    //    content: '';
    //    width: 200%;
    //    height: 200%;
    //    background: inherit;
    //    position: absolute;
    //    left: -25px;  //giving minus -25px left position
    //    right: 0;
    //    top: -25px;   //giving minus -25px top position
    //    bottom: 0;
    //    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.7);
    //    filter: blur(128px);
    //}
    &__content {
        position: relative;
        width: 577px;
        height: 538px;
        img {
            width: 100%;
            height: 100%;
            max-width: 100%;
        }
    }
    &__btn {
        position: absolute;
        cursor: pointer;
        z-index: 2;
        right: 80px;
        top: 60px;
        width: 40px;
        height: 40px;
        background-image: url('/images/close.png');
        background-size: contain;
        background-position: center;
        border: 0;
        background-color: transparent;
        transition-duration: 0.3s;
        &:hover {
            transform: rotate(90deg);
        }
        &:active {
            transform: rotate(90deg) scale(0.8)
        }
    }

}
</style>
