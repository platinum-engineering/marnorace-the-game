<template>
    <div class="page-game page-game--step-1" :class="classes">
        <div class="page-game__box">
            <div class="page-game__map">
                <span class="page-game__info">Player 1 Turn</span>

                <span v-if="isFirstCellActive" class="page-game__cell page-game__cell--1" @click="onFirstStep"><span></span></span>

                <span class="page-game__map-img page-game__map-img-0"></span>
                <span class="page-game__map-img page-game__map-img-1"></span>
                <span class="page-game__map-img page-game__map-img-2"></span>
                <span class="page-game__map-img page-game__map-img-3"></span>
                <span class="page-game__map-img page-game__map-img-4"></span>
                <span class="page-game__map-img page-game__map-img-5"></span>
                <span class="page-game__map-img page-game__map-img-6"></span>
                <span class="page-game__map-img page-game__map-img-7"></span>

                <UiSpaceship class="page-game__map-spaceship page-game__map-spaceship--1"/>
                <UiSpaceship class="page-game__map-spaceship page-game__map-spaceship--2"/>
                <UiSpaceship class="page-game__map-spaceship page-game__map-spaceship--3"/>

                <UiPlayerCard class="page-game__player page-game__player--1" img="1" @click="onClickPlayer(1)"/>
                <UiPlayerCard class="page-game__player page-game__player--2" img="2" @click="onClickPlayer(2)"/>
                <UiPlayerCard
                    class="page-game__player page-game__player--3"
                    img="3"
                    @click="onClickPlayer(3)"
                    :class="{'page-game__player--minus-life': playerThreeMinusLive}"
                />

                <span class="page-game__coin page-game__coin--1"><span></span></span>
            </div>
        </div>
        <BlockPlayerBar class="page-game__player-options"/>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import BlockPlayerBar from '@/components/blocks/player-bar'

export default {
    components: {
        BlockPlayerBar
    },
    data() {
        return {
            isActiveStep: 1,
            playerThreeMinusLive: false,
            firstStep: false
        }
    },
    computed: {
        ...mapState(['isFirstCellActive']),
        classes() {
            return {
                [`page-game--player-one-step-one`]: this.firstStep,
            }
        },
    },
    methods: {
        ...mapMutations(['SET_FIRST_CELL_ACTIVE']),
        onClickPlayer(val) {
            if (val === 3 && this.isActiveStep === 1) {
                this.playerThreeMinusLive = true
            }
        },
        onFirstStep() {
            this.firstStep = true
            this.SET_FIRST_CELL_ACTIVE(false)
        }
    },
    watch: {
        isFirstCellActive() {

            console.log(89)
        }
    }
}
</script>
<style lang="scss" scoped>

