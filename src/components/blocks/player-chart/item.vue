<template>
    <li class="row">
        <div class="row__content">
            <img class="hero" :src="`/images/heroes/${img}.png`" alt=""/>
            <img class="coin" src="/images/finish/coin.png" alt="coin"/>
            <div>X {{ coins }}</div>
        </div>
        <img class="bg" src="/images/finish/player-bg.png" alt=""/>
    </li>
</template>

<script>
export default {
    name: 'PlayerChartItem',
    props: {
        img: {
            type: String,
            default: '',
        },
        score: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            coins: 0,
        };
    },
    mounted() {
        setTimeout(() => {
            if (this.coins !== this.score) {
                const i = setInterval(() => {
                    if (this.coins < this.score) {
                        this.coins++;
                    } else if (this.coins > this.score) {
                        this.coins--;
                    } else {
                        clearInterval(i);
                    }
                }, 100);
            }
        }, 1000);
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin: 20px 0;
    position: relative;

    &__content {
        position: absolute;
        width: 100%;
        height: 100%;
        color: #ffc978;
        font-size: 4rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }
}
.bg {
    width: 100%;
}

.hero {
    height: 100%;
    padding: 8px 8px 8px 28px;
}

.coin {
    margin: 0 12px 0 32px;
}
</style>
