<template>
    <section class="block-ability">
        <p class="block-ability__desc">
            A rogue is a versatile character, capable of sneaky combat and nimble tricks. The rogue is stealthy and
            dexterous, capable of finding and disarming traps and picking locks. The rogue also has the ability to
            "backstab" enemies who are caught off-guard or taken by surprise, inflicting extra damage.
        </p>
        <div class="block-ability__items">
            <LBlockItem
                v-for="item in items"
                :key="item.id"
                :img="item.id"
                :tooltip="item.tooltip"
                class="block-ability__item"
            />
        </div>
    </section>
</template>

<script> 

import LBlockItem from './item'

export default {
    components: {
        LBlockItem
    },
    data: () => ({
        items: [
            {
                id: 1,
                tooltip: 'Reroll the Dice'
            },
            {
                id: 2,
                tooltip: 'Ignore the Event'
            },
            {
                id: 3,
                tooltip: 'Stab an opponent'
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
.block-ability {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 536px;
    height: 380px;
    background-image: url('/images/abilities-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &__desc {
        width: 100%;
        padding: 7vw 9vw 0 9vw;
        font-size: 14px;
        line-height: 1.3;
        letter-spacing: 0.02em;
        color: #3A3127;
        font-weight: 700;

    }

    &__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 66%;
        margin-top: 10px;
        gap: 1vw;
    }

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 30%;
        flex-direction: column;
    }
}
</style>
