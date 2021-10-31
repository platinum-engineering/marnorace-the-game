<template>
    <div class="block-item" @click="$emit('click')">
        <div class="block-item__img-box">
            <img
                :src="`/images/maps/${item.img}.jpg`"
                alt="Map"
                class="block-item__img"
            >
        </div>

        <i class="block-item__players-count"><i>{{ item.count }}</i></i>
        <i class="block-item__size"><i>{{ item.size }}</i></i>
        <i class="block-item__dice">
            <img
                :src="`/images/dice/${item.dice}.png`"
                alt="Map"
                class="block-item__img"
            >
        </i>
        <i class="block-item__shadow"></i>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: null
        },
    },
}
</script>

<style lang="scss" scoped>
.section-maps__item--active {
    transform: scale(1.2);
    .block-item__shadow {
        opacity: 1;
    }
}
.block-item {
    position: relative;
    transition-duration: 0.22s;
    &:hover {
        transform: scale(1.2);
        .block-item__shadow {
            //opacity: 1;
        }
    }

    &__img-box {
        position: relative;
        width: 100%;
        //box-shadow: 4px 9px 7px 0 #000000;
        box-shadow: 0px 15px 21px rgba(141, 114, 72, 0.4);

        overflow: hidden;
    }

    &__img {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        margin: auto;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }

    &__players-count {
        position: absolute;
        z-index: 3;
        top: 0;
        left: -10px;
        display: inline-flex;
        align-items: center;
        width: 30px;
        height: 30px;
        font-size: 16px;
        color: #ffffff;
        font-weight: 700;
        background-image: url('/images/players-bg.png');
        background-repeat: no-repeat;
        background-size: cover;

        i {
            margin-left: auto;
            padding-right: 4px;
            line-height: 1;
            font-style: normal;
        }
    }

    &__size {
        text-transform: uppercase;
        z-index: 3;
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-flex;
        width: 2vw;
        height: 2vw;
        padding-top: 3px;
        line-height: 1;
        color: #ffffff;
        background-image: url('/images/size-bg.png');
        background-repeat: no-repeat;
        background-size: cover;

        i {
            margin: auto;
            font-size: 14px;
            line-height: 1;
            font-weight: 700;
            font-style: normal;
        }
    }

    &__dice {
        z-index: 3;
        position: absolute;
        bottom: -2px;
        left: 10px;
        width: 30px;
        height: 30px;
        img {
            width: 100%;
            max-width: 100%;
            object-fit: cover;
        }
        background-size: contain;
    }
    &__shadow {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90%;
        box-shadow: 0 0 40px 10px #4955ff;
        opacity: 0;
        transition-duration: 0.3s;
    }
}
</style>