.page-game {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    background-color: #200C71;
    overflow: hidden;

    &__box {
        width: inherit;
        height: 100%;
        background-color: #200361;
        background-image: url('/images/game/map0.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    &__info {
        position: absolute;
        right: 60px;
        left: 60px;
        width: 240px;
        height: 140px;
        display: inline-flex;
        background-image: url('/images/info-bg.png');
        background-size: contain;
        background-repeat: no-repeat;
        color: #ffffff;
        align-items: center;
        justify-content: center;
        background-position: center;
        font-weight: 700;
        font-size: 24px;
    }

    &__main-map {
        display: block;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        opacity: 0;
        object-fit: contain;
    }

    &__map {
        position: relative;
        width: 100%;
        height: 100%;

        &-img {
            position: absolute;
            //top: -100%;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            animation-name: trY;
            animation-duration: 1s;
            animation-fill-mode: forwards;

            &-1 {
                top: 0;
                //opacity: 0;
                background-image: url('/images/game/map-4.png');
                animation-name: op;
            }

            &-2 {
                z-index: 2;
                background-image: url('/images/game/map-2.png');
                animation-delay: 1s;
            }

            &-4 {
                background-image: url('/images/game/map-1.png');
                animation-delay: 2s;
            }

            &-5 {
                z-index: 3;
                background-image: url('/images/game/map-5.png');
                animation-delay: 3s;
            }

            &-6 {
                top: 0;
                z-index: 4;
                opacity: 0;
                background-image: url('/images/game/map-6.png');
                animation-name: op;
                animation-delay: 4s;
            }

            &-7 {
                top: -500px;
                right: -500px;
                left: auto;
                z-index: 4;
                width: 300px;
                height: 300px;
                background-image: url('/images/game/planet.png');
                animation-name: trX;
                animation-delay: 4s;
            }

        }
    }

    &__map-spaceship {
        position: absolute;
        top: -100%;
        z-index: 4;
        animation-duration: 0.3s;
        animation-delay: 4s;
        animation-fill-mode: forwards;

        &--1 {
            right: 36.3%;
            animation-name: ship1;
        }

        &--2 {
            right: 27.3%;
            animation-name: ship2;
        }

        &--3 {
            right: 15.3%;
            animation-name: ship3;
        }
    }

    &__player {
        position: absolute;
        cursor: pointer;
        top: -100%;
        z-index: 5;
        animation-duration: 0.3s;
        animation-delay: 4s;
        animation-fill-mode: forwards;
        transition-duration: 3s;

        &--1 {
            left: 15.8%;
            animation-name: player-1;
            animation-delay: 4.2s;
        }

        &--2 {
            left: 14.4%;
            animation-name: player-2;
            animation-delay: 4.4s;
        }

        &--3 {
            left: 13.4%;
            animation-name: player-3;
            animation-delay: 4.6s;
        }

        &--minus-life {
            top: 68.4%;
            animation: vibrate-1 0.3s linear 3 both;
        }
    }

    &__coin {
        pointer-events: none;
        position: absolute;
        z-index: 4;
        display: inline-flex;
        opacity: 0;
        animation-name: op;
        animation-duration: 0.3s;
        animation-delay: 5s;
        animation-fill-mode: forwards;
        transition-duration: 0.3s;

        &--1 {
            top: 45%;
            z-index: 6;

            left: 30.8%;
            span {
                width: 60px;
                height: 60px;
                background-image: url('/images/coin.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                animation: levitate 1.2s alternate ease-in-out infinite;
            }

        }
    }
    &__cell {
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        left: 33%;
        top: 51%;
        z-index: 5;
        display: flex;
        position: absolute;
        span {
            align-items: center;
            justify-content: center;
            width: 0;
            height: 0;
            display: inline-flex;
            box-shadow: 0 0 13px 18px #e83d81;
        }
        &--1 {
            left: 33%;
            top: 51%;
        }
    }

    &__player-options {
        position: absolute;
        bottom: -300px;
        z-index: 10;
        flex-shrink: 0;
        width: 100%;
        height: 80px;
        animation-name: optY;
        animation-duration: 1s;
        //animation-delay: 1s;
        animation-fill-mode: forwards;
    }
    &--step-1 {
        .page-game__player--2 {
            filter: grayscale(100%);
        }
        .page-game__player--3 {
            filter: grayscale(100%);
        }
    }
    &--player-one-step-one {
        .page-game__player--1 {
            transform: translate(126%, -72%);
        }
        .page-game__coin--1 {
            transform: scale(0);
            transition-delay: 2s;
        }

    }
}
</style>
<style lang="scss">
@keyframes levitate {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0, -20px);
    }
}

@keyframes player-1 {
    from {
        top: -100%;
        opacity: 0;
    }
    to {
        top: 47.4%;
        opacity: 1;
    }
}

@keyframes player-2 {
    from {
        top: -100%;
        opacity: 0;
    }
    to {
        top: 58%;
        opacity: 1;
    }
}

@keyframes player-3 {
    from {
        top: -100%;
        opacity: 0;
    }
    to {
        top: 68.4%;
        opacity: 1;
    }
}

@keyframes ship1 {
    from {
        top: -100%;
        opacity: 0;
    }
    to {
        top: 1.4%;
        opacity: 1;
    }
}

@keyframes ship2 {
    from {
        top: -100%;
        opacity: 0;
    }
    to {
        top: 13.4%;
        opacity: 1;
    }
}

@keyframes ship3 {
    from {
        top: -100%;
        opacity: 0;
    }
    to {
        top: 26.4%;
        opacity: 1;
    }
}

@keyframes trY {
    from {
        //top: -100%;
        opacity: 0;
    }
    to {
        //top: 0;
        opacity: 1;
    }
}

@keyframes trX {
    from {
        opacity: 0;
        top: -500px;
        right: -500px;
    }
    to {
        opacity: 1;
        top: -100px;
        right: 80px;
    }
}

@keyframes optY {
    from {
        opacity: 0;
        bottom: -300px
    }
    to {
        opacity: 1;
        bottom: 0
    }
}

@keyframes op {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes vibrate-1 {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
}
</style>

