<template>
    <div class="section-maps">
        <LBlockItem
            v-for="(i, index) in items"
            :key="index"
            :class="[
                `section-maps__item--${index}`,
                {[`section-maps__item--active`]: activeItem === index}
            ]"
            :item="i"
            class="section-maps__item"
            @click="activeItem = index"
        />
    </div>
</template>

<script>
import LBlockItem from './item'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        LBlockItem
    },
    data() {
        return {
            activeItem: 0,
            items: [
                {
                    count: 3,
                    size: 's',
                    img: 1,
                    dice: 1
                },
                {
                    count: 4,
                    size: 'm',
                    img: 2,
                    dice: 2
                },
                {
                    count: 5,
                    size: 'l',
                    img: 3,
                    dice: 3

                },
                {
                    count: 6,
                    size: 'xl',
                    img: 4,
                    dice: 4
                },
            ]
        }
    },
    computed: {},
    methods: {},
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.section-maps {
    display: flex;
    gap: 30px;

    ::v-deep .vueperslide {
        padding: 0 10px;
    }

    &__item {
        display: flex;
        flex-grow: 1;
        height: 100%;
        margin: 0;
        cursor: pointer;
        //width: 100%;
        & ::v-deep .block-item__img-box {
            border-radius: 72% 28% 69% 31% / 22% 51% 49% 78%;
        }

        & ::v-deep .block-item__shadow {
            border-radius: 72% 28% 69% 31% / 22% 51% 49% 78%;
        }


        &--2 {
            & ::v-deep .block-item__img-box {
                border-radius: 56% 44% 69% 31% / 56% 82% 18% 44%;
            }

            & ::v-deep .block-item__shadow {
                border-radius: 56% 44% 69% 31% / 56% 82% 18% 44%;
            }
        }

        &--3 {
            & ::v-deep .block-item__img-box {
                border-radius: 15% 85% 46% 54% / 56% 46% 54% 44%;
            }

            & ::v-deep .block-item__shadow {
                border-radius: 15% 85% 46% 54% / 56% 46% 54% 44%;
            }
        }

        &--4 {
            & ::v-deep .block-item__img-box {
                border-radius: 34% 66% 24% 76% / 74% 26% 74% 26%;
            }

            & ::v-deep .block-item__shadow {
                border-radius: 34% 66% 24% 76% / 74% 26% 74% 26%;
            }
        }

        &--5 {
            & ::v-deep .block-item__img-box {
                border-radius: 14% 86% 24% 76% / 74% 59% 41% 26%;
            }

            & ::v-deep .block-item__shadow {
                border-radius: 14% 86% 24% 76% / 74% 59% 41% 26%;
            }
        }

        &--6 {
            & ::v-deep .block-item__img-box {
                border-radius: 46% 54% 24% 76% / 31% 59% 41% 69;
            }

            & ::v-deep .block-item__shadow {
                border-radius: 46% 54% 24% 76% / 31% 59% 41% 69;
            }
        }
    }

    &__img {
        width: 100%;
        height: 100%;
        margin: auto;
        object-fit: cover;
    }

    &__btns {
        display: flex;
        justify-content: center;
        padding: 15px 0 0 0;
        gap: 30px;

        &-next {
            display: flex;
            width: 60px;
            transform: scale(-1);
        }

        &-prev {
            display: flex;
            width: 60px;
        }
    }
}
</style>
