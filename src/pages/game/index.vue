<template>
    <div :class="classes" class="page-game page-game--step-1">
        <div class="page-game__box">
            <div class="page-game__map">
                <span class="page-game__info">Player {{ tern }} Turn</span>

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

                <UiPlayerCard
                    class="page-game__player page-game__player--1"
                    img="1" @click="onClickPlayer(1)"
                    :class="{'page-game__player--plus-life': firstPart.firstPlayerPlusLife}"
                />
                <UiPlayerCard class="page-game__player page-game__player--2" img="2" @click="onClickPlayer(2)"/>
                <UiPlayerCard
                    :class="{'page-game__player--minus-life': playerThreeMinusLive}"
                    class="page-game__player page-game__player--3"
                    img="3"
                    @click="onClickPlayer(3)"
                />

                <span class="page-game__coin page-game__coin--1"><span></span></span>
            </div>
        </div>

        <BlockPlayerBar
            :is-accept-active-count="acceptActiveCount"
            class="page-game__player-options"
            :is-accept-active="isAcceptActive"
            :is-skills-disabled="isSkillsDisabled"
            :is-opponent-turn="firstPart.isSecondPlayerActive"
            @isAcceptDisabled="isAcceptActive = false"
            @nextPlayerStart="firstPart.isSecondPlayerActive = true"
        />

        <transition name="fade">
            <SectionPopup
                class="page-game__popup"
                :img="activeEvent"
                :is-popup-closed-btn="isPopupClosedBtn"
                v-if="isPopupActive"
                @click="isPopupActive = false"
            />
        </transition>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import BlockPlayerBar from '@/components/blocks/player-bar'
import SectionPopup from '@/components/sections/popup'

export default {
    components: {
        SectionPopup,
        BlockPlayerBar
    },
    data() {
        return {
            el: '',
            tern: 1,
            acceptActiveCount: 0,
            isAcceptActive: false,
            isSkillsDisabled: false,
            firstPart: {
                firstPlayerPlusLife: false,
                isFirstPlayerActive: false,
                isSecondPlayerActive: false,
                isThirdPlayerActive: false,
            },
            isPopupActive: false,
            isPopupClosedBtn: true,
            activeEvent: 1,
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
            setTimeout(() => {
                this.isPopupActive = true
            }, 3000)
        }
    },
    watch: {
        isFirstCellActive() {
            console.log(89)
        },
        isPopupActive(val) {
            if (!val && this.isActiveStep === 1) {
                // this.el.classList.add('page-game-3')
                this.isAcceptActive = true
            }
        },
        isAcceptActive() {
            this.acceptActiveCount++
        },
        acceptActiveCount(val) {
            if (val === 2) {
               setTimeout(() => {
                   this.firstPart.firstPlayerPlusLife = true
                   this.isSkillsDisabled = true
                 }, 500);
               setTimeout(() => {
                   this.isSkillsDisabled = true
                 }, 1000);
            }
        },
        'firstPart.isSecondPlayerActive'() {
            this.el.classList.add('page-game--3')
            this.tern = 2
            setTimeout(() => {
                  this.isPopupActive = true
                  this.activeEvent = 2
                    this.isPopupClosedBtn = false
              }, 7000);
            setTimeout(() => {
                this.isPopupActive = false
                // const i = setInterval(() => {
                //     if (this.coins < count) {
                //         this.coins++
                //     } else if (this.coins > count) {
                //         this.coins--
                //     } else {
                //         clearInterval(i)
                //     }
                // }, 3)


                this.firstPart.isThirdPlayerActive = true
              }, 12000);
        },
        'firstPart.isThirdPlayerActive'() {
            this.tern = 3
            this.el.classList.add('page-game--4')
            setTimeout(() => {

              }, 3000);
        }
    },
    mounted() {
        this.el = document.querySelector('.page-game')
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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 240px;
        height: 140px;
        font-size: 24px;
        color: #ffffff;
        font-weight: 700;
        background-image: url('/images/info-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
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
        top: -100%;
        z-index: 5;
        cursor: pointer;
        transition-duration: 3s;
        animation-duration: 0.3s;
        animation-delay: 4s;
        animation-fill-mode: forwards;

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
        position: absolute;
        z-index: 4;
        display: inline-flex;
        opacity: 0;
        transition-duration: 0.3s;
        animation-name: op;
        animation-duration: 0.3s;
        animation-delay: 5s;
        pointer-events: none;
        animation-fill-mode: forwards;

        &--1 {
            top: 45%;
            left: 30.8%;

            z-index: 6;

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
        position: absolute;
        top: 51%;
        left: 33%;
        z-index: 5;
        display: flex;
        width: 15px;
        height: 15px;
        transform: rotate(45deg);

        span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 0;
            height: 0;
            box-shadow: 0 0 13px 18px #e83d81;
        }

        &--1 {
            top: 51%;
            left: 33%;
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

    &__popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
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
            transform: translate(123%, -69%);
        }

        //.page-game__player--2 {
        //    transition-delay: 6s;
        //    transform: translate(126%, -72%);
        //}

        .page-game__coin--1 {
            transition-delay: 2s;
            transform: scale(0);
        }

    }
    &--3 {
        .page-game__player--1 {
            opacity: 0.2;
            filter: grayscale(100%);

        }

        .page-game__player--2 {
            transition-property: filter, transform;
            filter: grayscale(0);
            transition-delay: 0s, 4s;
            transform: translate(84%, -43%);
        }
    }
    &--4 {
        //.page-game__player--1 {
        //    opacity: 0.2;
        //    filter: grayscale(100%);
        //
        //}

        .page-game__player--2 {
            filter: grayscale(100%);
        }
        .page-game__player--3 {
            transition-property: filter, transform;
            filter: grayscale(0);
            transition-delay: 0s, 4s;
            transition-duration: 3s;
            transform: translate(111%, -56%);
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

