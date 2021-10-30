<template>
    <div class="block-player-bar">
        <div class="block-player-lives">
            <IconHeart class="block-player-bar__heart"/>
        </div>
        <div class="block-player-bar__player">
            <img alt="" src="/images/heroes/1.png">
        </div>
        <div class="block-player-bar__coin">
            <UiCoin>200</UiCoin>
        </div>
        <div class="block-player-bar__abilities"
             :class="{[`block-player-bar__abilities--disabled`]: isSkillsDisabled}"
        >
            <span :class="{'block-player-bar__ability--disabled': isAbilityOneDisabled}"
                  class="block-player-bar__ability block-player-bar__ability--1">
                <span>{{ ability1 }}</span>
            </span>
            <span
                :class="{'block-player-bar__ability--disabled': isAbilityTwoDisabled}"
                class="block-player-bar__ability block-player-bar__ability--2"
            >
                <span> {{ ability2 }} </span>
            </span>
            <span
                :class="{'block-player-bar__ability--disabled': isAbilityThreeDisabled}"
                class="block-player-bar__ability block-player-bar__ability--3"
                @click="onClick(3)"
            >
                <span>{{ ability3 }}</span>
            </span>
        </div>

        <div class="block-player-bar__emotions">
            <img alt="" src="/images/emotion.png">
        </div>
        <div class="block-player-bar__dice" :class="{'block-player-bar__dice--roll': isRoll}">
            <div v-if="diceCount === 1"></div>
            <span v-else>{{ diceCount }}</span>
        </div>
        <button class="block-player-bar__btn" @click="onRoll">
            <img alt="" src="/images/play-btn.png">
            <span>{{ text }}</span>
        </button>

        <div class="block-player-bar__opponent-turn" :class="{['block-player-bar__opponent-turn--active']: isSkillsDisabled}">Your opponent turn</div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    props: {
        isAcceptActive: {
            type: Boolean,
            default: false
        },
        isSkillsDisabled: {
            type: Boolean,
            default: false
        },
        isOpponentTurn: {
            type: Boolean,
            default: false
        },
        isAcceptActiveCount: {
            type: [Number, String],
            default: 0
        },
    },
    data() {
        return {
            isBtnTextCount: 0,
            text: 'roll',
            isOp: false,
            ability1: 1,
            ability2: 1,
            ability3: 2,
            isAbilityOneDisabled: false,
            isAbilityTwoDisabled: false,
            isAbilityThreeDisabled: false,
            isRoll: false,
            diceCount: 1
        }
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        ...mapState(['activeStep'])
    },

    methods: {
        ...mapMutations(['SET_FIRST_CELL_ACTIVE']),
        onRoll() {
            this.isBtnTextCount++

            if (this.isBtnTextCount === 2) {
                this.text = 'END TURN'
                console.log(77)
                this.$emit('nextPlayerStart')
            }

            if (this.isAcceptActive) {
                this.$emit('isAcceptDisabled')
                return
            }
            if (this.isSkillsDisabled) {
                this.$emit('nextPlayerStart')
                return
            }
            if (this.activeStep === 1) {
                this.isRoll = true
                setTimeout(() => {
                    this.diceCount = 5
                    this.isRoll = false
                    this.SET_FIRST_CELL_ACTIVE()
                  }, 2000);
            }
        },
        onClick(val) {
            if (val === 3) {
                this.ability3--
                this.isAbilityThreeDisabled = true
            }
        }
    },
    watch: {
        isAcceptActive(val) {
            if (val) {
                this.text = 'accept'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-2-enter-active, .fade-2-leave-active {
    transition: opacity 1s;
}
.fade-2-enter, .fade-2-leave-to {
    opacity: 0;
}
.block-player-bar {

    position: relative;
    display: flex;
    align-items: center;
    //background-color: red;
    background-image: linear-gradient(360deg, #211074 0%, rgba(33, 16, 116, 0) 103.75%);

    .block-player-lives {
        margin-left: 30px;

        .block-player-bar__heart {
            width: 40px;
        }
    }

    &__player {
        position: absolute;
        bottom: 0;
        left: 60px;
        display: inline-flex;
        max-width: 200px;

        img {
            max-width: 100%;
            object-fit: cover;
        }
    }

    &__coin {
        margin-left: 200px;

        & ::v-deep img {
            width: 30px;
            height: 30px;
        }

        & ::v-deep span {
            font-size: 22px;
        }
    }

    &__abilities {
        display: inline-flex;
        margin-left: 100px;
        gap: 80px;
        &--disabled {
            pointer-events: none;
            filter: grayscale(100%);
        }

    }

    &__ability {
        position: relative;
        width: 60px;
        height: 60px;
        font-size: 700px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        cursor: pointer;
        transition-duration: 0.3s;
        transition-property: transform;

        &:hover {
            transform: scale(0.8)
        }

        &:active {
            opacity: 0.8;
        }

        span {
            position: absolute;
            right: -10px;
            bottom: -10px;
            font-size: 36px;
            color: #C2FF00;
        }

        &--1 {
            background-image: url('/images/abilities/ab-1.svg');
        }

        &--2 {
            background-image: url('/images/abilities/ab-2.svg');
        }

        &--3 {
            background-image: url('/images/abilities/ab-3.svg');

        }

        &--disabled {
            opacity: 0.8;
            transform: scale(0.8);
            filter: grayscale(100%);
        }
    }

    .block-player-bar__emotions {
        position: relative;
        width: 80px;
        height: 80px;
        margin-left: 200px;

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            max-width: 100%;
            transform: translate(-50%, -50%);
        }
    }

    .block-player-bar__dice {
        position: relative;
        width: 54px;
        height: 54px;
        margin-left: auto;
        background-image: url('/images/dice.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/images/marno.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
         span {
             font-size: 30px;
             color: #ffffff;
             font-weight: 700;
         }
        &--roll {
            filter: blur(6px);
            animation: vibrate-1 0.3s linear infinite both;
        }
    }

    &__btn {
        text-transform: uppercase;
        position: relative;
        width: 200px;
        height: 60px;
        margin-right: 30px;
        margin-left: 60px;
        border: 0;
        background-color: transparent;
        overflow-y: hidden;
        cursor: pointer;
        transition-duration: 0.3s;

        &:hover {
            transform: scale(0.95);
        }

        &:active {
            transform: scale(0.95) translate(0em, 2px);
        }

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            max-width: 100%;
            transform: translate(-50%, -50%);
            object-fit: contain;
        }
        span {
            font-family: $family--default;
            padding-top: 4px;
            font-size: 20px;
            position: relative;
            top: 3px;
            font-weight: 700;
            z-index: 3;
        }
    }

    &__opponent-turn {
        width: 100%;
        height: 100%;
        left: 0;
        bottom: -100%;
        color: #ffffff;
        display: flex;
        position: absolute;
        letter-spacing: 2px;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        transition-duration: 0.3s;
        opacity: 0;
        background-color: rgba(32, 12, 113, 0.81);
        &--active {
            bottom: 0;
            opacity: 1;
        }
    }

}
</style>
