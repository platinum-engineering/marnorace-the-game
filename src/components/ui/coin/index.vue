<template>
    <span class="ui-coin">
        <img class="ui-coin__img" src="./coin.png" alt="Coin">
        <span class="ui-coin__val"><slot/></span>
    </span>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
.ui-coin {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    &__img {
        width: 4vw;
        height: 4vw;
    }
    &__val {
        margin-left: 5px;
        color: #FF5C00;
        font-size: 2.2vw;
        font-weight: 700;
    }
}
</style>
