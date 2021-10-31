<template>
    <ul class="container">
        <PlayerItem :class="['player-item', `player-item_${player.id}`]" v-for="player in players" :key="player.id" :img="player.image" :score="player.score"/>
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
    width: 38vw;
    height: 100%;
}

.player-item {
  opacity: 0;
  animation: playerIn 1s linear 1 forwards;
}

.player-item_0 {
    animation-delay: 0.5s;
}

.player-item_1 {
    animation-delay: 1s;
}

.player-item_2 {
    animation-delay: 1.5s;
}

@keyframes playerIn {
    from {
        opacity: 0;
        transform: translateX(-150%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
 
</style>
