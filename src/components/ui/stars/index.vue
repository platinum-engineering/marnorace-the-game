<template>
    <span :class="{'ui-stars--vertical': vertical}"
          class="ui-stars">
        <IconStar
            v-for="item in items"
            :key="item"
            class="ui-stars__item"
        />
    </span>
</template>

<script>
export default {
    props: {
        items: {
            type: Number,
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
.ui-stars {
    display: inline-flex;
    color: #D9D5DE;
    gap: 15px;

    &--vertical {
        flex-direction: column;
    }

    //&:hover {
    //    .ui-stars__item {
    //        color: $color--primary;
    //    }
    //}
    //
    //&__item {
    //    cursor: pointer;
    //    transition-duration: 0.3s;
    //
    //    &:hover {
    //
    //        & ~ * {
    //            color: #D9D5DE !important;
    //        }
    //    }
    //}
}
</style>
