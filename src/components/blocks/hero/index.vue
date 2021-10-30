<template>
    <section class="section-hero">
        <div class="section-hero__lives">
            <UiLives :items="activeHero.lives" vertical/>
        </div>

        <div class="section-hero__content">
            <div class="section-hero__card">
                <div class="section-hero__coins-box">
                    <UiCoin class="section-hero__coins">{{ coins }}</UiCoin>
                    <span class="hover hover-top section-hero__coins-tooltip">
                        You start every match with 100 Gold. Spend them in bazzar on the map
                    </span>
                </div>
                <div class="section-hero__abilities">
                    <div class="section-hero__ability-box">
                        <UiPassiveAbility class="section-hero__ability"/>
                        <span class="hover hover-left section-hero__ability-tooltip">
                            You are always start first
                        </span>
                    </div>
                    <div class="section-hero__ability-box">
                        <UiPassiveAbility class="section-hero__ability" icon="us"/>
                        <span class="hover hover-left section-hero__ability-tooltip">
                            No penalty on Lightning Ground
                        </span>
                    </div>
                </div>

                <transition mode="out-in" name="bounce">
                    <component
                        :is="`div`"
                        :key="activeItem"
                        class="section-hero__avatar"
                    >
                        <img
                            :src="`/images/heroes/${activeItem}.png`"
                            alt="`Hero 1"
                            class="section-hero__avatar-img"
                        >
                    </component>
                </transition>
                <div class="section-hero__info">
                    <transition mode="out-in" name="fade">
                        <component :is="`div`" :key="activeItem" class="section-hero__info-box">
                            <span class="section-hero__name">{{ activeHero.name }}</span>

                            <span class="section-hero__desc">{{ activeHero.desc }}</span>
                            <span class="section-hero__class">
                                <span>Class:</span>
                                <span>{{ activeHero.class }}</span>
                            </span>
                        </component>
                    </transition>
                </div>
            </div>
        </div>

        <div class="section-hero__arrows">
            <IconArrowLeft class="section-hero__arrow" @click="onPrev"/>
            <IconArrowRight class="section-hero__arrow" @click="onNext"/>
        </div>
    </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    props: {
        isPickUpCoins: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            activeItem: 1,
            coins: 200,
        }
    },
    computed: {
        ...mapState('heroes', ['items', 'activeHero']),
    },
    methods: {
        ...mapMutations('heroes', ['SET_ACTIVE_HERO']),
        onPrev() {
            this.activeItem !== 1 ? this.activeItem-- : this.activeItem = 3
        },
        onNext() {
            this.activeItem !== 3 ? this.activeItem++ : this.activeItem = 1
        }
    },
    watch: {
        activeItem(val) {
            this.SET_ACTIVE_HERO(this.items[this.activeItem -1])

            const changeCoins = count => {
                if (this.coins !== count) {
                    const i = setInterval(() => {
                        if (this.coins < count) {
                            this.coins++
                        } else if (this.coins > count) {
                            this.coins--
                        } else {
                            clearInterval(i)
                        }
                    }, 3)
                }
            }
            if (val === 1) {
                changeCoins(200)
            }
            if (val === 2) {
                changeCoins(50)
            }
            if (val === 3) {
                changeCoins(150)
            }

        },
    },
    created() {
        this.SET_ACTIVE_HERO(this.items[this.activeItem -1])
    }
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.10);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.section-hero {
    display: flex;
    flex-wrap: wrap;
    outline-offset: -2px;

    &__lives {
        display: inline-flex;
        align-items: flex-start;
        width: 4.7vw;
        margin-right: 3vw;
    }

    &__content {
        display: flex;
        flex-direction: column;
    }

    &__card {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 31.4vw;
        background-image: url('/images/hero-card-bg.png');
        background-repeat: no-repeat;
        background-position: center top;
        background-size: contain;

    }

    &__abilities {
        position: absolute;
        right: -100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-left: 30px;
        gap: 10px;
    }

    &__ability-box {

    }

    &__ability-tooltip {
        left: 90%;
        z-index: 2;
        width: 200px;
        text-align: center;
    }

    &__ability {
        width: 70px;
        height: 70px;

        &:hover {
            & + * {
                left: 116%;
                opacity: 1;
            }
        }
    }

    &__coins-box {
        position: absolute;
        top: 3vw;
        right: 3.5vw;
    }

    &__coins {
        &:hover + .section-hero__coins-tooltip {
            top: 65px;
            opacity: 1;
        }
    }

    &__coins-tooltip {
        top: 30px;
        left: 50%;
        z-index: 2;
        width: 200px;
        opacity: 0;
        transform: translateX(-50%);
        text-align: center;
    }

    &__avatar {
        position: relative;
        display: flex;
        flex-grow: 1;
        height: 0;
        margin-top: 7vw;
        padding-bottom: 10vw;

        &-img {
            position: absolute;
            bottom: -3vw;
            left: 50%;
            width: 57%;
            max-width: 100%;
            transform: translateX(-50%);
            object-fit: contain;
        }
    }

    &__info {
        z-index: 2;
        width: 105%;
        padding: 4vw 67px;
        color: #ffffff;
        font-weight: 700;
        background-image: url(/images/info-bg.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        gap: 10px;

        &-box {
            display: flex;
            align-items: center;
            align-self: center;
            flex-direction: column;
        }

    }

    &__name {
        font-size: 20px;
    }

    &__desc {
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
    }

    &__class {
        display: inline-flex;
        font-size: 16px;
        gap: 10px;
    }

    &__arrows {
        position: relative;
        z-index: 2;
        display: flex;
        width: 100%;
        margin-top: -3vw;
        margin-left: 19.6vw;
        padding-top: 1vw;
        gap: 30px;

    }

    &__arrow {
        width: 38px !important;
        height: 47%;
        cursor: pointer;
        transition-duration: 0.3s;
        transition-property: transform;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            opacity: 0.7;
        }
    }
}
</style>
