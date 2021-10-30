<template>
    <div id="app">
        <div class="layout-start">
            <SectionStartLoading v-if="$route.name === 'start'"/>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
import SectionStartLoading from '@/components/sections/start-loading'

export default {
    name: 'App',
    components: {
        SectionStartLoading,
    },
    created() {
        document.title = 'Marnorace'
    }
}

</script>
<style lang="scss">
#app {
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    background-color: #200C71;
    background-image: url('/images/game/map0.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
