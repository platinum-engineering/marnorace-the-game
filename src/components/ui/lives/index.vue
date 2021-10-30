<template>
    <span :class="{'ui-lives--vertical': vertical}"
          class="ui-lives"
    >
        <transition mode="out-in" name="fade">
            <component :is="`span`" :key="items" class="ui-lives__box">
                <IconHeart
                    v-for="item in items"
                    :key="item"
                    class="ui-lives__item"
                    cllives
                />
            </component>
        </transition>
    </span>
</template>

<script>
export default {
    props: {
        items: {
            type: [Number, String],
            default: 5
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    computed: {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.ui-lives {
    &__box {
        display: inline-flex;
        color: #D9D5DE;
        gap: 15px;
    }

    &__item {
        transition: all 1s;

    }

    &--vertical {
        .ui-lives__box {
            flex-direction: column;
        }
    }

}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
