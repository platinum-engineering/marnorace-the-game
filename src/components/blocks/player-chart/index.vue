<template>
    <ul class="container">
        <PlayerItem v-for="player in players" :key="player.id" :img="player.image" :score="player.score"/>
    </ul>
</template>

<script>
import PlayerItem from './item.vue'
export default {
    name: 'PlayerChart',
    components: {
        PlayerItem
    },
    data: () => ({
        players: [
            {
                id: 0,
                image: '1',
                score: 26
            },
            {
                id: 1,
                image: '2',
                score: 4
            },
            {
                id: 2,
                image: '3',
                score: 0
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
.container {
    width: 42vw;
    height: 100%;
}
</style>
