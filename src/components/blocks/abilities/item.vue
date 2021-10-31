<template>
    <article class="block-item">
        <img
            :src="`/images/abilities/ability-${img}.png`"
            alt="Ability"
            class="block-item__img"
        >
        <span v-if="tooltip" class="hover hover-bottom block-item_tooltip">
            {{ tooltip }}
        </span>
    </article>
</template>

<script>
export default {
    props: {
        img: {
            type: Number,
            default: 0
        },
        tooltip: {
            type: String,
            default: ''
        }
    },
}
</script>

<style lang="scss" scoped>
.block-item {
    position: relative;
    height: 0;
    padding-bottom: 22%;
    background-image: url('/images/ability-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &__img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30%;
        transform: translate(-50%, -50%);
    }

    &_tooltip {
        position: absolute;
        top: -120%;
        width: 120px;
        text-align: center;
        z-index: 1;
    }

    &:hover {
        .block-item_tooltip{
            opacity: 1;
        }
    }
}
</style>
