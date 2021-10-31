<template>
    <div class="page">
        <section class="page__content">
            <div class="aside aside__left">
                <BlockPlayerChart/>
            </div>
            <aside class="aside aside__right">
                <img style="width: 100%;" src="/images/finish/marnothrone.png" alt="throne">
                <h2 class="aside__right_title">First Come, First Served</h2>
            </aside>
        </section>
    </div>
</template>


<script> 
import BlockPlayerChart from '@/components/blocks/player-chart'

export default { 
    components: {
        BlockPlayerChart
    }
}
</script>

<style lang="scss" scoped>
.page {
    width: 100vw;
    height: 100vh;
    background-image: url('/images/finish/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    overflow: hidden;

    &__content {
        display: flex;
        height: 100%;

        &  .aside {
            &__right {
                margin-left: auto;

                position: relative;

                &_title {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    margin: 0;
                    text-align: center;
                    font-size: 4rem;
                    color: white;
                }
            }
        }
    }
}

</style>
