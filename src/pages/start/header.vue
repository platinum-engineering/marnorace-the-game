<template>
    <section class="section-header">
        <!--        <component is="span" :key="activeHero.nft" class="section-header__id">{{ activeHero.nft }}</component>-->
        <div class="section-header__id">
            <transition name="fade" mode="out-in">
                <component
                    :key="activeHero.nft"
                    :is="`span`"
                    class="section-header__id-text"
                >
                    {{ activeHero.nft }}
                </component>
            </transition>
        </div>
        <div class="section-header__metamask">0xFfDE1CB...9dCf0151 <span class="hover hover-top section-header__tooltip">Your Wallet Address</span></div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
    ...mapState('heroes', ['activeHero']),
    }
}
</script>

<style lang="scss" scoped>
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    line-height: 1;
    letter-spacing: 0.02em;
    font-weight: 700;

    &__id {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 70px;
        padding: 0 5.3vw;
        color: #E8934B;
        background-image: url('/images/gray-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        &-text {

        }
    }

    &__metamask {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 70px;
        min-width: 22vw;
        padding: 0 5.3vw;
        font-size: 1vw;
        color: #000000;
        background-image: url('/images/orange-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: relative;
        &:hover > .section-header__tooltip {
            top: 65px;
            opacity: 1;
        }
    }
    &__tooltip {
        position: absolute;
        top: 35px;
    }
}
</style>
