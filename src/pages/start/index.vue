<template>
    <div class="page-start">
        <div class="wrap">
            <section class="page-start__content">
                <LSectionHeader class="page-start__header"/>
                <BlockHero :is-pick-up-coins="isPickUpCoins" class="page-start__hero"/>
                <BlockAbilities class="page-start__abilityes"/>
                <BlockMaps class="page-start__maps"/>
                <BlockPlay class="page-start__play" @click="isPickUpCoins = true"/>
            </section>
        </div>
    </div>
</template>


<script>
import LSectionHeader from './header'
import BlockHero from '@/components/blocks/hero'
import BlockAbilities from '@/components/blocks/abilities'
import BlockMaps from '@/components/blocks/maps'
import BlockPlay from '@/components/blocks/play'

export default {
    components: {
        LSectionHeader,
        BlockHero,
        BlockAbilities,
        BlockMaps,
        BlockPlay
    },
    data() {
        return {
            isPickUpCoins: false
        }
    },
}
</script>

<style lang="scss" scoped>
.page-start {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/main-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    &__content {
        display: grid;
        grid-template-columns: 54% 5% 41%;
        flex-grow: 1;

        grid-template-rows: 14vh 66vh 20vh;
        grid-template-areas:
            "header header header"
            "hero . abilityes"
            "maps . play";
    }

    &__header {
        grid-area: header;
    }

    &__hero {
        grid-area: hero;
    }

    &__abilityes {
        border-radius: 5px;
        grid-area: abilityes;
    }

    &__maps {
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        background-color: rgba(255, 153, 0, 0.05);
        grid-area: maps;
    }

    &__play {
        margin-top: -5vw;
        grid-area: play;
    }
}

.wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
}
</style>
