<template>
    <span class="ui-passive-ability">
        <span class="ui-passive-ability__box">
            <component :is="component" class="ui-passive-ability__icon"/>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'lighting'
        },
    },
    data() {
        return {}
    },
    computed: {
        // classes() {
        //     return {
        //         [`ui-class`]: true,
        //     }
        // },
        component() {
            const name = this.icon[0].toUpperCase() + this.icon.slice(1)
            return `Icon${name}`
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-passive-ability {
    display: inline-flex;

    &__box {
        position: relative;
        width: inherit;
        height: 0;
        padding-bottom: 100%;
        background-image: url('./ability-bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    &__icon {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        display: inline-flex;
        max-width: 40%;
        height: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
