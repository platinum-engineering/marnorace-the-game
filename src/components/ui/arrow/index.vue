<template>
    <button
        class="ui-arrow"
        @click="$emit('click')"
    >
        <svg width="87" height="38" viewBox="0 0 87 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M87 12.7805H3M3 12.7805L26.0099 36M3 12.7805L12.9802 2" stroke="currentColor" stroke-width="3"/>
        </svg>
    </button>
</template>

<script>
    export default {
        props: {
        }
    }
</script>

<style scoped lang="scss">
    .ui-arrow {
        border: 0;
        outline: 0;
        background-color: transparent;
        color: #ffffff;
    }
</style>
