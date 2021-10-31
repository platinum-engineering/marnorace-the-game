<template>
    <div class="block-play">
        <div class="block-play__info">
            <button :class="{'block-play__item--active': isActiveClass}" class="block-play__item" @click="onClick">
                <span>Battle Pot 10 TAUR</span>
                <b class="block-play__tooltip">-10 TAUR</b>
            </button>
            <button class="block-play__item">
                <span>Free AI Train 1/5 <IconLighting class="block-play__icon"/>a day</span>
            </button>
        </div>
        <button class="block-play__btn" @click="$router.push({name: 'game'})">play</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActiveClass: false
        }
    },
    methods: {
        onClick() {
            this.isActiveClass = true
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes trY {
    0% {
        top: -10px;
        opacity: 0;
    }
    30% {
        opacity: 1;
        top: -30px;
    }
    70% {
        opacity: 1;
        top: -30px;
    }
    100% {
        opacity: 0;
        top: -120px;
    }
}
.block-play {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    &__info {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    &__item {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 236px;
        height: 80px;
        font-weight: 700;
        border: 0;
        border-radius: 65px;
        outline: 0;
        background-image: url('/images/play-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        cursor: pointer;
        transition-duration: 3s;
        text-align: center;

        &--active {
            background-color: rgba(255, 120, 0, 0.5);
            box-shadow: 0 4px 20px 6px rgba(255, 120, 0, 0.8);
            .block-play__tooltip {
                animation-name: trY;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-timing-function: linear;
            }

            & + * {
                opacity: 0.6;
            }
        }

        &:hover {
            background-color: rgba(255, 120, 0, 0.5);
            box-shadow: 0 4px 20px 6px rgba(255, 120, 0, 0.8);
        }

        &:active {
            transform: translate(0em, 2px);
        }
    }

    span {
        position: relative;
        top: -2px;
        display: flex;
        align-items: center;
    }

    &__train {
        width: 100px;
        font-size: 14px;
    }

    &__icon {
        width: 1vw !important;
        margin: 0 3px;
    }

    &__btn {
        width: 496px;
        height: 92px;
        font-size: 45px;
        font-weight: 700;
        border: 0;
        background-color: transparent;
        background-image: url('/images/play-btn-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;
        transition-duration: 0.3s;
        text-transform: uppercase;

        &:hover {
            transform: scale(0.9);
        }

        &:active {
            transform: scale(0.9) translate(0em, 2px);
        }
    }
    &__tooltip {
        opacity: 0;
        top: -10px;
        position: absolute !important;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 23px;
        font-weight: 700;

    }
}
</style>
